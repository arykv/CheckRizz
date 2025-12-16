// ===================== scenarios.js =====================

const scenarios = [

/* ===================== EASY (3) ===================== */
/* 3 GOOD • 1 BAD */

{
  id: "easy_voice_note",
  difficulty: "EASY",
  intro: [
    "SITUATION: casual chat",
    "they randomly send a voice note.",
    "you didn’t expect it."
  ],
  turns: [
    {
      choices: [
        { text: "reply with text naturally", response: "comfortable rhythm established.", effects: { confidence: 12 } },        // GOOD
        { text: "send a short voice back", response: "mirrored energy feels right.", effects: { confidence: 14 } },           // GOOD
        { text: "light joke about it", response: "humor lands cleanly.", effects: { humor: 12 } },                             // GOOD
        { text: "overanalyze before replying", response: "moment cools slightly.", effects: { desperation: 8 } }            // BAD
      ]
    },
    { npc: "they reply quickly." },
    {
      choices: [
        { text: "keep the pace steady", response: "flow stays natural.", effects: { confidence: 10 } },                       // GOOD
        { text: "slow it just a bit", response: "control shows.", effects: { restraint: 10 } },                               // GOOD
        { text: "add something playful", response: "still works.", effects: { humor: 8 } },                                  // GOOD
        { text: "explain your last message", response: "unnecessary clarification.", effects: { desperation: 8 } }          // BAD
      ]
    }
  ]
},

{
  id: "easy_inside_joke",
  difficulty: "EASY",
  intro: [
    "SITUATION: ongoing chat",
    "an inside joke opportunity appears."
  ],
  turns: [
    {
      choices: [
        { text: "reference it subtly", response: "shared context matters.", effects: { confidence: 14 } },                     // GOOD
        { text: "build on it lightly", response: "timing feels right.", effects: { humor: 12 } },                              // GOOD
        { text: "acknowledge without forcing", response: "calm confidence.", effects: { restraint: 10 } },                    // GOOD
        { text: "push the joke too hard", response: "energy slips.", effects: { desperation: 10 } }                            // BAD
      ]
    },
    { npc: "they react positively." },
    {
      choices: [
        { text: "say less after", response: "silence works.", effects: { confidence: 10 } },                                   // GOOD
        { text: "change topic smoothly", response: "transition lands.", effects: { restraint: 8 } },                          // GOOD
        { text: "add one more comment", response: "still okay.", effects: { humor: 6 } },                                      // GOOD
        { text: "spam follow-ups", response: "overkill.", effects: { desperation: 12 } }                                      // BAD
      ]
    }
  ]
},

{
  id: "easy_story_reply",
  difficulty: "EASY",
  intro: [
    "SITUATION: replying to a story",
    "late-night post."
  ],
  turns: [
    {
      choices: [
        { text: "casual observation", response: "natural entry.", effects: { confidence: 12 } },                               // GOOD
        { text: "simple compliment", response: "noticed.", effects: { confidence: 10 } },                                      // GOOD
        { text: "low-effort humor", response: "light engagement.", effects: { humor: 10 } },                                   // GOOD
        { text: "try to impress", response: "forced tone.", effects: { desperation: 8 } }                                      // BAD
      ]
    },
    { npc: "they respond." },
    {
      choices: [
        { text: "match their energy", response: "good alignment.", effects: { confidence: 10 } },                               // GOOD
        { text: "wait before replying", response: "measured pacing.", effects: { restraint: 10 } },                            // GOOD
        { text: "short playful reply", response: "still works.", effects: { humor: 8 } },                                      // GOOD
        { text: "reply instantly again", response: "reads eager.", effects: { desperation: 8 } }                               // BAD
      ]
    }
  ]
},

/* ===================== MEDIUM (4) ===================== */
/* 2 GOOD • 2 BAD */

{
  id: "medium_reply_delay",
  difficulty: "MEDIUM",
  intro: [
    "SITUATION: one-on-one chat",
    "their replies slow down."
  ],
  turns: [
    {
      choices: [
        { text: "mirror their pace", response: "patience pays.", effects: { restraint: 12 } },                                  // GOOD
        { text: "stay occupied", response: "independence shows.", effects: { confidence: 12 } },                               // GOOD
        { text: "reply instantly anyway", response: "energy tilts.", effects: { desperation: 10 } },                           // BAD
        { text: "send a follow-up", response: "pressure builds.", effects: { desperation: 12 } }                               // BAD
      ]
    },
    { npc: "they apologize later." },
    {
      choices: [
        { text: "brush it off calmly", response: "no tension added.", effects: { confidence: 8 } },                             // GOOD
        { text: "change topic", response: "reset achieved.", effects: { originality: 8 } },                                     // GOOD
        { text: "call it out", response: "awkward shift.", effects: { desperation: 10 } },                                      // BAD
        { text: "over-joke it", response: "tries too hard.", effects: { desperation: 8 } }                                      // BAD
      ]
    }
  ]
},

{
  id: "medium_group_tease",
  difficulty: "MEDIUM",
  intro: [
    "SITUATION: group chat",
    "someone teases you."
  ],
  turns: [
    {
      choices: [
        { text: "laugh it off", response: "confidence reads well.", effects: { confidence: 12 } },                               // GOOD
        { text: "tease back lightly", response: "balanced response.", effects: { humor: 10 } },                                 // GOOD
        { text: "get defensive", response: "tone drops.", effects: { desperation: 12 } },                                       // BAD
        { text: "overdo sarcasm", response: "edge sharpens.", effects: { desperation: 10 } }                                    // BAD
      ]
    },
    { npc: "people react." },
    {
      choices: [
        { text: "exit gracefully", response: "image stays intact.", effects: { restraint: 10 } },                               // GOOD
        { text: "one-liner then stop", response: "leaves impact.", effects: { humor: 10 } },                                     // GOOD
        { text: "keep pushing", response: "overexposure.", effects: { desperation: 10 } },                                      // BAD
        { text: "go silent abruptly", response: "awkward gap.", effects: { originality: -6 } }                                  // BAD
      ]
    }
  ]
},

{
  id: "medium_seen_message",
  difficulty: "MEDIUM",
  intro: [
    "SITUATION: direct messages",
    "you get left on seen."
  ],
  turns: [
    {
      choices: [
        { text: "do nothing", response: "restraint holds.", effects: { restraint: 12 } },                                        // GOOD
        { text: "shift topic later", response: "smooth recovery.", effects: { originality: 10 } },                              // GOOD
        { text: "send follow-up", response: "pressure applied.", effects: { desperation: 10 } },                                // BAD
        { text: "joke about it", response: "risk doesn’t land.", effects: { desperation: 8 } }                                  // BAD
      ]
    },
    { npc: "they reply eventually." },
    {
      choices: [
        { text: "act normal", response: "tension fades.", effects: { confidence: 10 } },                                         // GOOD
        { text: "keep replies short", response: "control regained.", effects: { restraint: 10 } },                              // GOOD
        { text: "bring it up", response: "awkward timing.", effects: { desperation: 8 } },                                      // BAD
        { text: "overcompensate", response: "reads forced.", effects: { desperation: 10 } }                                     // BAD
      ]
    }
  ]
},

{
  id: "medium_opinion_test",
  difficulty: "MEDIUM",
  intro: [
    "SITUATION: opinion shared",
    "they disagree."
  ],
  turns: [
    {
      choices: [
        { text: "acknowledge calmly", response: "maturity shows.", effects: { confidence: 12 } },                                // GOOD
        { text: "add nuance", response: "thoughtful depth.", effects: { originality: 10 } },                                     // GOOD
        { text: "push harder", response: "ego surfaces.", effects: { desperation: 10 } },                                       // BAD
        { text: "overexplain", response: "loses clarity.", effects: { desperation: 8 } }                                        // BAD
      ]
    },
    { npc: "conversation continues." },
    {
      choices: [
        { text: "change topic", response: "smooth pivot.", effects: { restraint: 10 } },                                         // GOOD
        { text: "stay concise", response: "confidence holds.", effects: { confidence: 10 } },                                    // GOOD
        { text: "reassert strongly", response: "tension rises.", effects: { desperation: 8 } },                                  // BAD
        { text: "joke nervously", response: "uncertain tone.", effects: { desperation: 6 } }                                     // BAD
      ]
    }
  ]
},

/* ===================== HARD (4) ===================== */
/* 1 GOOD • 3 BAD */

{
  id: "hard_hot_take",
  difficulty: "HARD",
  intro: [
    "SITUATION: public platform",
    "your post gains traction."
  ],
  turns: [
    {
      choices: [
        { text: "respond once, calmly", response: "measured authority.", effects: { confidence: 14 } },                          // GOOD
        { text: "clarify repeatedly", response: "defensive spiral.", effects: { desperation: 12 } },                            // BAD
        { text: "clap back", response: "crowd splits.", effects: { desperation: 10 } },                                          // BAD
        { text: "joke excessively", response: "credibility dips.", effects: { desperation: 8 } }                                // BAD
      ]
    },
    { npc: "attention keeps coming." },
    {
      choices: [
        { text: "log off", response: "image preserved.", effects: { restraint: 12 } },                                           // GOOD
        { text: "keep engaging", response: "overexposure.", effects: { desperation: 12 } },                                     // BAD
        { text: "double down", response: "ego escalates.", effects: { desperation: 14 } },                                      // BAD
        { text: "explain intent", response: "reads defensive.", effects: { desperation: 10 } }                                  // BAD
      ]
    }
  ]
},

{
  id: "hard_callout",
  difficulty: "HARD",
  intro: [
    "SITUATION: public callout",
    "people are watching."
  ],
  turns: [
    {
      choices: [
        { text: "stay composed", response: "control maintained.", effects: { confidence: 14 } },                                 // GOOD
        { text: "defend aggressively", response: "conflict grows.", effects: { desperation: 12 } },                             // BAD
        { text: "joke nervously", response: "misread humor.", effects: { desperation: 10 } },                                    // BAD
        { text: "panic respond", response: "pressure wins.", effects: { desperation: 14 } }                                     // BAD
      ]
    },
    { npc: "judgment lingers." },
    {
      choices: [
        { text: "exit cleanly", response: "dignity preserved.", effects: { restraint: 12 } },                                    // GOOD
        { text: "push back", response: "escalation.", effects: { desperation: 12 } },                                            // BAD
        { text: "over-clarify", response: "credibility drops.", effects: { desperation: 10 } },                                  // BAD
        { text: "stay silent awkwardly", response: "uncertain optics.", effects: { originality: -6 } }                           // BAD
      ]
    }
  ]
},

{
  id: "hard_pressure_reply",
  difficulty: "HARD",
  intro: [
    "SITUATION: high-stakes message",
    "expectations are high."
  ],
  turns: [
    {
      choices: [
        { text: "reply briefly after thinking", response: "strong composure.", effects: { confidence: 14 } },                   // GOOD
        { text: "reply instantly", response: "emotion leaks.", effects: { desperation: 12 } },                                  // BAD
        { text: "add humor", response: "misjudged timing.", effects: { desperation: 10 } },                                      // BAD
        { text: "overexplain context", response: "loses impact.", effects: { desperation: 10 } }                                // BAD
      ]
    },
    { npc: "reaction unfolds." },
    {
      choices: [
        { text: "maintain tone", response: "consistency holds.", effects: { confidence: 12 } },                                  // GOOD
        { text: "switch strategy", response: "instability noticed.", effects: { desperation: 8 } },                              // BAD
        { text: "seek reassurance", response: "neediness shows.", effects: { desperation: 12 } },                                // BAD
        { text: "double message", response: "pressure spikes.", effects: { desperation: 14 } }                                   // BAD
      ]
    }
  ]
},

{
  id: "hard_reputation_test",
  difficulty: "HARD",
  intro: [
    "SITUATION: reputation moment",
    "your response will be remembered."
  ],
  turns: [
    {
      choices: [
        { text: "stay authentic and brief", response: "respect earned.", effects: { confidence: 14 } },                         // GOOD
        { text: "play it safe", response: "impact lost.", effects: { restraint: 6 } },                                          // BAD
        { text: "go bold unnecessarily", response: "risk backfires.", effects: { desperation: 12 } },                           // BAD
        { text: "panic adjust", response: "uncertainty shows.", effects: { desperation: 14 } }                                   // BAD
      ]
    },
    { npc: "people form opinions." },
    {
      choices: [
        { text: "stand by it quietly", response: "confidence sustained.", effects: { confidence: 12 } },                         // GOOD
        { text: "backtrack publicly", response: "credibility dips.", effects: { desperation: 10 } },                             // BAD
        { text: "overjustify", response: "reads insecure.", effects: { desperation: 12 } },                                      // BAD
        { text: "seek validation", response: "status drops.", effects: { desperation: 14 } }                                     // BAD
      ]
    }
  ]
}

];
