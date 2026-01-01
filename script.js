// ===================== script.js (FINAL — FULLY VERIFIED) =====================

const messagesEl = document.getElementById("chatMessages");
const choicesEl = document.getElementById("choices");
const headerEl = document.querySelector(".npc-name");
const container = document.querySelector(".chat-container");

/* -------------------- GAME STATE -------------------- */
let stats;
let scenarioPool = [];
let currentScenario;
let turnIndex = 0;

let timerInterval = null;
let autoPickTimeout = null;

/* -------------------- RIZZ TRACKING -------------------- */
let totalScore = 0;
let gamesPlayed = 0;

/* -------------------- SIDEBAR -------------------- */
const sidebar = document.createElement("div");
sidebar.className = "rizz-stats";
sidebar.innerHTML = `
  <h4>Average Rizz</h4>
  <div class="value" id="avgRizz">—</div>
`;
container.appendChild(sidebar);

/* -------------------- HELPERS -------------------- */
function resetStats() {
  stats = {
    confidence: 0,
    humor: 0,
    restraint: 0,
    originality: 0,
    desperation: 0
  };
}

function addMessage(text, sender = "npc") {
  const el = document.createElement("div");
  el.className = `message ${sender}`;
  el.textContent = text;
  messagesEl.appendChild(el);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

/* -------------------- SCORING -------------------- */
function calculateScore() {
  let score = 50;

  score += stats.confidence * 1.4;
  score += stats.humor * 1.2;
  score += stats.restraint * 1.3;
  score += stats.originality * 1.1;

  if (stats.desperation > 15) {
    score -= (stats.desperation - 15) * 1.5;
  }

  if (currentScenario.difficulty === "MEDIUM") score -= 5;
  if (currentScenario.difficulty === "HARD") score -= 10;

  return Math.max(0, Math.min(100, Math.round(score)));
}

/* -------------------- RIZZ TIERS (10) -------------------- */
function getTier(score) {
  return Math.min(10, Math.floor(score / 10) + 1);
}

function getTierLabel(tier) {
  return [
    "Tragic Rizz 💀",
    "Painful",
    "Awkward",
    "Low",
    "Mid",
    "Decent",
    "Smooth",
    "Dangerous",
    "Elite",
    "Godly 👑"
  ][tier - 1];
}

/* -------------------- TIMER -------------------- */
function clearTimers() {
  clearInterval(timerInterval);
  clearTimeout(autoPickTimeout);
}

function startTimer(buttons) {
  const bar = document.createElement("div");
  bar.className = "timer-bar";

  const fill = document.createElement("div");
  fill.className = "timer-fill";
  fill.style.animationDuration = "15s";

  bar.appendChild(fill);
  choicesEl.prepend(bar);

  let seconds = 0;

  timerInterval = setInterval(() => {
    seconds++;
    buttons.forEach(btn => {
      if (seconds >= 10) btn.classList.add("fading");
      if (seconds >= 13) btn.classList.add("final");

    });
  }, 1000);

  autoPickTimeout = setTimeout(() => {
    clearTimers();
    addMessage("you hesitate.");
    buttons[Math.floor(Math.random() * buttons.length)].click();
  }, 15000);

}

/* -------------------- CHOICES -------------------- */
function renderChoices(choices) {
  clearTimers();
  choicesEl.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "options-grid";
  choicesEl.appendChild(grid);

  const buttons = [];

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = choice.text;

    btn.onclick = () => {
      clearTimers();
      addMessage(choice.text, "user");

      Object.entries(choice.effects || {}).forEach(([k, v]) => {
        if (stats[k] !== undefined) stats[k] += v;
      });

      choicesEl.innerHTML = "";
      setTimeout(() => {
        addMessage(choice.response);
        nextTurn();
      }, 600);
    };

    buttons.push(btn);
    grid.appendChild(btn);
  });

  startTimer(buttons);
}

/* -------------------- SCENARIO END -------------------- */
function showEnding() {
  clearTimers();

  const score = calculateScore();
  totalScore += score;
  gamesPlayed++;

  document.getElementById("avgRizz").textContent =
    Math.round(totalScore / gamesPlayed);

  const tier = getTier(score);

  addMessage(`Final Rizz: ${score}/100`);
  addMessage(getTierLabel(tier));

  const frame = document.createElement("div");
  frame.className = "image-frame";
  frame.innerHTML = `<img src="memes/tier${tier}.png" alt="Rizz Tier ${tier}">`;
  messagesEl.appendChild(frame);

  const btn = document.createElement("button");
  btn.className = "choice-btn restart-btn";
  btn.textContent = scenarioPool.length ? "Next Scenario" : "View Final Card";
  btn.onclick = scenarioPool.length ? startScenario : showFinalCard;

  choicesEl.innerHTML = "";
  choicesEl.appendChild(btn);
}

/* -------------------- FINAL SHARE CARD -------------------- */
function showFinalCard() {
  messagesEl.innerHTML = "";
  choicesEl.innerHTML = "";

  const avg = Math.round(totalScore / gamesPlayed);
  const tier = getTier(avg);

  const card = document.createElement("div");
  card.className = "final-card";
  card.innerHTML = `
    <div class="image-frame">
      <img src="memes/tier${tier}.png" alt="Final Rizz Tier">
    </div>
    <h2>${getTierLabel(tier)}</h2>
    <p>Average Rizz: ${avg}/100</p>
    <p>checkrizz.com</p>
  `;
  messagesEl.appendChild(card);

  const shareBtn = document.createElement("button");
  shareBtn.className = "choice-btn restart-btn";
  shareBtn.textContent = "Share Result";
  shareBtn.onclick = () => {
    navigator.clipboard.writeText(
      `My Rizz Level: ${getTierLabel(tier)} (${avg}/100)\nCheckRizz`
    );
    shareBtn.textContent = "Copied!";
  };

  const replayBtn = document.createElement("button");
  replayBtn.className = "choice-btn restart-btn";
  replayBtn.textContent = "Replay Entire Quiz";
  replayBtn.onclick = resetEntireGame;

  choicesEl.appendChild(shareBtn);
  choicesEl.appendChild(replayBtn);

}

/* -------------------- FLOW -------------------- */
function nextTurn() {
  turnIndex++;
  const turn = currentScenario.turns[turnIndex];

  if (!turn) {
    setTimeout(showEnding, 700);
    return;
  }

  if (turn.npc) {
    addMessage(turn.npc);
    setTimeout(nextTurn, 600);
  } else {
    renderChoices(turn.choices);
  }
}

function startScenario() {
  clearTimers();
  messagesEl.innerHTML = "";
  choicesEl.innerHTML = "";
  resetStats();
  turnIndex = 0;

  if (scenarioPool.length === 0) {
    scenarioPool = [...scenarios];
  }

  currentScenario = scenarioPool.shift();
  headerEl.textContent = `Evaluator — ${currentScenario.difficulty}`;

  currentScenario.intro.forEach((line, i) => {
    setTimeout(() => addMessage(line), i * 600);
  });

  setTimeout(() => {
    renderChoices(currentScenario.turns[0].choices);
  }, currentScenario.intro.length * 600 + 500);
}
function resetEntireGame() {
  clearTimers();

  // Reset global rizz tracking
  totalScore = 0;
  gamesPlayed = 0;
  document.getElementById("avgRizz").textContent = "—";

  // Reset scenario pool
  scenarioPool = [...scenarios];

  // Reset UI
  messagesEl.innerHTML = "";
  choicesEl.innerHTML = "";
  headerEl.textContent = "Evaluator — EASY";

  // Start fresh
  startScenario();
}

/* -------------------- START -------------------- */
startScenario();

