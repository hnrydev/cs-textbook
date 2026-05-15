const chapters = [
  {
    id: "foundations",
    kicker: "Part I - Foundations",
    title: "What Computer Science Studies",
    summary: "Computer science studies computation: what can be represented, what can be automated, how efficiently it can be done, and how reliable systems can be built from simple rules.",
    concepts: [
      ["Information", "Anything that can be distinguished, measured, stored, transmitted, or used to decide."],
      ["Computation", "A rule-following process that transforms input into output."],
      ["Abstraction", "A simplification that hides details while preserving the facts needed for reasoning."],
      ["Tradeoff", "A design choice where improving one property often costs another, such as speed versus memory."]
    ],
    figure: { type: "flow", title: "The Basic Computational Model", items: ["Input", "Representation", "Algorithm", "Execution", "Output", "Feedback"] },
    sections: [
      {
        heading: "The Core Question",
        body: "The central question is not just how to use computers, but what problems can be solved by mechanical procedures. A recipe, a sorting rule, an encryption method, and a neural network are all examples of procedures with different levels of structure and certainty.",
        bullets: ["A problem defines the desired relation between input and output.", "A model defines what operations are allowed.", "An implementation makes the model run on real hardware."]
      },
      {
        heading: "Why Abstraction Matters",
        body: "Modern systems are too complex to understand all at once. Computer science organizes complexity into layers: bits, logic gates, machine instructions, operating systems, languages, libraries, applications, and human workflows.",
        bullets: ["Good abstractions reduce cognitive load.", "Leaky abstractions expose details when assumptions fail.", "Every abstraction has a cost and a boundary."]
      }
    ],
    code: [
      ["Python", "def compute(input_value):\n    representation = int(input_value)\n    result = representation * representation\n    return result\n\nprint(compute(\"12\"))  # 144"],
      ["JavaScript", "function compute(inputValue) {\n  const representation = Number(inputValue);\n  return representation * representation;\n}\n\nconsole.log(compute(\"12\")); // 144"]
    ]
  },
  {
    id: "data",
    kicker: "Part I - Representation",
    title: "Data, Bits, and Digital Representation",
    summary: "Computers use physical states to represent symbols. Bits are the smallest common abstraction: each bit can be 0 or 1, and groups of bits can encode numbers, text, images, sound, programs, and network messages.",
    concepts: [
      ["Bit", "A binary distinction, usually modeled as 0 or 1."],
      ["Encoding", "A mapping from meaning to symbols, such as Unicode for text."],
      ["Compression", "Representing the same information with fewer bits by exploiting patterns."],
      ["Error correction", "Adding controlled redundancy so damaged data can be detected or repaired."]
    ],
    figure: { type: "layers", title: "Representation Layers", items: ["Meaning", "Symbols", "Bits", "Electrical or magnetic state"] },
    sections: [
      {
        heading: "Numbers and Text",
        body: "Integers are commonly stored in binary place value. Real numbers are approximated using floating-point formats, which trade perfect precision for a large useful range. Text is stored by assigning numeric codes to characters.",
        bullets: ["Binary 1011 equals decimal 11.", "Floating-point arithmetic can introduce rounding error.", "Unicode lets one system represent many writing systems."]
      },
      {
        heading: "Images, Audio, and Files",
        body: "A digital image is often a grid of pixels, where each pixel stores color channels. Digital audio samples air pressure many times per second. File formats define how these bits are structured so programs can interpret them.",
        bullets: ["Higher resolution usually means more data.", "Lossless compression preserves exact data.", "Lossy compression discards details humans are less likely to notice."]
      }
    ],
    code: [
      ["Python", "text = \"CS\"\nencoded = text.encode(\"utf-8\")\nprint(list(encoded))      # [67, 83]\nprint(format(67, \"08b\")) # 01000011"],
      ["C", "#include <stdio.h>\n\nint main(void) {\n    unsigned char c = 'C';\n    printf(\"%u\\n\", c);  // 67\n    return 0;\n}"]
    ]
  },
  {
    id: "algorithms",
    kicker: "Part II - Algorithms",
    title: "Algorithms and Complexity",
    summary: "An algorithm is a precise method for solving a class of problems. Complexity analysis estimates how runtime or memory grows as input size grows, which is often more important than timing one small example.",
    concepts: [
      ["Correctness", "The algorithm always produces the required output for valid inputs."],
      ["Big O", "A notation for upper-bounding growth while ignoring constant factors."],
      ["Search", "Finding an item or state that satisfies a condition."],
      ["Optimization", "Finding the best solution under defined constraints."]
    ],
    figure: { type: "matrix", title: "Common Growth Rates", items: ["O(1): constant lookup", "O(log n): binary search", "O(n): scan every item", "O(n log n): efficient sorting"] },
    sections: [
      {
        heading: "Thinking Algorithmically",
        body: "To design an algorithm, define the input, define the output, identify constraints, and choose a strategy. Common strategies include brute force, divide and conquer, greedy choice, dynamic programming, and randomized search.",
        bullets: ["Brute force is simple but can be expensive.", "Divide and conquer solves smaller versions of the same problem.", "Dynamic programming stores repeated subproblem results."]
      },
      {
        heading: "Complexity as a Design Tool",
        body: "Big O is not a stopwatch. It is a way to reason about scaling. An O(n) method can be slower than an O(n log n) method for tiny inputs, but asymptotic behavior dominates when systems grow.",
        bullets: ["Time complexity counts operations as input grows.", "Space complexity counts additional memory.", "Worst-case, average-case, and amortized analysis answer different questions."]
      }
    ],
    code: [
      ["Python", "def binary_search(values, target):\n    low, high = 0, len(values) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if values[mid] == target:\n            return mid\n        if values[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1"],
      ["JavaScript", "function binarySearch(values, target) {\n  let low = 0;\n  let high = values.length - 1;\n  while (low <= high) {\n    const mid = Math.floor((low + high) / 2);\n    if (values[mid] === target) return mid;\n    if (values[mid] < target) low = mid + 1;\n    else high = mid - 1;\n  }\n  return -1;\n}"]
    ]
  },
  {
    id: "structures",
    kicker: "Part II - Data Structures",
    title: "Data Structures",
    summary: "Data structures organize information so operations become efficient and understandable. The right structure depends on the operations you need most: lookup, insert, delete, order, range query, traversal, or relationship modeling.",
    concepts: [
      ["Array", "Contiguous indexed storage with fast random access."],
      ["Linked structure", "Items connected by references instead of physical adjacency."],
      ["Hash table", "A key-value structure that uses a hash function for expected fast lookup."],
      ["Graph", "A set of nodes and edges for modeling relationships."]
    ],
    figure: { type: "flow", title: "Choosing a Structure", items: ["Operations", "Access pattern", "Update pattern", "Memory cost", "Structure choice"] },
    sections: [
      {
        heading: "Locality and Access",
        body: "Arrays are fast partly because modern processors like predictable memory access. Linked structures are flexible but often less cache-friendly. Hash tables trade ordering for fast expected lookup.",
        bullets: ["Stacks are last-in, first-out.", "Queues are first-in, first-out.", "Trees organize hierarchy and ordered search.", "Graphs model networks, dependencies, maps, and social relationships."]
      },
      {
        heading: "Abstract Data Types",
        body: "An abstract data type defines behavior, not implementation. A queue can be implemented with an array, linked list, circular buffer, or two stacks. The interface stays stable while internals vary.",
        bullets: ["Interfaces support substitution.", "Implementation details determine performance.", "Invariants keep structures valid after operations."]
      }
    ],
    code: [
      ["Python", "from collections import deque\n\nqueue = deque()\nqueue.append(\"compile\")\nqueue.append(\"test\")\nprint(queue.popleft())  # compile"],
      ["Java", "import java.util.ArrayDeque;\n\nArrayDeque<String> queue = new ArrayDeque<>();\nqueue.add(\"compile\");\nqueue.add(\"test\");\nSystem.out.println(queue.remove());"]
    ]
  },
  {
    id: "architecture",
    kicker: "Part III - Machines",
    title: "Computer Architecture",
    summary: "Computer architecture explains how hardware executes programs. It connects logic gates, memory, processors, instruction sets, caches, and input/output devices into a working machine.",
    concepts: [
      ["CPU", "The processor that fetches, decodes, and executes instructions."],
      ["Memory hierarchy", "Registers, caches, RAM, storage, and networked data, arranged by speed and size."],
      ["Instruction set", "The machine-level operations software can ask hardware to perform."],
      ["Parallelism", "Doing multiple operations at once or overlapping their execution."]
    ],
    figure: { type: "stack", title: "Machine Execution Stack", items: ["Application", "Compiler or interpreter", "Instruction set", "Microarchitecture", "Logic gates", "Physics"] },
    sections: [
      {
        heading: "The Fetch-Decode-Execute Cycle",
        body: "A simplified CPU repeatedly fetches an instruction from memory, decodes what it means, executes it, and stores the result. Real processors add pipelines, branch prediction, vector units, and caches.",
        bullets: ["Registers are tiny but very fast.", "RAM is larger but slower than cache.", "Storage persists data but is much slower than RAM."]
      },
      {
        heading: "Performance Is Layered",
        body: "A slow program may be limited by CPU work, memory bandwidth, disk access, network latency, synchronization, or poor algorithms. Architecture teaches where the time can physically go.",
        bullets: ["Cache misses can dominate runtime.", "Parallelism helps only when work can be divided.", "Energy and heat are major design constraints."]
      }
    ],
    code: [
      ["Assembly", "LOAD R1, [address_a]\nLOAD R2, [address_b]\nADD  R3, R1, R2\nSTORE [address_c], R3"],
      ["C", "int add(int a, int b) {\n    return a + b;\n}"]
    ]
  },
  {
    id: "os",
    kicker: "Part III - Systems",
    title: "Operating Systems",
    summary: "An operating system manages hardware and provides controlled abstractions: processes, threads, files, virtual memory, devices, permissions, and system calls.",
    concepts: [
      ["Process", "A running program with its own address space and resources."],
      ["Thread", "A schedulable path of execution within a process."],
      ["Virtual memory", "An abstraction that gives programs the illusion of private contiguous memory."],
      ["System call", "A controlled request from user code to the kernel."]
    ],
    figure: { type: "layers", title: "Operating System Boundary", items: ["Applications", "Libraries", "System calls", "Kernel", "Hardware"] },
    sections: [
      {
        heading: "Resource Management",
        body: "The OS decides which process runs, how memory is mapped, how files are named, how devices are shared, and how failures are isolated. It exists because many programs must safely share one machine.",
        bullets: ["Scheduling shares CPU time.", "File systems organize persistent data.", "Permissions limit damage and enforce ownership."]
      },
      {
        heading: "Concurrency",
        body: "Concurrency means multiple tasks are in progress during the same time period. Parallelism means tasks literally run at the same time. Correct concurrent programs must handle timing uncertainty.",
        bullets: ["Race conditions happen when timing changes results.", "Locks protect shared data.", "Deadlock occurs when tasks wait on each other forever."]
      }
    ],
    code: [
      ["Python", "import threading\n\ncounter = 0\nlock = threading.Lock()\n\ndef add_one():\n    global counter\n    with lock:\n        counter += 1"],
      ["Go", "package main\n\nimport \"sync\"\n\nvar counter int\nvar mu sync.Mutex\n\nfunc addOne() {\n    mu.Lock()\n    counter++\n    mu.Unlock()\n}"]
    ]
  },
  {
    id: "languages",
    kicker: "Part IV - Programming",
    title: "Programming Languages and Paradigms",
    summary: "Programming languages give humans a way to express computation. Paradigms such as procedural, functional, object-oriented, declarative, and logic programming emphasize different ways to organize thought.",
    concepts: [
      ["Syntax", "The surface grammar of a language."],
      ["Semantics", "What programs mean when executed or evaluated."],
      ["Type system", "Rules that classify values and restrict invalid operations."],
      ["Runtime", "The environment that supports execution, memory, libraries, and errors."]
    ],
    figure: { type: "venn", title: "Language Design Pressures", items: ["Human readability", "Machine efficiency", "Safety and correctness"] },
    sections: [
      {
        heading: "Paradigms",
        body: "Procedural code describes steps. Object-oriented code groups state and behavior. Functional code emphasizes expressions and immutable data. Declarative code states what should be true more than how to do it.",
        bullets: ["Python favors readability and rapid development.", "C exposes memory and machine-level control.", "Java and C# emphasize managed object-oriented systems.", "SQL is declarative and data-centered."]
      },
      {
        heading: "Compilation and Interpretation",
        body: "A compiler translates code before execution, often enabling optimization. An interpreter executes code more directly. Many modern runtimes combine both with bytecode and just-in-time compilation.",
        bullets: ["Static typing catches many errors before running.", "Dynamic typing offers flexibility at runtime.", "Garbage collection automates memory reclamation."]
      }
    ],
    code: [
      ["Python", "def total(prices):\n    return sum(prices)\n\nprint(total([4, 8, 15]))"],
      ["JavaScript", "const total = prices => prices.reduce((sum, price) => sum + price, 0);\nconsole.log(total([4, 8, 15]));"],
      ["SQL", "SELECT customer_id, SUM(total) AS revenue\nFROM orders\nGROUP BY customer_id;"]
    ]
  },
  {
    id: "software",
    kicker: "Part IV - Engineering",
    title: "Software Engineering",
    summary: "Software engineering is the disciplined construction and maintenance of useful software under real constraints: users, teams, defects, deadlines, budgets, security, operations, and change.",
    concepts: [
      ["Requirements", "Statements about what the system must do or guarantee."],
      ["Design", "The structure of components, interfaces, data, and behavior."],
      ["Testing", "Evidence-gathering that checks behavior against expectations."],
      ["Maintenance", "The long-term work of adapting software after first release."]
    ],
    figure: { type: "flow", title: "Software Delivery Loop", items: ["Discover", "Design", "Build", "Test", "Deploy", "Observe", "Improve"] },
    sections: [
      {
        heading: "Managing Complexity",
        body: "Good engineering is not just writing code. It is making systems understandable enough to change safely. Names, tests, interfaces, documentation, reviews, and observability all reduce future uncertainty.",
        bullets: ["Cohesion keeps related behavior together.", "Coupling measures how much components depend on one another.", "Refactoring improves structure without changing external behavior."]
      },
      {
        heading: "Quality Is Multi-Dimensional",
        body: "A system can be fast but hard to change, elegant but unreliable, or secure but inconvenient. Engineering chooses acceptable tradeoffs for the actual context.",
        bullets: ["Unit tests check small parts.", "Integration tests check collaboration.", "Monitoring reveals production behavior."]
      }
    ],
    code: [
      ["TypeScript", "type Result<T> = { ok: true; value: T } | { ok: false; error: string };\n\nfunction parsePort(value: string): Result<number> {\n  const port = Number(value);\n  if (!Number.isInteger(port) || port < 1 || port > 65535) {\n    return { ok: false, error: \"Invalid port\" };\n  }\n  return { ok: true, value: port };\n}"]
    ]
  },
  {
    id: "databases",
    kicker: "Part V - Data Systems",
    title: "Databases and Information Systems",
    summary: "Databases store, query, protect, and coordinate shared data. They exist because real applications need persistence, consistency, efficient retrieval, and concurrent access.",
    concepts: [
      ["Schema", "The declared structure and constraints of stored data."],
      ["Query", "A request to retrieve or transform data."],
      ["Transaction", "A group of operations treated as one reliable unit."],
      ["Index", "An auxiliary structure that speeds lookup at storage and update cost."]
    ],
    figure: { type: "layers", title: "Database System Layers", items: ["Application query", "Query planner", "Execution engine", "Indexes", "Storage engine", "Disk or distributed storage"] },
    sections: [
      {
        heading: "Relational Thinking",
        body: "Relational databases organize data into tables and use relations, keys, constraints, and algebraic operations. SQL lets users ask what data they want without manually describing every access step.",
        bullets: ["Primary keys identify rows.", "Foreign keys represent relationships.", "Normalization reduces duplication and update errors."]
      },
      {
        heading: "Consistency and Scale",
        body: "Distributed data systems must handle partial failure, network delay, replication, and conflicting updates. Stronger guarantees often cost latency or availability under failure.",
        bullets: ["ACID emphasizes reliable transactions.", "CAP describes tradeoffs under network partitions.", "Caching improves speed but can make freshness harder."]
      }
    ],
    code: [
      ["SQL", "CREATE TABLE students (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL\n);\n\nCREATE TABLE enrollments (\n  student_id INTEGER REFERENCES students(id),\n  course_code TEXT NOT NULL\n);\n\nSELECT name\nFROM students\nJOIN enrollments ON students.id = enrollments.student_id\nWHERE course_code = 'CS101';"]
    ]
  },
  {
    id: "networks",
    kicker: "Part V - Networks",
    title: "Computer Networks and the Internet",
    summary: "Networks move data between machines. The internet works because layered protocols let heterogeneous systems agree on addressing, routing, reliability, security, and application meaning.",
    concepts: [
      ["Protocol", "A shared rule set for communication."],
      ["Packet", "A small unit of data sent through a network."],
      ["Routing", "Choosing paths across interconnected networks."],
      ["Latency", "Delay before data arrives or a response begins."]
    ],
    figure: { type: "stack", title: "Internet Protocol Stack", items: ["Application: HTTP, DNS", "Transport: TCP, UDP", "Internet: IP", "Link: Ethernet, Wi-Fi", "Physical signal"] },
    sections: [
      {
        heading: "Layering",
        body: "Each network layer solves a narrower problem and offers services to the layer above. HTTP does not need to know the physics of fiber optics; it relies on lower layers to move bytes.",
        bullets: ["DNS maps names to addresses.", "TCP provides reliable ordered streams.", "UDP provides lighter datagrams.", "TLS adds encryption and authentication."]
      },
      {
        heading: "Distributed Reality",
        body: "Networks are unreliable compared with local memory. Messages can be delayed, duplicated, reordered, dropped, intercepted, or routed through unexpected paths. Distributed software must assume failure.",
        bullets: ["Timeouts are part of correctness.", "Retries can accidentally duplicate work.", "Idempotent operations are safer to repeat."]
      }
    ],
    code: [
      ["JavaScript", "const response = await fetch(\"https://example.com/data.json\");\nif (!response.ok) throw new Error(\"Network request failed\");\nconst data = await response.json();\nconsole.log(data);"],
      ["Python", "import socket\n\nwith socket.create_connection((\"example.com\", 80), timeout=5) as s:\n    s.sendall(b\"GET / HTTP/1.1\\r\\nHost: example.com\\r\\n\\r\\n\")\n    print(s.recv(120).decode(\"utf-8\", errors=\"ignore\"))"]
    ]
  },
  {
    id: "security",
    kicker: "Part VI - Trust",
    title: "Cybersecurity and Cryptography",
    summary: "Security studies how systems fail under adversarial conditions. Cryptography supplies mathematical tools, but secure systems also require careful design, implementation, operations, and human judgment.",
    concepts: [
      ["Confidentiality", "Only authorized parties can read the information."],
      ["Integrity", "Unauthorized changes can be prevented or detected."],
      ["Authentication", "A system verifies identity or origin."],
      ["Threat model", "A clear statement of what attackers can do and what must be protected."]
    ],
    figure: { type: "venn", title: "Security Goals", items: ["Confidentiality", "Integrity", "Availability"] },
    sections: [
      {
        heading: "Security Is a System Property",
        body: "A system is not secure because one component is strong. Security depends on every path an attacker could use: code, configuration, network, supply chain, users, logs, backups, and physical access.",
        bullets: ["Least privilege limits damage.", "Defense in depth avoids one-point failure.", "Patching matters because threat conditions change."]
      },
      {
        heading: "Cryptography",
        body: "Cryptography can encrypt data, sign messages, verify integrity, and establish shared secrets. The hard rule is to use well-reviewed protocols and libraries, not custom cryptographic designs.",
        bullets: ["Hash functions produce fixed-size fingerprints.", "Symmetric encryption uses one shared secret key.", "Public-key cryptography uses paired public and private keys."]
      }
    ],
    code: [
      ["Python", "import hashlib\n\nmessage = b\"computer science\"\ndigest = hashlib.sha256(message).hexdigest()\nprint(digest)"],
      ["JavaScript", "const data = new TextEncoder().encode(\"computer science\");\nconst digest = await crypto.subtle.digest(\"SHA-256\", data);\nconsole.log([...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, \"0\")).join(\"\"));"]
    ]
  },
  {
    id: "ai",
    kicker: "Part VII - Intelligence",
    title: "Artificial Intelligence and Machine Learning",
    summary: "AI builds systems that perform tasks associated with intelligent behavior. Machine learning focuses on systems that improve performance from data rather than only from hand-written rules.",
    concepts: [
      ["Model", "A parameterized function that maps inputs to predictions or decisions."],
      ["Training", "Adjusting model parameters using data and an objective."],
      ["Generalization", "Performing well on new examples, not only memorized training data."],
      ["Evaluation", "Measuring behavior with metrics that match the real goal as closely as possible."]
    ],
    figure: { type: "flow", title: "Machine Learning Pipeline", items: ["Data", "Features", "Model", "Training", "Evaluation", "Deployment", "Monitoring"] },
    sections: [
      {
        heading: "Learning From Data",
        body: "In supervised learning, examples include inputs and desired outputs. In unsupervised learning, the system looks for structure. In reinforcement learning, an agent learns from rewards in an environment.",
        bullets: ["Bias is error from overly simple assumptions.", "Variance is sensitivity to training data.", "Overfitting means memorizing patterns that do not generalize."]
      },
      {
        heading: "Modern AI Systems",
        body: "Large language models learn statistical structure from massive text and code corpora. They can generate useful outputs, but they are not databases or proof engines by default, so verification remains essential.",
        bullets: ["Embeddings represent meaning as vectors.", "Neural networks compose many simple differentiable functions.", "Responsible AI considers accuracy, privacy, fairness, misuse, and accountability."]
      }
    ],
    code: [
      ["Python", "def predict(x, weight, bias):\n    return weight * x + bias\n\ndef loss(x, y, weight, bias):\n    error = predict(x, weight, bias) - y\n    return error * error\n\nprint(loss(3, 10, weight=2, bias=1))"]
    ]
  },
  {
    id: "graphics",
    kicker: "Part VII - Media",
    title: "Computer Graphics, HCI, and Design",
    summary: "Graphics turns data and geometry into images. Human-computer interaction studies how people perceive, understand, and control software systems.",
    concepts: [
      ["Rendering", "Converting a scene description into pixels."],
      ["Coordinate system", "A mathematical space for positioning objects."],
      ["Interaction design", "Designing controls and feedback around human goals."],
      ["Accessibility", "Making systems usable by people with diverse abilities and contexts."]
    ],
    figure: { type: "flow", title: "Rendering Pipeline", items: ["Model", "Transform", "Light", "Project", "Rasterize", "Display"] },
    sections: [
      {
        heading: "Images From Models",
        body: "A graphic can be stored as pixels or as structured geometry. Raster images are grids. Vector graphics store shapes. 3D graphics define objects, materials, cameras, lights, and transformations.",
        bullets: ["Resolution affects raster detail.", "Vectors scale cleanly for shapes and text.", "Real-time graphics trade realism for speed."]
      },
      {
        heading: "Interfaces Are Algorithms for People",
        body: "A user interface is a control system between human intention and machine behavior. Good interfaces make state visible, actions reversible when possible, and consequences understandable.",
        bullets: ["Feedback confirms action.", "Consistency reduces learning cost.", "Accessibility is a core quality property, not decoration."]
      }
    ],
    code: [
      ["HTML Canvas", "const canvas = document.querySelector(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nctx.fillStyle = \"#2563eb\";\nctx.fillRect(20, 20, 120, 80);\nctx.strokeStyle = \"#111827\";\nctx.strokeRect(20, 20, 120, 80);"]
    ]
  },
  {
    id: "theory",
    kicker: "Part VIII - Theory",
    title: "Theory of Computation",
    summary: "Theory asks what computation can and cannot do. It studies formal languages, automata, computability, complexity classes, proofs, and the mathematical limits of algorithms.",
    concepts: [
      ["Automaton", "A formal machine model with states and transition rules."],
      ["Turing machine", "A simple abstract model powerful enough to represent general computation."],
      ["Decidability", "Whether an algorithm can always answer a question correctly in finite time."],
      ["P versus NP", "A major open question about efficient solving versus efficient checking."]
    ],
    figure: { type: "layers", title: "Theoretical Ladder", items: ["Finite automata", "Context-free grammars", "Turing machines", "Decidability", "Complexity classes"] },
    sections: [
      {
        heading: "Models With Limits",
        body: "Formal models are intentionally simple. Their value is that they make proof possible. If a problem cannot be solved in a simple universal model, adding a faster processor will not remove that impossibility.",
        bullets: ["Regular languages can be recognized by finite automata.", "Some problems are undecidable.", "NP problems have solutions that can be checked efficiently."]
      },
      {
        heading: "Why Theory Matters",
        body: "Theory explains why some tasks are easy, some are hard, and some are impossible. It protects engineering from wishful thinking and guides practical approximation, heuristics, and reductions.",
        bullets: ["Proofs establish guarantees.", "Reductions compare problem difficulty.", "Approximation algorithms trade perfection for feasibility."]
      }
    ],
    code: [
      ["Pseudo-code", "machine state = START\nfor each symbol in input:\n    state = transition(state, symbol)\naccept if state is in accepting_states"]
    ]
  },
  {
    id: "math",
    kicker: "Part VIII - Mathematical Tools",
    title: "Discrete Mathematics, Logic, and Probability",
    summary: "Computer science depends on discrete mathematics because computers manipulate distinct symbols and structures. Logic, sets, graphs, combinatorics, probability, and linear algebra appear across the field.",
    concepts: [
      ["Logic", "Formal reasoning about propositions, predicates, and inference."],
      ["Graph theory", "Mathematics of nodes and relationships."],
      ["Combinatorics", "Counting arrangements, choices, and possibilities."],
      ["Probability", "Reasoning under uncertainty."]
    ],
    figure: { type: "venn", title: "Mathematical Support", items: ["Proof", "Structure", "Uncertainty"] },
    sections: [
      {
        heading: "Proof and Precision",
        body: "Mathematics gives computer science exact language. It lets us prove an algorithm correct, count the number of possibilities, model a network, and reason about uncertainty.",
        bullets: ["Induction proves claims over recursive structures.", "Boolean logic underlies circuits and conditions.", "Graphs model routes, dependencies, ownership, and influence."]
      },
      {
        heading: "Probability and Linear Algebra",
        body: "Probability supports randomized algorithms, statistics, machine learning, reliability, and security analysis. Linear algebra supports graphics, optimization, machine learning, simulations, and scientific computing.",
        bullets: ["Vectors can represent direction, state, or meaning.", "Matrices transform vectors.", "Expected value summarizes long-run average behavior."]
      }
    ],
    code: [
      ["Python", "graph = {\n    \"A\": [\"B\", \"C\"],\n    \"B\": [\"D\"],\n    \"C\": [\"D\"],\n    \"D\": []\n}\n\nvisited = set()\ndef dfs(node):\n    if node in visited:\n        return\n    visited.add(node)\n    for neighbor in graph[node]:\n        dfs(neighbor)\n\ndfs(\"A\")\nprint(visited)"]
    ]
  },
  {
    id: "professional",
    kicker: "Part IX - Practice",
    title: "Ethics, Society, and Professional Practice",
    summary: "Computer science changes institutions, labor, privacy, knowledge, safety, and power. Professional practice requires technical competence plus responsibility for consequences.",
    concepts: [
      ["Privacy", "Control over personal information and inference."],
      ["Fairness", "Attention to unjust performance differences and social impact."],
      ["Reliability", "The system behaves acceptably under expected and adverse conditions."],
      ["Accountability", "People and organizations can explain, audit, and improve decisions."]
    ],
    figure: { type: "matrix", title: "Professional Evaluation", items: ["Who benefits?", "Who can be harmed?", "What can fail?", "How will it be audited?"] },
    sections: [
      {
        heading: "Technical Decisions Have Social Meaning",
        body: "A database field, ranking algorithm, access control rule, or model threshold can affect real opportunities. Ethical analysis asks who is represented, who is excluded, and who bears the risk of mistakes.",
        bullets: ["Privacy is affected by collection, storage, sharing, and inference.", "Automation can scale both quality and harm.", "Accessibility and security are part of professional duty."]
      },
      {
        heading: "Learning Path",
        body: "A beginner should learn programming, discrete math, data structures, algorithms, computer systems, databases, networks, software engineering, security, and AI. Depth comes from building projects and explaining tradeoffs.",
        bullets: ["Write programs in more than one paradigm.", "Trace systems from user action to hardware effect.", "Practice reading code and debugging failures.", "Learn to test claims with measurements."]
      }
    ],
    code: [
      ["Checklist", "Before release:\n- What data do we collect?\n- What is the failure mode?\n- Who can override the system?\n- How do users appeal mistakes?\n- What logs prove what happened?\n- What tests cover realistic misuse?"]
    ]
  }
];

chapters.splice(chapters.findIndex((chapter) => chapter.id === "theory"), 0,
  {
    id: "logic-proof",
    kicker: "Part VIII - Logic",
    title: "Logic, Proof, and Formal Reasoning",
    summary: "Logic is the language of rigorous computer science. It explains how claims are represented, when conclusions follow from assumptions, and why programs can be verified instead of merely tested.",
    concepts: [
      ["Proposition", "A statement that is either true or false."],
      ["Predicate", "A statement with variables, such as sorted(list)."],
      ["Quantifier", "A symbol for reasoning about all objects or at least one object."],
      ["Invariant", "A fact that remains true before and after each step of a process."]
    ],
    figure: { type: "proof-grid", title: "Proof Toolkit", items: ["Direct proof", "Contradiction", "Induction", "Loop invariant", "Reduction", "Counterexample"] },
    sections: [
      {
        heading: "From Intuition to Proof",
        body: "A beginner often trusts a program because it worked on examples. A computer scientist asks for a reason that covers every valid input. Proof turns local confidence into general confidence by making assumptions, steps, and conclusions explicit.",
        bullets: ["Testing samples behavior; proof covers a defined space.", "A counterexample defeats a universal claim.", "A proof is only as strong as its definitions."]
      },
      {
        heading: "Invariants as the Bridge to Programs",
        body: "An invariant is one of the most important ideas in computer science because it links mathematical reasoning to running code. If a condition is true before a loop, remains true after each iteration, and implies the goal when the loop ends, the loop is correct.",
        bullets: ["Binary search maintains that the target, if present, is inside the current interval.", "A sorted prefix invariant proves insertion sort.", "Data structure invariants protect representation integrity."]
      }
    ],
    code: [
      ["Invariant", "Goal: prove binary search is correct.\n\nInvariant:\n- If target exists, it is between low and high.\n\nEach step:\n- Check middle.\n- Discard only the half that cannot contain target.\n\nWhen low > high:\n- No possible position remains, so target is absent."]
    ]
  },
  {
    id: "formal-math",
    kicker: "Part VIII - Mathematics",
    title: "Sets, Relations, Functions, and Algebraic Structures",
    summary: "Many advanced CS ideas become simple when viewed as sets, relations, functions, and algebraic laws. These tools unify databases, type systems, programming semantics, automata, graphs, and machine learning.",
    concepts: [
      ["Set", "A collection of distinct objects."],
      ["Relation", "A set of ordered pairs that connects objects."],
      ["Function", "A relation where each input has exactly one output."],
      ["Algebraic law", "A rule such as associativity or identity that lets systems be transformed safely."]
    ],
    figure: { type: "concept-map", title: "Mathematical Objects Behind CS", items: ["Sets -> types and collections", "Relations -> databases and graphs", "Functions -> programs and models", "Monoids -> folds and parallel aggregation", "Orders -> sorting and lattices", "Vectors -> graphics and AI"] },
    sections: [
      {
        heading: "The Shared Language",
        body: "A database table is a relation. A type can be understood as a set of values. A deterministic program is a function from input state to output state. A graph is a relation over nodes. Seeing these connections makes advanced topics less mysterious.",
        bullets: ["Types classify possible values.", "Relations represent structure without requiring sequence.", "Functions let behavior be composed."]
      },
      {
        heading: "Algebra for Software",
        body: "Algebraic laws make code easier to optimize and parallelize. If an operation is associative, work can be grouped differently. If it has an identity value, empty cases become well-defined. These facts matter in compilers, databases, distributed systems, and data processing.",
        bullets: ["Addition is associative and has identity 0.", "String concatenation is associative and has identity empty string.", "Floating-point arithmetic is not perfectly associative in real machines."]
      }
    ],
    code: [
      ["JavaScript", "const sum = values => values.reduce((total, value) => total + value, 0);\n\n// 0 is the identity for addition.\n// Associativity lets chunks be summed independently, then combined."]
    ]
  }
);

chapters.splice(chapters.findIndex((chapter) => chapter.id === "professional"), 0,
  {
    id: "counting-combinatorics",
    kicker: "Part IX - Mathematical Depth",
    title: "Counting, Combinatorics, and Discrete Probability Models",
    summary: "Counting is the mathematics of possibility. It powers algorithm analysis, probability, cryptography, randomized algorithms, hashing, compression, databases, and complexity theory.",
    concepts: [
      ["Product rule", "If one choice has a possibilities and the next has b, together they have a times b possibilities."],
      ["Bijection", "A one-to-one correspondence that proves two sets have the same size."],
      ["Pigeonhole principle", "If more objects than boxes exist, at least one box contains multiple objects."],
      ["Distribution", "A rule assigning probabilities to outcomes."]
    ],
    figure: { type: "formula-grid", title: "Counting Patterns", items: ["n!", "n choose k", "2^n subsets", "a x b choices", "E[X] = sum xP(x)", "P(A|B) = P(A and B)/P(B)"] },
    sections: [
      {
        heading: "Why Counting Is a CS Superpower",
        body: "Before choosing an algorithm, you often need to understand the size of the search space. Counting tells you whether brute force is plausible, whether collisions are likely, and how much information is needed to distinguish cases.",
        bullets: ["Password security depends on counting possible secrets.", "Sorting lower bounds count possible input orders.", "Hash table behavior depends on collision probability."]
      },
      {
        heading: "Probability as Weighted Counting",
        body: "Discrete probability can be viewed as counting outcomes with weights. Once you can count cases, you can reason about random choices, expected runtime, load balancing, sampling, inference, and risk.",
        bullets: ["Expectation is linear even when variables are dependent.", "Independence is a strong condition, not a default assumption.", "Conditioning updates the sample space after evidence is known."]
      },
      {
        heading: "From Formula to Intuition",
        body: "A binomial coefficient is not just a formula. It counts ways to choose k positions from n. A factorial counts orderings. A power set counts yes-or-no membership decisions. These mental models matter more than memorizing symbols.",
        bullets: ["Use combinations when order does not matter.", "Use permutations when order matters.", "Use recurrence relations when a count depends on smaller cases."]
      }
    ],
    code: [
      ["Python", "from math import comb, factorial\n\nprint(factorial(5))   # orderings of 5 items\nprint(comb(10, 3))    # ways to choose 3 from 10\nprint(2 ** 10)        # subsets of a 10-item set"]
    ]
  },
  {
    id: "linear-algebra",
    kicker: "Part IX - Mathematical Depth",
    title: "Linear Algebra for Computing, Graphics, and AI",
    summary: "Linear algebra studies vectors, matrices, transformations, spaces, and projections. It is the common mathematical substrate under graphics, machine learning, search ranking, optimization, robotics, and scientific computing.",
    concepts: [
      ["Vector", "An ordered list of numbers representing direction, features, state, or meaning."],
      ["Matrix", "A table of numbers that can represent a linear transformation or data set."],
      ["Basis", "A set of vectors used as coordinates for a space."],
      ["Eigenvector", "A direction changed only by scaling under a transformation."]
    ],
    figure: { type: "concept-map", title: "Linear Algebra Applications", items: ["Graphics: rotate and project", "AI: embeddings and layers", "Search: ranking matrices", "Robotics: poses and motion", "Data science: PCA", "Optimization: gradients"] },
    sections: [
      {
        heading: "Vectors as Meaning",
        body: "A vector can be a point in 2D space, a word embedding, an image feature, a robot state, or model parameters. The same operations recur: distance, dot product, projection, normalization, and transformation.",
        bullets: ["Dot products measure alignment.", "Norms measure size.", "Projection answers how much of one direction lies along another."]
      },
      {
        heading: "Matrices as Machines",
        body: "A matrix is a function that transforms vectors. Rotation, scaling, camera projection, neural network layers, Markov chains, and systems of equations can all be expressed with matrices.",
        bullets: ["Matrix multiplication composes transformations.", "Sparse matrices store mostly-empty structure efficiently.", "Numerical stability matters when transformations amplify error."]
      },
      {
        heading: "Why It Feels Abstract",
        body: "Linear algebra is abstract because it intentionally ignores the story attached to numbers. That abstraction is the power: the same theorem can explain a camera, a recommender system, and a differential equation solver.",
        bullets: ["The shape of data often matters more than variable names.", "Dimensionality reduction preserves important structure while discarding noise.", "Many AI models are large compositions of linear algebra plus nonlinear functions."]
      }
    ],
    code: [
      ["Python", "def dot(a, b):\n    return sum(x * y for x, y in zip(a, b))\n\nquery = [1, 0, 1]\ndocument = [0.8, 0.1, 0.7]\nprint(dot(query, document))  # similarity score"]
    ]
  },
  {
    id: "advanced-algorithms",
    kicker: "Part IX - Algorithms",
    title: "Advanced Algorithms: Graphs, Dynamic Programming, Greedy Choice, and Randomization",
    summary: "Advanced algorithm design is about recognizing structure. The same hard-looking problem can become tractable when expressed as a graph, recurrence, exchange argument, flow network, or randomized process.",
    concepts: [
      ["Dynamic programming", "Solving overlapping subproblems once and reusing their answers."],
      ["Greedy algorithm", "Making locally optimal choices that can be proved globally safe."],
      ["Graph algorithm", "Reasoning over nodes, edges, paths, cuts, matchings, or flows."],
      ["Randomized algorithm", "Using controlled randomness for speed, simplicity, or probability guarantees."]
    ],
    figure: { type: "tree-map", title: "Algorithm Design Decision Tree", items: ["What structure does the problem have?", "Sorted order", "Graph", "Overlapping subproblems", "Local safe choice", "Uncertainty", "Adversarial input"] },
    sections: [
      {
        heading: "Dynamic Programming",
        body: "Dynamic programming applies when a problem can be split into smaller subproblems that repeat. The skill is choosing the state: the information needed to describe a subproblem without remembering irrelevant history.",
        bullets: ["Memoization stores recursive answers.", "Tabulation fills answers bottom-up.", "State design determines whether the algorithm is elegant or impossible."]
      },
      {
        heading: "Greedy Algorithms",
        body: "A greedy algorithm is only correct when a local choice can be proven safe. The proof often uses an exchange argument: take an optimal solution and show it can be modified to include the greedy choice without becoming worse.",
        bullets: ["Dijkstra's algorithm is greedy under nonnegative edge weights.", "Minimum spanning tree algorithms use cut properties.", "Greedy choice fails when early decisions block better future combinations."]
      },
      {
        heading: "Graphs as Universal Models",
        body: "Graphs model roads, dependencies, circuits, social networks, web links, program states, and dataflow. Once a problem is a graph, paths, connectivity, cycles, matchings, centrality, and cuts become available tools.",
        bullets: ["Breadth-first search finds shortest paths in unweighted graphs.", "Topological sorting orders dependencies.", "Max flow models capacity and matching problems."]
      }
    ],
    code: [
      ["Python", "def fibonacci(n, memo={0: 0, 1: 1}):\n    if n not in memo:\n        memo[n] = fibonacci(n - 1) + fibonacci(n - 2)\n    return memo[n]\n\nprint(fibonacci(40))"]
    ]
  },
  {
    id: "verification",
    kicker: "Part IX - Correctness",
    title: "Program Correctness, Testing, Verification, and Formal Methods",
    summary: "Testing shows evidence; verification proves properties under assumptions. Serious software uses both, especially when failure is expensive: compilers, kernels, medical systems, aircraft, cryptography, and distributed protocols.",
    concepts: [
      ["Specification", "A precise statement of required behavior."],
      ["Property-based testing", "Generating many inputs to check general properties."],
      ["Model checking", "Exploring formal system states to find violations."],
      ["Hoare logic", "Reasoning with preconditions, program statements, and postconditions."]
    ],
    figure: { type: "pipeline-deep", title: "Correctness Evidence Spectrum", items: ["Confidence grows by combining methods", "Examples", "Unit tests", "Property tests", "Static analysis", "Model checking", "Machine-checked proof"] },
    sections: [
      {
        heading: "Specifications Are the Hard Part",
        body: "You cannot prove a program correct until you know what correct means. A vague requirement produces vague evidence. A useful specification names inputs, outputs, invariants, error cases, timing assumptions, and security expectations.",
        bullets: ["Preconditions state what must be true before execution.", "Postconditions state what must be true after execution.", "Invariants state what must remain true throughout execution."]
      },
      {
        heading: "Testing Versus Proof",
        body: "Testing and proof answer different questions. Testing is concrete and catches surprises in real implementations. Proof is abstract and covers all cases within a model. The model can still be wrong, so high-assurance work combines both.",
        bullets: ["Tests can reveal bugs but usually cannot prove absence of bugs.", "Static analysis can reject whole classes of mistakes.", "Formal proofs depend on accurate assumptions about hardware, compiler, and environment."]
      },
      {
        heading: "Beginner Mental Model",
        body: "Think of correctness as a chain. The program should meet the specification; the specification should match the real need; the environment should satisfy the assumptions. Break any link and the system can fail.",
        bullets: ["A correct algorithm can be implemented incorrectly.", "A correct implementation can solve the wrong problem.", "A verified module can be unsafe inside a larger unsafe system."]
      }
    ],
    code: [
      ["Contract", "Precondition: list is sorted ascending.\nFunction: binary_search(list, target)\nPostcondition:\n- returns index i where list[i] == target, or\n- returns -1 if target is absent.\nInvariant:\n- if target exists, it remains inside [low, high]."]
    ]
  },
  {
    id: "information-theory",
    kicker: "Part IX - Information",
    title: "Information Theory, Compression, and Error Correction",
    summary: "Information theory studies how much uncertainty a message removes, how data can be compressed, and how communication can remain reliable over noisy channels.",
    concepts: [
      ["Entropy", "A measure of uncertainty or average information content."],
      ["Code", "A mapping from messages to symbols for storage or transmission."],
      ["Channel", "A medium that carries information and may introduce noise."],
      ["Redundancy", "Extra structure that can enable detection, correction, or resilience."]
    ],
    figure: { type: "flow", title: "Communication Model", items: ["Source", "Encoder", "Channel", "Noise", "Decoder", "Receiver"] },
    sections: [
      {
        heading: "Compression",
        body: "Compression works when data has pattern. If some symbols are more likely than others, shorter codes can be assigned to frequent symbols. If data is truly random, no compressor can reliably make every message shorter.",
        bullets: ["Lossless compression preserves exact data.", "Lossy compression preserves usefulness rather than exactness.", "Entropy gives a theoretical limit for average compression."]
      },
      {
        heading: "Error Correction",
        body: "Reliable systems often add redundancy deliberately. A few extra bits can detect or correct errors caused by noise, disk faults, memory faults, or transmission problems.",
        bullets: ["Parity can detect some errors.", "Checksums detect accidental corruption.", "Error-correcting codes trade capacity for reliability."]
      },
      {
        heading: "Why It Belongs in CS",
        body: "Information theory connects storage, networking, machine learning, cryptography, databases, and hardware. It teaches that representation has mathematical limits, not just engineering conventions.",
        bullets: ["Encryption should make ciphertext look statistically uninformative.", "Compression before encryption is usually more effective than after.", "Machine learning can be viewed partly as finding useful compressed structure."]
      }
    ],
    code: [
      ["Python", "from collections import Counter\nfrom math import log2\n\ndef entropy(text):\n    counts = Counter(text)\n    total = len(text)\n    return -sum((c / total) * log2(c / total) for c in counts.values())\n\nprint(entropy(\"aaaaabcc\"))"]
    ]
  },
  {
    id: "data-science",
    kicker: "Part IX - Data and Inference",
    title: "Data Science, Statistics, and Causal Thinking",
    summary: "Data science combines computation, statistics, domain knowledge, and communication. It asks not only what patterns exist, but whether those patterns are reliable, meaningful, and useful for decisions.",
    concepts: [
      ["Estimator", "A rule for using sample data to estimate an unknown quantity."],
      ["Confidence interval", "A procedure for quantifying uncertainty in an estimate."],
      ["Causality", "Reasoning about what would change under intervention."],
      ["Data pipeline", "The process that collects, cleans, transforms, models, and reports data."]
    ],
    figure: { type: "flow", title: "Data Science Loop", items: ["Question", "Data collection", "Cleaning", "Exploration", "Modeling", "Inference", "Decision", "Audit"] },
    sections: [
      {
        heading: "Computation Meets Inference",
        body: "A program can compute exact summaries of the data it has. Statistics asks how far those summaries generalize beyond the observed data. This distinction is essential for experiments, AI evaluation, and policy decisions.",
        bullets: ["Sampling bias can dominate model choice.", "Correlation alone does not prove causation.", "Visualization can reveal structure and mislead if scales or aggregation are poor."]
      },
      {
        heading: "Causal Thinking",
        body: "Causal questions ask what would happen under an intervention, not merely what variables move together. This requires assumptions about how data was generated, not just more rows.",
        bullets: ["Randomized experiments help estimate causal effects.", "Confounders can create misleading associations.", "Causal diagrams make assumptions explicit."]
      },
      {
        heading: "Responsible Data Work",
        body: "Data is produced by people, sensors, institutions, and measurement systems. It contains errors, incentives, omissions, and power relations. A serious data scientist audits provenance, privacy, fairness, and downstream use.",
        bullets: ["Missing data is often meaningful.", "Metrics reshape behavior.", "Models should be monitored after deployment."]
      }
    ],
    code: [
      ["Python", "values = [18, 21, 21, 24, 200]\nmean = sum(values) / len(values)\nmedian = sorted(values)[len(values) // 2]\nprint(mean, median)  # outliers affect summaries differently"]
    ]
  },
  {
    id: "embedded-robotics",
    kicker: "Part IX - Physical Computing",
    title: "Embedded Systems, Robotics, and Cyber-Physical Computing",
    summary: "Embedded and cyber-physical systems connect computation to the physical world. They must handle sensors, actuators, timing, energy, uncertainty, control, and safety.",
    concepts: [
      ["Sensor", "A device that measures physical state."],
      ["Actuator", "A device that changes physical state."],
      ["Control loop", "A repeated process of measuring, deciding, and acting."],
      ["Real-time constraint", "A deadline where late answers may be wrong even if logically correct."]
    ],
    figure: { type: "flow", title: "Cyber-Physical Control Loop", items: ["World", "Sensor", "Estimate state", "Controller", "Actuator", "World changes"] },
    sections: [
      {
        heading: "Computation With Deadlines",
        body: "In ordinary software, a late answer may be annoying. In a braking system, drone controller, pacemaker, or factory robot, a late answer can be unsafe. Real-time systems care about worst-case timing, not only average speed.",
        bullets: ["Hard real-time deadlines cannot be missed safely.", "Soft real-time systems degrade when late.", "Scheduling analysis estimates whether deadlines can be met."]
      },
      {
        heading: "Robotics as Integrated CS",
        body: "Robotics combines algorithms, AI, control theory, geometry, hardware, operating systems, networking, and safety engineering. A robot must perceive, plan, act, and recover under uncertainty.",
        bullets: ["Localization estimates where the robot is.", "Planning chooses a sequence of actions.", "Feedback corrects errors between plan and reality."]
      },
      {
        heading: "Physical Risk",
        body: "Physical systems expose software bugs as motion, heat, pressure, voltage, or force. This makes simulation, testing, redundancy, fail-safe states, and conservative design central.",
        bullets: ["Sensors are noisy and can fail.", "Actuators have limits and delay.", "Safety cases document why a system is acceptable to operate."]
      }
    ],
    code: [
      ["Pseudo-code", "loop every 10 ms:\n  position = read_sensor()\n  error = target - position\n  command = kp * error\n  send_to_motor(command)"]
    ]
  },
  {
    id: "quantum",
    kicker: "Part IX - Emerging Models",
    title: "Quantum Computing and Alternative Models of Computation",
    summary: "Quantum computing uses quantum states and operations as a model of computation. It does not make all problems easy, but it changes what is efficient for certain algebraic, search, simulation, and cryptographic tasks.",
    concepts: [
      ["Qubit", "A quantum bit described by amplitudes, not just 0 or 1."],
      ["Superposition", "A state represented as a combination of basis states."],
      ["Entanglement", "Correlation structure that cannot be explained as independent local states."],
      ["Measurement", "An operation that produces classical outcomes from a quantum state."]
    ],
    figure: { type: "layers", title: "Quantum Computing Stack", items: ["Problem structure", "Quantum algorithm", "Circuit gates", "Error correction", "Physical qubits", "Classical control"] },
    sections: [
      {
        heading: "What Quantum Does and Does Not Mean",
        body: "Quantum computers are not simply faster classical computers. They exploit amplitude, interference, and measurement. The challenge is designing algorithms where wrong paths cancel and useful paths become more likely.",
        bullets: ["Measurement gives probabilistic classical results.", "Quantum speedups are problem-specific.", "Error correction is essential because quantum states are fragile."]
      },
      {
        heading: "Why CS Studies It",
        body: "Quantum computing clarifies the relationship between physics and computation. It also affects cryptography, complexity theory, simulation of quantum systems, and the design of future hardware and algorithms.",
        bullets: ["Shor's algorithm threatens widely used public-key cryptography if large fault-tolerant machines exist.", "Grover's algorithm gives a quadratic search speedup.", "Post-quantum cryptography designs classical systems resistant to quantum attacks."]
      },
      {
        heading: "Alternative Models",
        body: "CS studies many computation models: finite automata, lambda calculus, logic programming, cellular automata, analog computing, probabilistic computation, and biological computation. Each model highlights different limits and possibilities.",
        bullets: ["A model is useful when it exposes structure.", "Different models can be equivalent in what they compute but different in cost.", "The Church-Turing thesis connects intuitive computability to formal models."]
      }
    ],
    code: [
      ["Circuit Sketch", "prepare |0>\napply Hadamard gate -> superposition\napply problem-specific gates -> interference\nmeasure -> classical bit"]
    ]
  },
  {
    id: "compilers",
    kicker: "Part IX - Translation",
    title: "Compilers, Interpreters, and Programming Language Implementation",
    summary: "Language implementation explains how human-readable programs become executable behavior. It connects formal languages, parsing, type checking, optimization, runtime systems, and machine architecture.",
    concepts: [
      ["Lexer", "Converts raw characters into tokens."],
      ["Parser", "Builds structure from tokens according to grammar rules."],
      ["Type checker", "Rejects programs that violate type rules."],
      ["Optimizer", "Transforms code to preserve meaning while improving cost."]
    ],
    figure: { type: "flow", title: "Compiler Pipeline", items: ["Source", "Tokens", "Syntax tree", "Semantic checks", "Intermediate form", "Optimization", "Machine code"] },
    sections: [
      {
        heading: "Programs as Data",
        body: "A compiler treats a program as structured data. Once code is parsed into a tree, the implementation can analyze names, scopes, types, control flow, and data flow. This is why compilers can catch errors and improve performance before a program runs.",
        bullets: ["Grammars define valid program shapes.", "Abstract syntax trees remove unimportant punctuation.", "Static analysis reasons about behavior without executing every path."]
      },
      {
        heading: "Runtime Systems",
        body: "Many languages need runtime support for memory allocation, garbage collection, exceptions, dynamic dispatch, modules, reflection, or asynchronous execution. The language is both syntax and a managed execution model.",
        bullets: ["JIT compilers optimize while programs run.", "Garbage collectors trade memory control for safety and productivity.", "Undefined behavior can let compilers optimize aggressively but makes mistakes dangerous."]
      }
    ],
    code: [
      ["Parser Sketch", "source code -> lexer -> tokens -> parser -> AST\n\nExample:\n1 + 2 * 3\n\nAST:\n+\n- 1\n- *\n  - 2\n  - 3"]
    ]
  },
  {
    id: "distributed",
    kicker: "Part IX - Scale",
    title: "Distributed Systems, Cloud Computing, and Reliability",
    summary: "Distributed systems coordinate multiple machines that can fail independently. This field explains cloud services, replicated databases, consensus, queues, microservices, and large-scale reliability engineering.",
    concepts: [
      ["Partial failure", "One component fails while others keep running."],
      ["Consensus", "A protocol for machines to agree despite failures."],
      ["Replication", "Keeping copies of data or services for availability and durability."],
      ["Observability", "Using logs, metrics, and traces to understand production behavior."]
    ],
    figure: { type: "matrix", title: "Distributed Design Pressures", items: ["Consistency: do replicas agree?", "Availability: can requests complete?", "Latency: how long does coordination take?", "Operability: can humans diagnose failure?"] },
    sections: [
      {
        heading: "The Network Is Not Memory",
        body: "Local memory is fast and relatively predictable. A network is slower, can drop messages, can partition, and can leave systems uncertain about whether another machine failed or is merely delayed. This uncertainty drives the core difficulty of distributed computing.",
        bullets: ["Retries need idempotency.", "Queues absorb bursts but introduce delay.", "Consensus gives agreement but costs communication rounds."]
      },
      {
        heading: "Reliability as an Engineering Discipline",
        body: "Reliable systems are designed for failure instead of surprise. They use redundancy, isolation, backpressure, health checks, rollbacks, incident response, and measurement. The goal is not zero failure; it is controlled failure with fast recovery.",
        bullets: ["Service level objectives define acceptable reliability.", "Circuit breakers stop cascading failure.", "Tracing connects one user action across many services."]
      }
    ],
    code: [
      ["Pseudo-code", "handle request:\n  if dependency is unhealthy:\n    return cached_or_degraded_response\n  try:\n    call dependency with timeout\n  catch timeout:\n    record metric\n    return retry_safe_fallback"]
    ]
  },
  {
    id: "scientific",
    kicker: "Part IX - Computing for Science",
    title: "Numerical, Scientific, and High-Performance Computing",
    summary: "Scientific computing uses algorithms to simulate, optimize, and analyze real systems. It brings together numerical methods, floating-point limits, parallel hardware, modeling assumptions, and reproducibility.",
    concepts: [
      ["Numerical method", "An approximate computational technique for mathematical problems."],
      ["Stability", "Whether small errors remain controlled or grow."],
      ["Simulation", "A computational model of a process or system."],
      ["High-performance computing", "Using parallel processors, GPUs, and clusters for large computations."]
    ],
    figure: { type: "ladder", title: "Scientific Computing Stack", items: ["Mathematical model", "Discretization", "Algorithm", "Floating-point execution", "Parallel hardware", "Validation against reality"] },
    sections: [
      {
        heading: "Approximation Is Not a Defect",
        body: "Many real problems cannot be solved exactly at useful scale. Scientific computing asks how close an answer is, how error behaves, and whether the model itself matches the real phenomenon.",
        bullets: ["Floating-point numbers approximate real numbers.", "Discretization turns continuous problems into finite ones.", "Validation compares model predictions with evidence."]
      },
      {
        heading: "Performance Changes What Is Possible",
        body: "Some discoveries require enormous computation: weather prediction, molecular simulation, graphics rendering, optimization, and machine learning. High-performance computing is about algorithms, hardware, memory movement, and parallel decomposition.",
        bullets: ["GPUs excel at many similar operations in parallel.", "Memory bandwidth often limits speed.", "Reproducibility requires tracking code, data, parameters, and environment."]
      }
    ],
    code: [
      ["Python", "position = 0.0\nvelocity = 10.0\ndt = 0.1\ngravity = -9.81\n\nfor step in range(10):\n    velocity += gravity * dt\n    position += velocity * dt\n    print(round(position, 3))"]
    ]
  }
);

const researchReferences = {
  cs2023: ["ACM/IEEE/AAAI CS2023 Knowledge Areas", "https://csed.acm.org/knowledge-areas/"],
  mitMath: ["MIT OCW 6.042J Mathematics for Computer Science", "https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/"],
  mitAlgorithms: ["MIT OCW 6.046J Introduction to Algorithms", "https://ocw.mit.edu/courses/6-046j-introduction-to-algorithms-sma-5503-fall-2005/"],
  mit006: ["MIT OCW 6.006 Introduction to Algorithms", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/"],
  berkeley70: ["UC Berkeley CS 70 Discrete Mathematics and Probability Theory", "https://www2.eecs.berkeley.edu/Courses/CS70/"],
  stanfordCore: ["Stanford Computer Science Core Requirements", "https://www.cs.stanford.edu/bs-core-requirements"],
  cmuCore: ["CMU Computer Science Undergraduate Program", "https://coursecatalog.web.cmu.edu/schools-colleges/schoolofcomputerscience/undergraduatecomputerscience/"],
  ossu: ["OSSU Computer Science Curriculum", "https://github.com/ossu/computer-science"],
  teachYourselfCS: ["Teach Yourself Computer Science", "https://teachyourselfcs.com/"],
  missingSemester: ["MIT Missing Semester", "https://missing.csail.mit.edu/"],
  cs50: ["Harvard CS50x", "https://cs50.harvard.edu/x/"],
  berkeley61a: ["Berkeley CS 61A Structure and Interpretation of Computer Programs", "https://people.eecs.berkeley.edu/~bh/cs61A.html"],
  berkeley61b: ["Berkeley CS 61B Data Structures", "https://www2.eecs.berkeley.edu/Courses/CS61B/"],
  berkeley162: ["Berkeley CS 162 Operating Systems and Systems Programming", "https://rise.cs.berkeley.edu/course/cs162-operating-systems-systems-programming/"],
  cmu15213: ["CMU 15-213 Introduction to Computer Systems", "https://www.cs.cmu.edu/afs/cs/academic/class/15213-s24/www/schedule.html"],
  berkeley186: ["Berkeley CS 186 Introduction to Database Systems", "https://dsf.berkeley.edu/dbcourse/"],
  mitDistributed: ["MIT 6.824 / 6.5840 Distributed Systems", "https://pdos.csail.mit.edu/6.824/"],
  stanford229: ["Stanford CS229 Machine Learning", "https://cs229.stanford.edu/"],
  berkeley188: ["Berkeley CS 188 Artificial Intelligence", "https://inst.eecs.berkeley.edu/~cs188/"]
};

const coursePlan = [
  {
    weeks: "Weeks 1-2",
    title: "Computational Thinking, Tools, and Programming",
    summary: "Start with abstraction, decomposition, basic programming, the shell, editors, Git, debugging, and the habit of making work reproducible.",
    outcomes: "Explain what a program represents; use functions and control flow; navigate a terminal; commit work with Git.",
    project: "Build a command-line study-card tool that saves cards, searches cards, and tracks review counts.",
    references: [researchReferences.cs50, researchReferences.berkeley61a, researchReferences.missingSemester]
  },
  {
    weeks: "Weeks 3-4",
    title: "Discrete Math, Logic, Proof, and Probability",
    summary: "Learn propositions, predicates, induction, sets, relations, counting, graphs, modular arithmetic, probability, conditioning, expectation, and variance.",
    outcomes: "Write direct and inductive proofs; model a problem as a graph or relation; compute simple probabilities and expectations.",
    project: "Create an interactive proof notebook with worked examples for induction, graph reachability, and Bayes' theorem.",
    references: [researchReferences.mitMath, researchReferences.berkeley70]
  },
  {
    weeks: "Weeks 5-6",
    title: "Data Structures and Algorithmic Analysis",
    summary: "Study arrays, linked structures, stacks, queues, hash tables, trees, heaps, graphs, asymptotic analysis, invariants, and amortized cost.",
    outcomes: "Choose structures by operation mix; analyze Big O; explain correctness using invariants.",
    project: "Implement a small graph library with BFS, DFS, shortest path, topological sort, and tests.",
    references: [researchReferences.berkeley61b, researchReferences.mit006, researchReferences.mitAlgorithms]
  },
  {
    weeks: "Weeks 7-8",
    title: "Algorithm Design Paradigms",
    summary: "Move from basic data structures to divide and conquer, greedy algorithms, dynamic programming, graph algorithms, network flow, randomized algorithms, and lower bounds.",
    outcomes: "Identify a suitable paradigm; write a recurrence; prove greedy safety; compare exact, approximate, and randomized methods.",
    project: "Build a route planner that compares BFS, Dijkstra, A*, and dynamic programming on different map assumptions.",
    references: [researchReferences.mitAlgorithms, researchReferences.mit006, researchReferences.cmuCore]
  },
  {
    weeks: "Weeks 9-10",
    title: "Computer Systems and Architecture",
    summary: "Trace programs into machine code, memory layout, arithmetic, caching, linking, exceptional control flow, processes, and system-level I/O.",
    outcomes: "Explain why memory hierarchy matters; reason about pointers and layout; connect C-like code to machine behavior.",
    project: "Write and profile a memory-intensive program, then improve it by changing layout and access patterns.",
    references: [researchReferences.cmu15213, researchReferences.stanfordCore]
  },
  {
    weeks: "Weeks 11-12",
    title: "Operating Systems, Concurrency, and Networking",
    summary: "Study processes, threads, synchronization, scheduling, virtual memory, file systems, sockets, reliability, and security boundaries.",
    outcomes: "Explain race conditions; use locks carefully; describe virtual memory; reason about network failure.",
    project: "Build a concurrent key-value server with logging, basic persistence, and a test that exposes a race condition.",
    references: [researchReferences.berkeley162, researchReferences.stanfordCore]
  },
  {
    weeks: "Weeks 13-14",
    title: "Databases, Information Retrieval, and Data Systems",
    summary: "Learn relational algebra, SQL, schema design, normalization, indexing, query plans, transactions, recovery, and consistency tradeoffs.",
    outcomes: "Design a relational schema; write joins; explain indexes and transactions; distinguish logical and physical design.",
    project: "Build a searchable course catalog with normalized tables, indexes, full-text search, and transaction-safe updates.",
    references: [researchReferences.berkeley186, researchReferences.teachYourselfCS]
  },
  {
    weeks: "Weeks 15-16",
    title: "Programming Languages, Compilers, and Verification",
    summary: "Study grammars, parsing, interpreters, type systems, semantics, program analysis, contracts, property testing, and formal verification.",
    outcomes: "Parse a small language; explain type checking; write properties and invariants; understand the boundary between testing and proof.",
    project: "Implement a tiny expression language with variables, type checks, evaluation, and property-based tests.",
    references: [researchReferences.cs2023, researchReferences.berkeley61a, researchReferences.mitMath]
  },
  {
    weeks: "Weeks 17-18",
    title: "AI, Machine Learning, Data Science, and Causality",
    summary: "Cover search, planning, uncertainty, Bayes nets, supervised learning, unsupervised learning, generalization, evaluation, causal assumptions, and responsible data work.",
    outcomes: "Separate AI search from ML; explain train/test splits; identify confounding; evaluate models with appropriate metrics.",
    project: "Build a small classifier and an audit report describing data provenance, bias risks, and evaluation limitations.",
    references: [researchReferences.berkeley188, researchReferences.stanford229, researchReferences.cs2023]
  },
  {
    weeks: "Weeks 19-20",
    title: "Distributed Systems, Security, Ethics, and Capstone",
    summary: "Finish with partial failure, replication, consensus, security threat models, cryptography, privacy, accessibility, professional responsibility, and a capstone system.",
    outcomes: "Explain why distributed agreement is hard; write a threat model; discuss ethical constraints as engineering constraints.",
    project: "Capstone: design and document a fault-aware, secure, data-backed web service with tests, observability notes, and an ethics review.",
    references: [researchReferences.mitDistributed, researchReferences.missingSemester, researchReferences.cs2023]
  }
];

const chapterEnhancements = {
  foundations: {
    sections: [
      {
        heading: "What Changes Between Beginner and Expert Understanding",
        body: "At the beginner level, CS looks like learning languages and tools. At the expert level, it becomes the study of representations, invariants, cost models, interfaces, and failure modes. The same program can be understood as text, syntax tree, control flow graph, machine instructions, memory behavior, network behavior, and user-facing system.",
        bullets: ["Ask what is represented, what operations are allowed, and what costs dominate.", "Separate the abstract problem from the implementation that happens to solve it.", "Look for invariants: the facts that make progress safe."]
      }
    ],
    references: [researchReferences.cs2023, researchReferences.ossu, researchReferences.teachYourselfCS, researchReferences.stanfordCore, researchReferences.cmuCore]
  },
  data: {
    sections: [
      {
        heading: "Representation Is a Contract",
        body: "Bits have no meaning by themselves. Meaning appears when a community, program, or protocol agrees on an encoding. This is why the same byte pattern can be an integer, a character, an instruction, a color, or compressed data depending on the contract used to interpret it.",
        bullets: ["A format defines structure; an encoding defines meaning.", "Metadata tells software how to interpret raw bytes.", "Many security bugs come from two components disagreeing about representation."]
      }
    ],
    references: [researchReferences.cs2023, researchReferences.cs50]
  },
  algorithms: {
    sections: [
      {
        heading: "The Four-Part Algorithm Answer",
        body: "Strong algorithm courses train a consistent habit: state the algorithm, illustrate it, prove why it is correct, and analyze its cost. Code alone is not enough because code can obscure the reason the method works.",
        bullets: ["Description: what the algorithm does at each step.", "Example: how it behaves on a concrete input.", "Correctness: why every valid input is handled.", "Complexity: how time and memory grow."]
      },
      {
        heading: "Lower Bounds and Impossibility",
        body: "Algorithm design is also about knowing what cannot be improved. Comparison sorting has a lower bound because sorting must distinguish among n factorial possible input orders. This style of argument prevents wasted effort chasing impossible speedups under a fixed model.",
        bullets: ["Upper bounds come from algorithms.", "Lower bounds come from proofs about all algorithms in a model.", "Changing the model can change what is possible."]
      }
    ],
    references: [researchReferences.mitAlgorithms, researchReferences.mit006]
  },
  structures: {
    sections: [
      {
        heading: "Data Structures Are Algorithms Made Persistent",
        body: "A data structure is not just storage; it is a collection of promises about future operations. Balanced trees promise logarithmic ordered updates. Hash tables promise expected constant lookup. Heaps promise fast access to the next priority item. The structure is chosen by the operations the future will ask for.",
        bullets: ["Choose arrays for compact indexed access.", "Choose trees for ordered search and ranges.", "Choose graphs when relationships are first-class.", "Choose hash tables when key lookup dominates and ordering is secondary."]
      }
    ],
    references: [researchReferences.berkeley61b, researchReferences.mit006, researchReferences.mitAlgorithms]
  },
  "logic-proof": {
    sections: [
      {
        heading: "Proof Techniques as Debugging Tools",
        body: "Proof is not separate from programming. Direct proof resembles tracing a straight-line argument. Contradiction exposes impossible assumptions. Induction mirrors recursion and loops. Counterexamples are minimal failing tests for mathematical claims.",
        bullets: ["Use induction when a structure is built from smaller structures.", "Use contradiction when assuming failure creates an impossible state.", "Use counterexamples to sharpen definitions quickly."]
      }
    ],
    references: [researchReferences.mitMath, researchReferences.berkeley70]
  },
  math: {
    sections: [
      {
        heading: "The Math Dependency Graph",
        body: "CS math is not a random checklist. Logic supports proof and verification. Sets and relations support types, databases, and graphs. Counting supports probability and complexity. Number theory supports cryptography. Linear algebra supports graphics and AI. Probability supports randomized algorithms, statistics, reliability, and machine learning.",
        bullets: ["Proof gives guarantees.", "Counting gives scale.", "Probability gives uncertainty.", "Linear algebra gives geometry and high-dimensional representation."]
      }
    ],
    references: [researchReferences.mitMath, researchReferences.berkeley70]
  },
  "counting-combinatorics": {
    sections: [
      {
        heading: "How Counting Enters Runtime",
        body: "When a recursive algorithm branches, counting estimates the recursion tree. When a randomized algorithm samples, counting estimates success probability. When a cryptographic key is chosen, counting estimates brute-force resistance. Counting is the bridge between a finite program and a huge space of possibilities.",
        bullets: ["Recurrences count work across recursive levels.", "The pigeonhole principle proves collisions must occur.", "Bijections turn a hard count into an easier equivalent count."]
      }
    ],
    references: [researchReferences.mitMath, researchReferences.berkeley70]
  },
  "linear-algebra": {
    sections: [
      {
        heading: "The Same Vector Story Reappears Everywhere",
        body: "Linear algebra becomes easier when you stop treating each application as new. A graphics transform, a neural network layer, a search-ranking update, and a physical simulation step all move vectors through structured transformations. The interpretation changes; the mathematics stays recognizable.",
        bullets: ["Coordinate systems are choices of basis.", "Matrix products are composed transformations.", "High-dimensional geometry explains similarity search and embeddings."]
      }
    ],
    references: [researchReferences.stanford229, researchReferences.cs2023, researchReferences.stanfordCore]
  },
  "advanced-algorithms": {
    sections: [
      {
        heading: "Paradigm Recognition",
        body: "A mature algorithm designer first classifies the structure of the problem. Is there a shortest path? A dependency order? Repeated subproblems? A safe local choice? A flow of capacity? A hard search space needing approximation? The classification often determines the solution.",
        bullets: ["Dynamic programming starts with state definition.", "Greedy algorithms start with a safety proof.", "Graph algorithms start by deciding what nodes and edges mean.", "Randomization starts by bounding failure probability."]
      }
    ],
    references: [researchReferences.mitAlgorithms, researchReferences.mit006, researchReferences.cmuCore]
  },
  architecture: {
    sections: [
      {
        heading: "The Cost Model Below Big O",
        body: "Big O hides constants, but hardware often lives in those constants. Cache misses, branch prediction, vectorization, memory layout, and synchronization can dominate real performance. Architecture teaches why two algorithms with similar asymptotic cost can behave very differently on a real machine.",
        bullets: ["Sequential memory access is usually friendlier to caches.", "Parallelism can be limited by communication and contention.", "The memory hierarchy is a performance model, not just a hardware diagram."]
      }
    ],
    references: [researchReferences.cmu15213, researchReferences.stanfordCore, researchReferences.cmuCore]
  },
  os: {
    sections: [
      {
        heading: "The OS as Illusion Manager",
        body: "Operating systems create useful illusions: each process appears to own the CPU, memory appears private and contiguous, files appear stable, and devices appear uniform. The kernel maintains these illusions while enforcing protection and sharing finite hardware.",
        bullets: ["Virtualization turns physical scarcity into manageable abstractions.", "Scheduling trades responsiveness, throughput, and fairness.", "Isolation is both a correctness and security mechanism."]
      }
    ],
    references: [researchReferences.berkeley162, researchReferences.stanfordCore, researchReferences.cmuCore]
  },
  languages: {
    sections: [
      {
        heading: "Language Design Is Tradeoff Design",
        body: "A programming language chooses what errors to prevent, what patterns to make concise, what performance model to expose, and what mental model programmers should use. No language is universally best because domains reward different tradeoffs.",
        bullets: ["Type systems move some checks before runtime.", "Memory management trades control against safety.", "Syntax matters because programs are read more often than they are written."]
      }
    ],
    references: [researchReferences.cs2023, researchReferences.berkeley61a, researchReferences.stanfordCore]
  },
  databases: {
    sections: [
      {
        heading: "Data Models Shape Questions",
        body: "A relational database encourages thinking in tables, keys, constraints, joins, and transactions. A document store encourages nested records. A graph database encourages traversal. The data model affects not only storage but also what questions feel natural and efficient.",
        bullets: ["Indexes speed reads but slow writes and consume space.", "Transactions protect invariants across changes.", "Query planners are compilers for data access."]
      }
    ],
    references: [researchReferences.berkeley186, researchReferences.cs2023]
  },
  networks: {
    sections: [
      {
        heading: "Protocols Are Layered Agreements",
        body: "A network protocol is a social and technical agreement between machines. Layering works because each layer provides a service while hiding lower-level details. The danger is that hidden assumptions, such as reliable delivery or low latency, can leak into application design.",
        bullets: ["Names, addresses, routes, and sessions are different abstractions.", "Reliability can be implemented above unreliable transport.", "Security must authenticate meaning, not just move bytes."]
      }
    ],
    references: [researchReferences.berkeley162, researchReferences.cs2023, researchReferences.stanfordCore]
  },
  "information-theory": {
    sections: [
      {
        heading: "Information as Removed Uncertainty",
        body: "A message is informative when it rules out possibilities. A predictable message carries little new information; a surprising message carries more. This view explains why compression, encryption, coding, and statistical learning are connected.",
        bullets: ["Compression exploits predictability.", "Encryption tries to remove exploitable patterns.", "Error correction adds structured redundancy."]
      }
    ],
    references: [researchReferences.mitMath]
  },
  "data-science": {
    sections: [
      {
        heading: "The Dangerous Gap Between Data and Reality",
        body: "Data is a measurement of reality, not reality itself. Every dataset has a collection process, missing cases, incentives, definitions, and errors. Advanced data work starts by asking how the data came to exist before asking what model to fit.",
        bullets: ["Measurement choices define what can be learned.", "Selection bias can survive large sample sizes.", "Causal claims require assumptions beyond correlation."]
      }
    ],
    references: [researchReferences.stanford229, researchReferences.berkeley188, researchReferences.cs2023, researchReferences.stanfordCore]
  },
  ai: {
    sections: [
      {
        heading: "AI as Search, Representation, and Generalization",
        body: "AI is not one technique. Classical AI emphasized search and symbolic representation. Machine learning emphasizes statistical generalization from data. Modern systems combine representation learning, optimization, retrieval, tools, feedback, and evaluation.",
        bullets: ["A model compresses patterns from examples into parameters.", "Generalization is tested on cases not used for training.", "Evaluation must match the real task, not just a convenient benchmark."]
      }
    ],
    references: [researchReferences.stanford229, researchReferences.berkeley188, researchReferences.cs2023, researchReferences.cmuCore]
  },
  verification: {
    sections: [
      {
        heading: "Correctness Lives at Multiple Levels",
        body: "A proof about an algorithm, a type checker guarantee, a unit test, and a production monitor are all evidence about correctness at different levels. High-assurance engineering combines evidence instead of expecting one method to cover every risk.",
        bullets: ["Formal methods reason inside a model.", "Tests exercise concrete implementations.", "Monitoring checks behavior after deployment."]
      }
    ],
    references: [researchReferences.mitMath, researchReferences.cs2023]
  },
  distributed: {
    sections: [
      {
        heading: "The Fundamental Question of Agreement",
        body: "Many distributed systems reduce to agreement under uncertainty. Which value is committed? Which node is leader? Which replica is current? Consensus protocols exist because communication delay can make failure indistinguishable from slowness.",
        bullets: ["Replication improves availability but creates coordination problems.", "Consistency models define what reads are allowed to observe.", "Timeouts are guesses, not proof of failure."]
      }
    ],
    references: [researchReferences.mitDistributed, researchReferences.cs2023, researchReferences.stanfordCore, researchReferences.cmuCore]
  },
  professional: {
    sections: [
      {
        heading: "Ethics as Design Constraint",
        body: "Ethics is not a final lecture after the technical work. It changes requirements, data collection, access control, monitoring, model evaluation, interface design, and deployment decisions. A system can be technically impressive and still professionally irresponsible.",
        bullets: ["Ask who is affected and who can contest outcomes.", "Audit privacy, security, accessibility, and fairness early.", "Treat maintenance and incident response as part of the design."]
      }
    ],
    references: [researchReferences.cs2023, researchReferences.cmuCore]
  }
};

Object.entries(chapterEnhancements).forEach(([id, enhancement]) => {
  const chapter = chapters.find((item) => item.id === id);
  if (!chapter) return;
  if (enhancement.summary) chapter.summary = enhancement.summary;
  if (enhancement.concepts) chapter.concepts.push(...enhancement.concepts);
  if (enhancement.sections) chapter.sections.push(...enhancement.sections);
  if (enhancement.references) chapter.references = enhancement.references;
});

const book = document.querySelector("#book");
const nav = document.querySelector("#chapterNav");
const template = document.querySelector("#chapterTemplate");
const searchInput = document.querySelector("#searchInput");
const readPageButton = document.querySelector("#readPageButton");
const coursePlanRoot = document.querySelector("#coursePlan");
const readerToggle = document.querySelector("#readerToggle");
const readerPanel = document.querySelector("#readerPanel");
const voiceSelect = document.querySelector("#voiceSelect");
const startSelect = document.querySelector("#startSelect");
const rateControl = document.querySelector("#rateControl");
const rateValue = document.querySelector("#rateValue");
const readerStatus = document.querySelector("#readerStatus");
const readerPlay = document.querySelector("#readerPlay");
const readerPause = document.querySelector("#readerPause");
const readerStop = document.querySelector("#readerStop");
let voices = [];
let readerItems = [];
let currentReaderIndex = 0;
let currentUtterance = null;
let readerState = "idle";

function slugTitle(chapter) {
  return `chapter-${chapter.id}`;
}

function createFigure(figure) {
  const wrapper = document.createElement("div");
  wrapper.className = "figure";
  wrapper.innerHTML = `<div class="figure-title">${figure.title}</div>`;
  const body = document.createElement("div");
  body.className = figure.type;
  figure.items.forEach((item) => {
    const node = document.createElement(figure.type === "matrix" ? "div" : "span");
    node.textContent = item;
    body.appendChild(node);
  });
  wrapper.appendChild(body);
  return wrapper;
}

function createCodePanel(chapter, panel) {
  if (!chapter.code || chapter.code.length === 0) return;
  panel.classList.add("has-code");

  const tabs = document.createElement("div");
  tabs.className = "code-tabs";
  const pre = document.createElement("pre");
  const code = document.createElement("code");
  pre.appendChild(code);

  chapter.code.forEach(([language, source], index) => {
    const button = document.createElement("button");
    button.className = `tab-button${index === 0 ? " active" : ""}`;
    button.type = "button";
    button.textContent = language;
    button.addEventListener("click", () => {
      tabs.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
      button.classList.add("active");
      code.textContent = source;
    });
    tabs.appendChild(button);
    if (index === 0) code.textContent = source;
  });

  panel.append(tabs, pre);
}

function createReferencesPanel(chapter, panel) {
  if (!chapter.references || chapter.references.length === 0) return;
  panel.classList.add("has-references");
  const items = chapter.references
    .map(([label, url]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`)
    .join("");
  panel.innerHTML = `<h3>References and Further Study</h3><ul>${items}</ul>`;
}

function renderCoursePlan() {
  if (!coursePlanRoot) return;
  coursePlan.forEach((module) => {
    const card = document.createElement("article");
    card.className = "course-module";
    const links = module.references
      .map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`)
      .join(" | ");
    card.innerHTML = `
      <div class="course-week">${module.weeks}</div>
      <div>
        <h3>${module.title}</h3>
        <p>${module.summary}</p>
        <dl>
          <dt>Learning outcomes</dt>
          <dd>${module.outcomes}</dd>
          <dt>Project</dt>
          <dd>${module.project}</dd>
          <dt>References</dt>
          <dd>${links}</dd>
        </dl>
      </div>
    `;
    coursePlanRoot.appendChild(card);
  });
}

function chapterText(chapter) {
  const sectionText = chapter.sections
    .map((section) => `${section.heading}. ${section.body} ${section.bullets.join(". ")}.`)
    .join(" ");
  return `${chapter.title}. ${chapter.summary} ${sectionText}`;
}

function sectionText(chapter, section) {
  return `${chapter.title}. ${section.heading}. ${section.body} ${section.bullets.join(". ")}.`;
}

function buildReaderItems() {
  readerItems = chapters.flatMap((chapter, chapterIndex) =>
    chapter.sections.map((section, sectionIndex) => ({
      chapterIndex,
      sectionIndex,
      label: `${String(chapterIndex + 1).padStart(2, "0")}.${sectionIndex + 1} ${chapter.title} - ${section.heading}`,
      text: sectionText(chapter, section),
      targetId: slugTitle(chapter)
    }))
  );
}

function populateStartOptions() {
  startSelect.innerHTML = "";
  readerItems.forEach((item, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = item.label;
    startSelect.appendChild(option);
  });
}

function populateVoices() {
  if (!("speechSynthesis" in window)) {
    voiceSelect.innerHTML = "<option>Speech not supported</option>";
    return;
  }

  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${voice.name} (${voice.lang})`;
    if (voice.default) option.selected = true;
    voiceSelect.appendChild(option);
  });

  if (!voices.length) {
    const option = document.createElement("option");
    option.textContent = "Loading voices...";
    voiceSelect.appendChild(option);
  }
}

function selectedVoice() {
  return voices[Number(voiceSelect.value)] || null;
}

function updateReaderStatus() {
  const item = readerItems[currentReaderIndex];
  const label = item ? item.label : "Ready";
  readerStatus.textContent = readerState === "paused" ? `Paused: ${label}` : label;
  readerPause.textContent = readerState === "paused" ? "Resume" : "Pause";
  document.querySelectorAll(".audio-button").forEach((button) => {
    const isActive = Number(button.dataset.readerStart) <= currentReaderIndex && currentReaderIndex <= Number(button.dataset.readerEnd) && readerState === "playing";
    button.setAttribute("aria-pressed", String(isActive));
    const labelNode = button.querySelector("span:last-child");
    if (labelNode) labelNode.textContent = isActive ? "Reading" : "Listen";
  });
  readPageButton.setAttribute("aria-pressed", String(readerState === "playing"));
}

function stopReading() {
  if (!("speechSynthesis" in window)) {
    return;
  }
  speechSynthesis.cancel();
  currentUtterance = null;
  readerState = "idle";
  updateReaderStatus();
}

function speakCurrentItem() {
  if (!("speechSynthesis" in window)) {
    alert("This browser does not support local speech synthesis.");
    return;
  }

  const item = readerItems[currentReaderIndex];
  if (!item) {
    stopReading();
    return;
  }

  const target = document.querySelector(`#${item.targetId}`);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(item.text);
  currentUtterance = utterance;
  utterance.rate = Number(rateControl.value);
  utterance.pitch = 1;
  utterance.voice = selectedVoice();
  utterance.onend = () => {
    if (readerState !== "playing" || currentUtterance !== utterance) return;
    currentReaderIndex += 1;
    if (currentReaderIndex < readerItems.length) {
      startSelect.value = String(currentReaderIndex);
      speakCurrentItem();
    } else {
      stopReading();
    }
  };
  utterance.onerror = stopReading;
  readerState = "playing";
  startSelect.value = String(currentReaderIndex);
  updateReaderStatus();
  speechSynthesis.speak(utterance);
}

function startReading(index = Number(startSelect.value || 0)) {
  currentReaderIndex = Math.max(0, Math.min(index, readerItems.length - 1));
  speakCurrentItem();
}

function togglePause() {
  if (!("speechSynthesis" in window)) return;
  if (readerState === "paused") {
    readerState = "playing";
    speechSynthesis.resume();
  } else if (readerState === "playing") {
    readerState = "paused";
    speechSynthesis.pause();
  }
  updateReaderStatus();
}

function startAtChapter(chapterIndex) {
  const startIndex = readerItems.findIndex((item) => item.chapterIndex === chapterIndex);
  if (startIndex >= 0) startReading(startIndex);
}

function render() {
  chapters.forEach((chapter, index) => {
    const id = slugTitle(chapter);
    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = `${String(index + 1).padStart(2, "0")} ${chapter.title}`;
    nav.appendChild(link);

    const node = template.content.firstElementChild.cloneNode(true);
    node.id = id;
    node.dataset.search = `${chapter.title} ${chapter.summary} ${chapter.concepts.flat().join(" ")} ${chapter.sections.map((section) => `${section.heading} ${section.body} ${section.bullets.join(" ")}`).join(" ")}`.toLowerCase();
    node.querySelector(".chapter-kicker").textContent = chapter.kicker;
    node.querySelector("h2").textContent = chapter.title;
    node.querySelector(".chapter-summary").textContent = chapter.summary;

    const conceptGrid = node.querySelector(".concept-grid");
    chapter.concepts.forEach(([term, definition]) => {
      const card = document.createElement("div");
      card.className = "concept-card";
      card.innerHTML = `<strong>${term}</strong><p>${definition}</p>`;
      conceptGrid.appendChild(card);
    });

    node.querySelector(".figure-slot").appendChild(createFigure(chapter.figure));

    const sections = node.querySelector(".sections");
    chapter.sections.forEach((section) => {
      const card = document.createElement("section");
      card.className = "section-card";
      const bullets = section.bullets.map((item) => `<li>${item}</li>`).join("");
      card.innerHTML = `<h3>${section.heading}</h3><p>${section.body}</p><ul>${bullets}</ul>`;
      sections.appendChild(card);
    });

    const audioButton = node.querySelector(".audio-button");
    const chapterStart = readerItems.findIndex((item) => item.chapterIndex === index);
    const chapterEnd = readerItems.reduce((last, item, itemIndex) => item.chapterIndex === index ? itemIndex : last, -1);
    audioButton.dataset.readerStart = String(chapterStart);
    audioButton.dataset.readerEnd = String(chapterEnd);
    audioButton.title = "Start listening here and continue chronologically";
    audioButton.addEventListener("click", () => startAtChapter(index));

    createCodePanel(chapter, node.querySelector(".code-panel"));
    createReferencesPanel(chapter, node.querySelector(".references-panel"));
    book.appendChild(node);
  });

  document.querySelector("#chapterCount").textContent = chapters.length;
  document.querySelector("#sectionCount").textContent = chapters.reduce((sum, chapter) => sum + chapter.sections.length, 0);
}

function filterChapters() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll(".chapter").forEach((chapter) => {
    const matches = !query || chapter.dataset.search.includes(query);
    chapter.classList.toggle("hidden", !matches);
    visible += matches ? 1 : 0;
  });
  nav.querySelectorAll("a").forEach((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    link.classList.toggle("hidden", target.classList.contains("hidden"));
  });

  let empty = document.querySelector(".empty-state");
  if (!visible && !empty) {
    empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No chapter matches that search.";
    book.appendChild(empty);
  } else if (visible && empty) {
    empty.remove();
  }
}

function updateActiveNav() {
  const chaptersOnPage = [...document.querySelectorAll(".chapter:not(.hidden)")];
  let current = chaptersOnPage[0];
  chaptersOnPage.forEach((chapter) => {
    if (chapter.getBoundingClientRect().top < 180) current = chapter;
  });
  if (!current) return;
  nav.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
}

buildReaderItems();
renderCoursePlan();
render();
populateStartOptions();
populateVoices();

searchInput.addEventListener("input", filterChapters);
document.addEventListener("scroll", updateActiveNav, { passive: true });
readPageButton.addEventListener("click", () => startReading(0));
readerPlay.addEventListener("click", () => startReading(Number(startSelect.value || 0)));
readerPause.addEventListener("click", togglePause);
readerStop.addEventListener("click", stopReading);
readerToggle.addEventListener("click", () => {
  const collapsed = readerPanel.classList.toggle("collapsed");
  readerToggle.setAttribute("aria-expanded", String(!collapsed));
});
startSelect.addEventListener("change", () => {
  currentReaderIndex = Number(startSelect.value || 0);
  updateReaderStatus();
});
rateControl.addEventListener("input", () => {
  rateValue.textContent = `${Number(rateControl.value).toFixed(2)}x`;
});
rateControl.addEventListener("change", () => {
  if (readerState === "playing") startReading(currentReaderIndex);
});
voiceSelect.addEventListener("change", () => {
  if (readerState === "playing") startReading(currentReaderIndex);
});

if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = populateVoices;
}

window.addEventListener("beforeunload", () => {
  if ("speechSynthesis" in window) speechSynthesis.cancel();
});

updateActiveNav();
updateReaderStatus();
