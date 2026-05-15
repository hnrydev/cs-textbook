/**
 * Learning objectives, figure captions, section subtitles, and callouts merged into chapters at runtime.
 */
window.CHAPTER_PEDAGOGY = {
  foundations: {
    objectives: [
      "Say what it means for a problem to be ‘computational’ and distinguish problem statement from algorithm from implementation.",
      "Explain why abstraction layers exist and give one example of a leaky abstraction.",
      "Identify inputs, outputs, and feedback in a system you use daily."
    ],
    figureCaption:
      "Most programs are loops around this pattern: represent input, transform it with explicit rules, observe output, and sometimes feed results back as new input.",
    sections: [
      {
        matchHeading: "The Core Question",
        subtitle: "CS is about mechanizable procedures—not only programming syntax.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "If you cannot specify what counts as a correct answer for every allowed input, you do not yet have a problem definition—only a vibe."
          },
          {
            variant: "tip",
            title: "Try this",
            body: "Rewrite any homework prompt into three lines: valid inputs, required outputs, and forbidden behaviors (timeouts, crashes, wrong formats)."
          }
        ]
      },
      {
        matchHeading: "What Changes Between Beginner and Expert Understanding",
        subtitle: "Experts reuse the same lenses across languages and stacks.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "When you feel lost in a new framework, ask what state it owns, what invariants it relies on, and what happens when those invariants break."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "stack",
        title: "Zoom levels across CS practice",
        items: ["Applications & UX", "Languages & runtimes", "Operating systems", "Architecture & circuits", "Physics & fabrication limits"],
        caption:
          "You rarely jump straight from UX polish to transistor thresholds—but recognizing layers prevents blaming the wrong level when constraints clash."
      }
    ]
  },
  data: {
    objectives: [
      "Contrast discrete digital symbols with continuous physical quantities at the hardware boundary.",
      "Explain why floating-point error appears even when code ‘looks exact’.",
      "Describe how an encoding (like UTF-8) relates bits to human-readable text."
    ],
    figureCaption:
      "Meaning sits above physics: hardware stores states; encodings map those states to symbols people and programs agree on.",
    sections: [
      {
        matchHeading: "Numbers and Text",
        subtitle: "Fixed-width representations trade range and precision for predictable hardware behavior.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Never compare floating-point values with bare `==` in serious code; define tolerances or use decimal/rational libraries when money or science depends on it."
          }
        ]
      },
      {
        matchHeading: "Representation Is a Contract",
        subtitle: "Systems interoperate only where contracts align.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Most parser bugs and injection flaws are contract mismatches: one component interprets bytes differently than another assumes."
          }
        ]
      }
    ]
  },
  algorithms: {
    objectives: [
      "Define correctness for an algorithm relative to a specification.",
      "Relate Big-O statements to scaling—not wall-clock time on one laptop.",
      "Pick an algorithm family (divide-and-conquer, DP, greedy) given problem structure."
    ],
    figureCaption:
      "Growth rates summarize how work grows as n grows; constants still matter in practice. In big-O notation, logarithmic bases differ only by constant factors, so O(log₂ n) and O(log₁₀ n) share the class O(log n).",
    sections: [
      {
        matchHeading: "Thinking Algorithmically",
        subtitle: "Algorithm design is incremental refinement plus proof sketches.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Before coding, write a tiny worked example by hand. If you cannot trace it on paper, the computer will not magically clarify it."
          }
        ]
      },
      {
        matchHeading: "The Four-Part Algorithm Answer",
        subtitle: "Texts like CLRS train this pattern until it becomes reflex.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "If you skip correctness or complexity, you may ship something fast that is subtly wrong—or correct but unusable at scale."
          }
        ]
      }
    ]
  },
  structures: {
    objectives: [
      "Match operation budgets (insert, lookup, range scan) to concrete structures.",
      "Explain cache locality in one sentence tied to arrays versus pointer-heavy layouts.",
      "State one invariant maintained by a balanced tree or heap."
    ],
    figureCaption:
      "Pick structures after you know access patterns; premature optimization hides behind guessing here.",
    sections: [
      {
        matchHeading: "Locality and Access",
        subtitle: "Hardware rewards predictable memory access.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Competitive programming differs from systems programming: hidden constants and cache effects can flip winners at scale."
          }
        ]
      },
      {
        matchHeading: "Data Structures Are Algorithms Made Persistent",
        subtitle: "The structure is the promise about future operations.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "If tomorrow’s workload changes, yesterday’s perfect structure may become wrong—interfaces let you swap implementations."
          }
        ]
      }
    ]
  },
  architecture: {
    objectives: [
      "Outline fetch-decode-execute and where pipelines hide latency.",
      "Explain why cache misses can dominate runtime.",
      "Connect ISA decisions to what compilers can optimize."
    ],
    figureCaption:
      "Software stacks compile down to instructions that microarchitecture executes—performance cliffs appear when assumptions about memory fail.",
    sections: [
      {
        matchHeading: "The Fetch-Decode-Execute Cycle",
        subtitle: "Processors repeat this loop billions of times per second.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Profile before rewriting algorithms—often memory bandwidth, not math ops, is the bottleneck."
          }
        ]
      },
      {
        matchHeading: "The Cost Model Below Big O",
        subtitle: "Asymptotics abstract constants that machines actually pay.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Two O(n) scans can differ wildly if one walks RAM sequentially and the other chases random pointers."
          }
        ]
      }
    ]
  },
  os: {
    objectives: [
      "Contrast processes and threads and state what shares memory.",
      "Explain virtual memory as illusion plus enforcement mechanism.",
      "Give one example each of deadlock and race conditions."
    ],
    figureCaption:
      "System calls are deliberate gates: applications reach privileged kernel services without rewriting drivers.",
    sections: [
      {
        matchHeading: "Resource Management",
        subtitle: "The kernel multiplexes finite hardware among greedy programs.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "‘Slow disk’ and ‘slow network’ feel similar to users but imply totally different OS subsystems and tuning knobs."
          }
        ]
      },
      {
        matchHeading: "The OS as Illusion Manager",
        subtitle: "Useful lies simplify programming.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Isolation isn’t free—context switches, memory translation, and syscall overhead pay for safety."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "ladder",
        title: "Process lifecycle (teaching sketch)",
        items: ["Created / admitted", "Ready", "Running", "Blocked / waiting", "Terminated"],
        caption:
          "Kernels add finer-grained states and linkage between threads and processes; schedulers move runnable entities among ready queues while preserving isolation."
      }
    ]
  },
  languages: {
    objectives: [
      "Separate syntax, static semantics, and runtime semantics.",
      "Contrast static versus dynamic typing tradeoffs with concrete failure modes.",
      "Name two compile-time optimizations that rely on type information."
    ],
    figureCaption:
      "Languages negotiate readability, safety, performance, and tooling—no quadrant dominates every domain.",
    sections: [
      {
        matchHeading: "Paradigms",
        subtitle: "Paradigms bundle patterns for state and control flow.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Implement the same tiny problem (e.g., parsing CSV) in procedural, functional, and OO styles to feel what each rewards."
          }
        ]
      },
      {
        matchHeading: "Language Design Is Tradeoff Design",
        subtitle: "Every language answers ‘what mistakes should be impossible?’ differently.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Memory-safe languages buy reliability with runtime checks or restrictions—those costs appear in latency and expressiveness."
          }
        ]
      }
    ]
  },
  software: {
    objectives: [
      "Define cohesion and coupling on a real codebase sketch.",
      "Contrast unit, integration, and observability-based validation.",
      "Explain why maintenance dominates lifetime cost."
    ],
    figureCaption:
      "Delivery is cyclic—observe production reality and fold it back into design.",
    sections: [
      {
        matchHeading: "Managing Complexity",
        subtitle: "Engineering is controlling uncertainty under change.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Readable structure is a risk reducer: future-you debugging at 2 AM is also a stakeholder."
          }
        ]
      },
      {
        matchHeading: "Quality Is Multi-Dimensional",
        subtitle: "Optimize globally for context, not locally for elegance.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "‘Works on my machine’ plus heroic logging is not a substitute for tests around boundaries you do not control."
          }
        ]
      }
    ]
  },
  databases: {
    objectives: [
      "Express a relationship using keys instead of duplicated blobs.",
      "Explain what transactions protect when partially applied failures occur.",
      "Sketch how an index changes read/write costs."
    ],
    figureCaption:
      "Queries descend through planning layers until they hit storage realities—indexes reshape those realities.",
    sections: [
      {
        matchHeading: "Relational Thinking",
        subtitle: "Tables plus constraints encode integrity.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Draw entity-relationship diagrams before writing DDL—bugs in schema propagate everywhere."
          }
        ]
      },
      {
        matchHeading: "Data Models Shape Questions",
        subtitle: "Your schema steers which analyses feel natural.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Normalization reduces write anomalies; denormalization speeds reads—engineering picks per workload."
          }
        ]
      }
    ]
  },
  networks: {
    objectives: [
      "Map a URL fetch through DNS, TCP/TLS, routing, and link layers.",
      "Explain why retries plus timeouts demand idempotent interfaces.",
      "Contrast latency budgets across continents versus datacenter racks."
    ],
    figureCaption:
      "Layering hides complexity until assumptions leak—then debugging spans the stack.",
    sections: [
      {
        matchHeading: "Layering",
        subtitle: "Each layer exposes services and hides representation details.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "TLS terminates trust boundaries—treat certificate verification as part of correctness, not decoration."
          }
        ]
      },
      {
        matchHeading: "Protocols Are Layered Agreements",
        subtitle: "Protocols encode coordinated expectations across vendors.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Distributed debugging starts by identifying which layer first violates its assumptions."
          }
        ]
      }
    ]
  },
  security: {
    objectives: [
      "Write a one-paragraph threat model for a simple web app.",
      "Contrast confidentiality, integrity, and availability with examples.",
      "Explain why rolling crypto invites disaster."
    ],
    figureCaption:
      "Security properties overlap—availability failures enable social-engineering pivots; integrity losses cascade into confidentiality loss.",
    sections: [
      {
        matchHeading: "Security Is a System Property",
        subtitle: "Attackers wander the weakest integration points.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Secrets in repos, logs, or screenshots bypass even perfect cryptography."
          }
        ]
      },
      {
        matchHeading: "Cryptography",
        subtitle: "Math helps only when surrounding systems enforce keys and intent.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Crypto proves relationships among keys and messages—not that humans clicked the right button."
          }
        ]
      }
    ]
  },
  ai: {
    objectives: [
      "Separate classical search/planning intuitions from statistical ML.",
      "Explain overfitting without using buzzwords—tie it to train versus evaluation splits.",
      "List responsible AI checkpoints beyond accuracy."
    ],
    figureCaption:
      "Modern ML systems iterate through data, modeling choices, evaluation, deployment monitors—omit monitoring and drift wins silently.",
    sections: [
      {
        matchHeading: "Learning From Data",
        subtitle: "Generalization is the product; memorization is an anti-pattern.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Always ask what distribution training data came from versus where the model will run."
          }
        ]
      },
      {
        matchHeading: "AI as Search, Representation, and Generalization",
        subtitle: "Modern stacks blend symbolic structure with learned representations.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "LLMs approximate statistical patterns in text—they are not authoritative stores of facts unless grounded by retrieval and verification."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "matrix",
        title: "Beyond test-set accuracy",
        items: [
          "Calibration and uncertainty communication",
          "Robustness under distribution shift",
          "Fairness and impact across populations",
          "Latency, cost, and maintenance budgets"
        ],
        caption:
          "CS2023’s AI and society strands tie metrics to deployment consequences; monitoring catches drift that offline benchmarks miss."
      }
    ]
  },
  graphics: {
    objectives: [
      "Trace geometry through transforms to pixels at a high level.",
      "Contrast raster and vector tradeoffs.",
      "Name two accessibility considerations beyond color contrast."
    ],
    figureCaption:
      "Rendering is geometry plus optics approximated fast enough for interaction deadlines.",
    sections: [
      {
        matchHeading: "Images From Models",
        subtitle: "Artifacts often come from discrete sampling, not ‘bad math’.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Anti-aliasing, mipmapping, and LOD exist because screens measure discrete pixels of continuous phenomena."
          }
        ]
      },
      {
        matchHeading: "Interfaces Are Algorithms for People",
        subtitle: "HCI couples human cognition with control theory.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Prototype flows with keyboard-only navigation—you’ll surface focus traps early."
          }
        ]
      }
    ]
  },
  theory: {
    objectives: [
      "Place finite automata, CFGs, and Turing machines on a ‘power ladder’.",
      "Explain why undecidability is a mathematical fact, not a hardware shortage.",
      "Relate NP to polynomial-time verifiable YES witnesses for decision problems."
    ],
    figureCaption:
      "Each rung adds expressive power—and exposes new limits formal proofs can exploit.",
    sections: [
      {
        matchHeading: "Models With Limits",
        subtitle: "Simple machines make impossibility proofs tractable.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "If no Turing machine solves a problem, faster silicon doesn’t help—you must change the problem or relax guarantees."
          }
        ]
      },
      {
        matchHeading: "Why Theory Matters",
        subtitle: "Theory warns engineers away from futile searches.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Approximation algorithms and heuristics exist precisely because exact optima are sometimes provably hard."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "concept-map",
        title: "Automata ↔ languages (intro map)",
        items: [
          "Finite automata ↔ regular languages",
          "Pushdown automata ↔ context-free languages",
          "Turing machines ↔ computable / recognizable classes"
        ],
        caption:
          "Precise statements need formal definitions; arrows summarize standard introductory theorems, not proof substitutes."
      }
    ]
  },
  math: {
    objectives: [
      "Move fluidly among graphs, sets, and logical statements modeling one scenario.",
      "Identify where induction matches recursive structure.",
      "Sketch how probability and linear algebra touch ML pipelines."
    ],
    figureCaption:
      "Discrete math feeds correctness arguments; probability feeds uncertainty; linear algebra feeds geometry of data.",
    sections: [
      {
        matchHeading: "Proof and Precision",
        subtitle: "Formal language eliminates ambiguity— sometimes painfully.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Rewrite English specs as predicates; ambiguous nouns become obvious."
          }
        ]
      },
      {
        matchHeading: "The Math Dependency Graph",
        subtitle: "Topics reinforce each other—learn in spirals, not silos.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "The same graph object models roads, git histories, social ties, and neural computation graphs—only semantics change."
          }
        ]
      }
    ]
  },
  professional: {
    objectives: [
      "Analyze a feature through stakeholder harms and benefits.",
      "Enumerate operational ethics checkpoints (privacy, accessibility, labor).",
      "Draft basic accountability artifacts (logs, appeals paths)."
    ],
    figureCaption:
      "Professional judgment loops technical feasibility with questions of power and consequence.",
    sections: [
      {
        matchHeading: "Technical Decisions Have Social Meaning",
        subtitle: "Defaults are policy.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Automating a biased process scales bias unless upstream measurement changes."
          }
        ]
      },
      {
        matchHeading: "Ethics as Design Constraint",
        subtitle: "Treat values like latency budgets—negotiated early.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Responsible AI isn’t a sticker; it changes what you collect, label, ship, and sunset."
          }
        ]
      }
    ]
  },
  "logic-proof": {
    objectives: [
      "Translate informal claims into quantified logic.",
      "Explain induction tied to recursive definitions.",
      "Maintain loop invariants while reasoning about iterative code."
    ],
    figureCaption:
      "Proof styles are reusable tactics—pick the one that mirrors program structure.",
    sections: [
      {
        matchHeading: "From Intuition to Proof",
        subtitle: "Proof stretches examples into universal statements.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Tests explore instances; proofs constrain entire families once predicates are precise."
          }
        ]
      },
      {
        matchHeading: "Proof Techniques as Debugging Tools",
        subtitle: "Counterexamples are minimal failing tests for claims.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "When stuck proving ∀ claims, attempt a smallest counterexample search—you’ll refine definitions faster."
          }
        ]
      }
    ]
  },
  "formal-math": {
    objectives: [
      "Relate relations to graphs and database tables.",
      "Explain why algebraic laws simplify optimizations.",
      "Identify floating-point as a partial inverse of pure mathematical reals."
    ],
    figureCaption:
      "Uniform notation lets compilers, databases, and type theorists reuse the same lemmas.",
    sections: [
      {
        matchHeading: "The Shared Language",
        subtitle: "Seeing sets/functions everywhere collapses apparent novelty.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Programs as functions break when effects occur—then richer categories than pure functions model reality."
          }
        ]
      },
      {
        matchHeading: "Algebra for Software",
        subtitle: "Associativity enables parallelism.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "MapReduce shines when reduce is associative—otherwise grouping changes answers."
          }
        ]
      }
    ]
  },
  "counting-combinatorics": {
    objectives: [
      "Apply product and sum rules to estimate brute-force feasibility.",
      "Use pigeonhole arguments for collision inevitability.",
      "Connect expectation linearity to algorithm analyses."
    ],
    figureCaption:
      "These formulas repeatedly answer ‘how big is the search space?’—crypto strength depends on that answer.",
    sections: [
      {
        matchHeading: "Why Counting Is a CS Superpower",
        subtitle: "Cardinality predicts tractability.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Estimate password entropy by counting independent choices per symbol position."
          }
        ]
      },
      {
        matchHeading: "How Counting Enters Runtime",
        subtitle: "Even recursion trees are counting exercises.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Birthday collisions surprise people because humans confuse counting possibilities with counting pairs."
          }
        ]
      }
    ]
  },
  "linear-algebra": {
    objectives: [
      "Interpret dot products as similarity measures.",
      "Explain matrix multiplication as composing linear maps.",
      "Relate eigenvectors to directions preserved under transformation."
    ],
    figureCaption:
      "Different domains share one toolbox—change the story, keep the operators.",
    sections: [
      {
        matchHeading: "Vectors as Meaning",
        subtitle: "Coordinates depend on basis choice.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Embeddings place discrete symbols into continuous spaces—geometry becomes semantics."
          }
        ]
      },
      {
        matchHeading: "The Same Vector Story Reappears Everywhere",
        subtitle: "Reuse intuition across graphics and ML.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Attention mechanisms are similarity-weighted mixtures—linear algebra plus normalization plus nonlinearities."
          }
        ]
      }
    ]
  },
  "advanced-algorithms": {
    objectives: [
      "Recognize overlapping subproblems for DP formulations.",
      "Know greedy correctness demands proofs—patterns alone mislead.",
      "Match graph primitives (shortest path, flow, SCCs) to applications."
    ],
    figureCaption:
      "Start from structure; algorithm families follow.",
    sections: [
      {
        matchHeading: "Dynamic Programming",
        subtitle: "State definition is the craft.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "If your DP table is huge, often the model—not language efficiency—is wrong."
          }
        ]
      },
      {
        matchHeading: "Paradigm Recognition",
        subtitle: "Misclassification wastes implementation weeks.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Write four bullets: objects, operations, constraints, objective—then map to graph/D/greedy/random."
          }
        ]
      }
    ]
  },
  verification: {
    objectives: [
      "Differentiate specifications from implementations.",
      "Contrast strengths of tests, static analysis, model checking, proofs.",
      "Explain why assumptions about compilers/hardware matter for proofs."
    ],
    figureCaption:
      "Confidence stacks—each method kills different bug classes.",
    sections: [
      {
        matchHeading: "Specifications Are the Hard Part",
        subtitle: "Ambiguous specs make formal proof pointless.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "‘Secure’ without threat model is undefined—attackers define extra behaviors engineers forgot."
          }
        ]
      },
      {
        matchHeading: "Correctness Lives at Multiple Levels",
        subtitle: "Evidence composes vertically.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Verified microkernels still fail if higher layers mishandle user intent—composition matters."
          }
        ]
      }
    ]
  },
  "information-theory": {
    objectives: [
      "Explain entropy informally as unpredictability.",
      "Relate redundancy to error correction capabilities.",
      "Connect coding limits to compression intuition."
    ],
    figureCaption:
      "Noise demands redundancy; redundancy shapes bandwidth budgets.",
    sections: [
      {
        matchHeading: "Compression",
        subtitle: "Compressibility reveals hidden structure.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Random-looking encrypted payloads resist compression—useful sanity check in pipelines."
          }
        ]
      },
      {
        matchHeading: "Information as Removed Uncertainty",
        subtitle: "Surprising messages carry more Shannon information.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Machine learning features often chase informative transformations—same philosophical core as compression."
          }
        ]
      }
    ]
  },
  "data-science": {
    objectives: [
      "Separate descriptive summaries from inferential claims.",
      "Identify confounding without jargon-heavy causality vocabulary initially.",
      "Design audits around lineage and feedback loops."
    ],
    figureCaption:
      "Iteration without ethics review rehearse harms at scale.",
    sections: [
      {
        matchHeading: "Computation Meets Inference",
        subtitle: "Big data doesn’t cure biased sampling.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Dashboards encode defaults—axes and filters tell stories; verify aggregation grain."
          }
        ]
      },
      {
        matchHeading: "The Dangerous Gap Between Data and Reality",
        subtitle: "Datasets are instruments with calibration limits.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Missingness patterns often carry signal—deleting null rows can erase the lesson."
          }
        ]
      }
    ]
  },
  "embedded-robotics": {
    objectives: [
      "Contrast hard versus soft real-time guarantees.",
      "Diagram sense-plan-act loops.",
      "Relate sensor noise to estimation needs."
    ],
    figureCaption:
      "Cyber-physical loops close through physics—timing guarantees dominate asymptotics.",
    sections: [
      {
        matchHeading: "Computation With Deadlines",
        subtitle: "Late answers may be wrong answers.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Worst-case execution time analysis differs profoundly from average profiling."
          }
        ]
      },
      {
        matchHeading: "Physical Risk",
        subtitle: "Safety cases argue about failures before motion.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Simulation gaps (sensor modeling, friction) kill transferred controllers—validate on hardware progressively."
          }
        ]
      }
    ]
  },
  quantum: {
    objectives: [
      "State what superposition is—and isn’t—in computational terms.",
      "Identify algorithm families with proven quantum advantages assumptions.",
      "Explain why error correction dominates engineering roadmaps."
    ],
    figureCaption:
      "Quantum stacks mirror classical ones—algorithms mean little without fault tolerance stories.",
    sections: [
      {
        matchHeading: "What Quantum Does and Does Not Mean",
        subtitle: "Avoid sci-fi shortcuts.",
        callouts: [
          {
            variant: "note",
            title: "Note",
            body: "Measurement collapses superpositions—algorithm design harnesses interference before that happens."
          }
        ]
      },
      {
        matchHeading: "Why CS Studies It",
        subtitle: "Cryptography and complexity feel real-world pressures.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Post-quantum crypto migration is operational risk management, not speculation."
          }
        ]
      }
    ]
  },
  compilers: {
    objectives: [
      "Describe lexer/parser responsibilities.",
      "Explain optimization as semantics-preserving transforms.",
      "Relate undefined behavior to aggressive optimizations."
    ],
    figureCaption:
      "Front/middle/back mirrors software architecture—clear interfaces enable reuse.",
    sections: [
      {
        matchHeading: "Programs as Data",
        subtitle: "Trees unlock analysis.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Pretty-print ASTs from toy languages—you’ll internalize grammars quickly."
          }
        ]
      },
      {
        matchHeading: "Runtime Systems",
        subtitle: "Languages ship virtual machines even when syntax looks native.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "JIT profiles hot paths—performance becomes partially observational."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "flow",
        title: "Phases students memorize first",
        items: ["Lex characters → tokens", "Parse grammar → tree", "Analyze scopes & types", "Build IR", "Optimize", "Emit code or bytecode"],
        caption:
          "Industrial compilers repeat analyses on IR; interpreters overlap phases yet still scan and validate structure."
      }
    ]
  },
  distributed: {
    objectives: [
      "Explain partial failure modes distinctly from total crashes.",
      "Contrast consistency models informally.",
      "Relate observability to debugging cross-service causality."
    ],
    figureCaption:
      "CAP is a teaching lens—not a prescription with numeric coefficients.",
    sections: [
      {
        matchHeading: "The Network Is Not Memory",
        subtitle: "Latency and partitions force probabilistic reasoning.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Idempotent endpoints plus deduplication keys turn unavoidable retries into safe engineering."
          }
        ]
      },
      {
        matchHeading: "The Fundamental Question of Agreement",
        subtitle: "Consensus buys order at a price.",
        callouts: [
          {
            variant: "caution",
            title: "Watch out",
            body: "Leader election storms during flaky networks—design backoff strategies deliberately."
          }
        ]
      }
    ],
    extraFigures: [
      {
        type: "flow",
        title: "Partial-failure response patterns",
        items: ["Timeout", "Ambiguous outcome", "Idempotent retry", "Backpressure / shed load", "Measure with traces"],
        caption:
          "Real stacks compose these ideas with service-specific policies; CS2023 stresses observability and explicit consistency choices."
      }
    ]
  },
  scientific: {
    objectives: [
      "Separate truncation error from roundoff error mentally.",
      "Explain stability in intuitive physical metaphors.",
      "Identify why parallel scaling hits memory walls."
    ],
    figureCaption:
      "Models discretize infinity—validation closes the loop with observation.",
    sections: [
      {
        matchHeading: "Approximation Is Not a Defect",
        subtitle: "Engineering quantifies error budgets.",
        callouts: [
          {
            variant: "tip",
            title: "Try this",
            body: "Compare single versus double precision on a sensitive recurrence—you’ll see stability vividly."
          }
        ]
      },
      {
        matchHeading: "Performance Changes What Is Possible",
        subtitle: "Science discovers through scaled compute.",
        callouts: [
          {
            variant: "key-idea",
            title: "Key idea",
            body: "Reproducibility ties codes, seeds, datasets, hardware—floating nondeterminism bites HPC workflows."
          }
        ]
      }
    ]
  }
};
