/**
 * Educational interactives for the textbook. Values use standard definitions (log₂ where noted).
 */
(function () {
  const mqReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function motionOk() {
    return !mqReduceMotion.matches;
  }

  function widgetFrame(title, description) {
    const wrap = document.createElement("section");
    wrap.className = "interactive-widget";
    wrap.setAttribute("aria-label", title);
    const head = document.createElement("header");
    head.className = "interactive-widget-head";
    const h4 = document.createElement("h4");
    h4.className = "interactive-widget-title";
    h4.textContent = title;
    head.appendChild(h4);
    if (description) {
      const p = document.createElement("p");
      p.className = "interactive-widget-desc";
      p.textContent = description;
      head.appendChild(p);
    }
    const body = document.createElement("div");
    body.className = "interactive-widget-body";
    wrap.appendChild(head);
    wrap.appendChild(body);
    return { wrap, body };
  }

  /** Heights use log₁₀ mapping so O(n²) and O(log n) fit one chart honestly. */
  function mountGrowthCompare(container) {
    const { wrap, body } = widgetFrame(
      "Growth rates vs n",
      "Bar heights map log₁₀(operation count + 1) so huge spreads fit one chart. Counts use log₂(n) inside O(log n); changing log base scales by a constant factor, invisible inside O(log n)."
    );
    container.appendChild(wrap);

    const controls = document.createElement("div");
    controls.className = "interactive-controls";
    const label = document.createElement("label");
    label.className = "interactive-slider-label";
    label.textContent = "Input size n";
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "2";
    slider.max = "256";
    slider.step = "1";
    slider.value = "32";
    slider.setAttribute("aria-valuetext", "");
    label.appendChild(slider);
    const nReadout = document.createElement("output");
    nReadout.className = "interactive-readout";
    nReadout.setAttribute("for", "");
    nReadout.textContent = "n = 32";
    controls.appendChild(label);
    controls.appendChild(nReadout);

    const chart = document.createElement("div");
    chart.className = "growth-chart";
    chart.setAttribute("role", "group");
    chart.setAttribute("aria-label", "Relative growth comparison");

    const rows = [
      { key: "1", label: "O(1)", fn: () => 1 },
      { key: "log", label: "O(log n)", fn: (n) => Math.log2(n) },
      { key: "lin", label: "O(n)", fn: (n) => n },
      { key: "nlog", label: "O(n log n)", fn: (n) => n * Math.log2(n) },
      { key: "sq", label: "O(n²)", fn: (n) => n * n }
    ];

    const rowEls = rows.map((row) => {
      const r = document.createElement("div");
      r.className = "growth-row";
      const lab = document.createElement("span");
      lab.className = "growth-label";
      lab.textContent = row.label;
      const track = document.createElement("div");
      track.className = "growth-track";
      const fill = document.createElement("div");
      fill.className = "growth-fill";
      fill.style.transition = motionOk() ? "width 0.35s ease" : "none";
      const valOut = document.createElement("span");
      valOut.className = "growth-value";
      track.appendChild(fill);
      r.appendChild(lab);
      r.appendChild(track);
      r.appendChild(valOut);
      chart.appendChild(r);
      return { row, fill, valOut };
    });

    function fmt(v) {
      if (!Number.isFinite(v)) return "—";
      if (v >= 1e9) return `${(v / 1e9).toFixed(2)}×10⁹`;
      if (v >= 1e6) return `${(v / 1e6).toFixed(2)}×10⁶`;
      if (v >= 1e4) return `${Math.round(v).toLocaleString()}`;
      if (v >= 100) return `${Math.round(v)}`;
      return v < 10 ? v.toFixed(2) : `${Math.round(v)}`;
    }

    function update() {
      const n = Number(slider.value);
      nReadout.textContent = `n = ${n}`;
      slider.setAttribute("aria-valuetext", `n equals ${n}`);
      const vals = rows.map((r) => Math.max(0, r.fn(n)));
      const logVals = vals.map((v) => Math.log10(v + 1));
      const maxLog = Math.max(...logVals, 1e-9);
      rowEls.forEach((el, i) => {
        const pct = (logVals[i] / maxLog) * 100;
        el.fill.style.width = `${pct}%`;
        el.valOut.textContent = fmt(vals[i]);
      });
    }

    slider.addEventListener("input", update);
    mqReduceMotion.addEventListener("change", () => {
      rowEls.forEach((el) => {
        el.fill.style.transition = motionOk() ? "width 0.35s ease" : "none";
      });
    });
    body.appendChild(controls);
    body.appendChild(chart);
    update();
  }

  function binarySearchTrace(arr, target) {
    const steps = [];
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const val = arr[mid];
      const cmp = target === val ? 0 : target > val ? 1 : -1;
      steps.push({ low, high, mid, val, cmp });
      if (cmp === 0) return { steps, found: true, index: mid };
      if (cmp > 0) low = mid + 1;
      else high = mid - 1;
    }
    return { steps, found: false, index: -1 };
  }

  function mountBinarySearchDemo(container) {
    const arr = [3, 9, 14, 22, 31, 42, 58, 71, 88, 95];
    const { wrap, body } = widgetFrame(
      "Binary search steps",
      "Sorted array. Each step compares the middle index (⌊(low+high)/2⌋ in this demo) and eliminates half of the range. Requires random-access storage for O(log n) stepping (linked lists lack that). In fixed-width languages, compute mid as low + ((high - low) >> 1) to avoid overflow."
    );
    container.appendChild(wrap);

    let trace = binarySearchTrace(arr, 42);
    let stepIx = -1;

    const controls = document.createElement("div");
    controls.className = "interactive-controls interactive-controls-row";
    const tgtLab = document.createElement("label");
    tgtLab.className = "interactive-field";
    const tgtSpan = document.createElement("span");
    tgtSpan.textContent = "Target";
    const select = document.createElement("select");
    select.setAttribute("aria-label", "Search target value");
    [...arr, 50].sort((a, b) => a - b).forEach((v) => {
      const o = document.createElement("option");
      o.value = String(v);
      o.textContent = String(v);
      if (v === 42) o.selected = true;
      select.appendChild(o);
    });
    tgtLab.appendChild(tgtSpan);
    tgtLab.appendChild(select);

    const btnRow = document.createElement("div");
    btnRow.className = "interactive-btn-row";
    const stepBtn = document.createElement("button");
    stepBtn.type = "button";
    stepBtn.className = "interactive-btn";
    stepBtn.textContent = "Step";
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "interactive-btn interactive-btn-ghost";
    resetBtn.textContent = "Reset";
    btnRow.appendChild(stepBtn);
    btnRow.appendChild(resetBtn);
    controls.appendChild(tgtLab);
    controls.appendChild(btnRow);

    const cellsWrap = document.createElement("div");
    cellsWrap.className = "bs-cells";
    const cells = arr.map((v, i) => {
      const cell = document.createElement("div");
      cell.className = "bs-cell";
      cell.dataset.index = String(i);
      const idx = document.createElement("span");
      idx.className = "bs-index";
      idx.textContent = String(i);
      const num = document.createElement("span");
      num.className = "bs-num";
      num.textContent = String(v);
      cell.appendChild(idx);
      cell.appendChild(num);
      cellsWrap.appendChild(cell);
      return cell;
    });

    const note = document.createElement("p");
    note.className = "interactive-note";
    note.setAttribute("aria-live", "polite");

    function paint() {
      cells.forEach((c) => {
        c.classList.remove("bs-low", "bs-high", "bs-mid", "bs-out");
      });
      const target = Number(select.value);
      if (stepIx < 0) {
        note.textContent =
          "Press Step to walk through comparisons. Invariant: if the target exists in the array, its index always stays inside the closed interval [low, high].";
        return;
      }
      if (stepIx >= trace.steps.length) {
        if (trace.found) {
          note.textContent = `Finished: found ${target} at index ${trace.index}. Binary search used ${trace.steps.length} step(s) for this outcome.`;
          cells[trace.index]?.classList.add("bs-mid");
        } else {
          note.textContent = `Finished: ${target} is not in the array (${trace.steps.length} comparison step(s)).`;
        }
        return;
      }
      const st = trace.steps[stepIx];
      const { low, high, mid } = st;
      note.textContent = `Step ${stepIx + 1} of ${trace.steps.length}: low=${low}, high=${high}, mid=${mid}. Compare arr[${mid}]=${st.val} with target ${target}. ${
        st.cmp === 0 ? "Equal — stop." : st.cmp > 0 ? "Target is larger — discard the left half (indices ≤ mid)." : "Target is smaller — discard the right half (indices ≥ mid)."
      }`;
      for (let i = 0; i < arr.length; i += 1) {
        const cell = cells[i];
        if (i < low || i > high) cell.classList.add("bs-out");
        if (i === low) cell.classList.add("bs-low");
        if (i === high) cell.classList.add("bs-high");
        if (i === mid) cell.classList.add("bs-mid");
      }
    }

    function rebuildTrace() {
      trace = binarySearchTrace(arr, Number(select.value));
      stepIx = -1;
      paint();
    }

    stepBtn.addEventListener("click", () => {
      if (stepIx < trace.steps.length) stepIx += 1;
      paint();
    });
    resetBtn.addEventListener("click", rebuildTrace);
    select.addEventListener("change", rebuildTrace);

    body.appendChild(controls);
    body.appendChild(cellsWrap);
    body.appendChild(note);
    rebuildTrace();
  }

  function mountByteBuilder(container) {
    const { wrap, body } = widgetFrame(
      "Eight bits → unsigned value",
      "Toggle bits left-to-right from most significant (2⁷) to least (2⁰). This models fixed-width unsigned interpretation—real formats add sign, endianness, and padding rules."
    );
    container.appendChild(wrap);

    const bits = document.createElement("div");
    bits.className = "byte-bits";
    const toggles = [];
    for (let i = 0; i < 8; i += 1) {
      const pos = 7 - i;
      const row = document.createElement("button");
      row.type = "button";
      row.className = "bit-cell";
      row.setAttribute("aria-pressed", "false");
      row.setAttribute("aria-label", `Bit ${pos}, weight 2^${pos}`);
      const w = document.createElement("span");
      w.className = "bit-weight";
      w.textContent = `2^${pos}`;
      const v = document.createElement("span");
      v.className = "bit-val";
      v.textContent = "0";
      row.appendChild(w);
      row.appendChild(v);
      row.dataset.on = "0";
      row.addEventListener("click", () => {
        const on = row.dataset.on === "1" ? "0" : "1";
        row.dataset.on = on;
        row.setAttribute("aria-pressed", on === "1" ? "true" : "false");
        v.textContent = on;
        row.classList.toggle("bit-on", on === "1");
        updateSum();
      });
      bits.appendChild(row);
      toggles.push(row);
    }

    const out = document.createElement("output");
    out.className = "byte-sum";
    out.setAttribute("aria-live", "polite");

    function updateSum() {
      let s = 0;
      toggles.forEach((btn, i) => {
        const pos = 7 - i;
        if (btn.dataset.on === "1") s += 2 ** pos;
      });
      out.textContent = `Unsigned value = ${s}`;
    }

    body.appendChild(bits);
    body.appendChild(out);
    updateSum();
  }

  function mountStackQueue(container) {
    const { wrap, body } = widgetFrame(
      "Stack vs queue",
      "Stack: last-in, first-out (LIFO). Queue: first-in, first-out (FIFO). Both restrict where insert/remove happen—that discipline drives correctness."
    );
    container.appendChild(wrap);

    const modeRow = document.createElement("div");
    modeRow.className = "interactive-mode-toggle";
    const stackBtn = document.createElement("button");
    stackBtn.type = "button";
    stackBtn.className = "interactive-btn interactive-btn-active";
    stackBtn.textContent = "Stack (LIFO)";
    const queueBtn = document.createElement("button");
    queueBtn.type = "button";
    queueBtn.className = "interactive-btn interactive-btn-ghost";
    queueBtn.textContent = "Queue (FIFO)";
    modeRow.appendChild(stackBtn);
    modeRow.appendChild(queueBtn);

    const controls = document.createElement("div");
    controls.className = "interactive-btn-row";
    const pushBtn = document.createElement("button");
    pushBtn.type = "button";
    pushBtn.className = "interactive-btn";
    pushBtn.textContent = "Enqueue / Push";
    const popBtn = document.createElement("button");
    popBtn.type = "button";
    popBtn.className = "interactive-btn interactive-btn-ghost";
    popBtn.textContent = "Remove";
    controls.appendChild(pushBtn);
    controls.appendChild(popBtn);

    const visual = document.createElement("div");
    visual.className = "sq-visual";
    visual.setAttribute("aria-label", "Structure contents bottom to top");

    let mode = "stack";
    const items = [];
    let nextLabel = 0;
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function renderVisual() {
      visual.innerHTML = "";
      items.forEach((ch, idx) => {
        const el = document.createElement("div");
        el.className = "sq-item";
        el.textContent = ch;
        el.style.transition = motionOk() ? "transform 0.28s ease, opacity 0.28s ease" : "none";
        if (idx === items.length - 1) el.classList.add("sq-item-top");
        visual.appendChild(el);
      });
      const cap = document.createElement("div");
      cap.className = "sq-cap";
      cap.textContent =
        mode === "stack"
          ? "Top — push and pop on this end"
          : "Bottom = queue front (dequeue). Top = back (enqueue).";
      visual.appendChild(cap);
    }

    function refreshPushPopLabels() {
      if (mode === "stack") {
        pushBtn.textContent = "Push";
        popBtn.textContent = "Pop";
      } else {
        pushBtn.textContent = "Enqueue (back)";
        popBtn.textContent = "Dequeue (front)";
      }
    }

    function setMode(m) {
      mode = m;
      stackBtn.classList.toggle("interactive-btn-active", m === "stack");
      queueBtn.classList.toggle("interactive-btn-active", m === "queue");
      stackBtn.classList.toggle("interactive-btn-ghost", m !== "stack");
      queueBtn.classList.toggle("interactive-btn-ghost", m !== "queue");
      items.length = 0;
      nextLabel = 0;
      refreshPushPopLabels();
      renderVisual();
    }

    pushBtn.addEventListener("click", () => {
      if (items.length >= 10) return;
      const ch = labels[nextLabel % labels.length];
      nextLabel += 1;
      if (mode === "stack") items.push(ch);
      else items.push(ch);
      renderVisual();
    });

    popBtn.addEventListener("click", () => {
      if (items.length === 0) return;
      if (mode === "stack") items.pop();
      else items.shift();
      renderVisual();
    });

    stackBtn.addEventListener("click", () => setMode("stack"));
    queueBtn.addEventListener("click", () => setMode("queue"));

    body.appendChild(modeRow);
    body.appendChild(controls);
    body.appendChild(visual);
    setMode("stack");
  }

  function mountFetchCycle(container) {
    const { wrap, body } = widgetFrame(
      "Fetch–decode–execute loop",
      "Simplified CPU cycle: instructions live in memory; the processor repeats fetch, decode, execute (and typically write-back). Real cores pipeline and reorder, but the mental model starts here."
    );
    container.appendChild(wrap);

    const steps = [
      { key: "fetch", label: "Fetch", detail: "Load next instruction pointer and read instruction bytes from memory." },
      { key: "decode", label: "Decode", detail: "Determine opcode and operands (registers, immediates, addresses)." },
      { key: "exec", label: "Execute", detail: "Run the operation in functional units (ALU, branch, memory access)." },
      { key: "write", label: "Write-back", detail: "Store results to registers or memory so architected state updates." }
    ];
    let ix = 0;
    const ring = document.createElement("div");
    ring.className = "fde-ring";

    const nodes = steps.map((s, i) => {
      const n = document.createElement("button");
      n.type = "button";
      n.className = "fde-node";
      n.textContent = s.label;
      n.setAttribute("aria-label", `${s.label}: ${s.detail}`);
      n.addEventListener("click", () => {
        ix = i;
        paint();
      });
      ring.appendChild(n);
      return n;
    });

    const detail = document.createElement("p");
    detail.className = "interactive-note fde-detail";
    detail.setAttribute("aria-live", "polite");

    const autoBtn = document.createElement("button");
    autoBtn.type = "button";
    autoBtn.className = "interactive-btn interactive-btn-ghost";
    autoBtn.textContent = "Animate cycle";
    let timer = null;

    function paint() {
      nodes.forEach((n, j) => n.classList.toggle("fde-active", j === ix));
      detail.textContent = steps[ix].detail;
    }

    function stopAuto() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    autoBtn.addEventListener("click", () => {
      if (timer) {
        stopAuto();
        autoBtn.textContent = "Animate cycle";
        return;
      }
      autoBtn.textContent = "Stop";
      const ms = motionOk() ? 900 : 0;
      if (!ms) {
        ix = (ix + 1) % steps.length;
        paint();
        autoBtn.textContent = "Animate cycle";
        return;
      }
      timer = setInterval(() => {
        ix = (ix + 1) % steps.length;
        paint();
      }, ms);
    });

    mqReduceMotion.addEventListener("change", () => {
      if (!motionOk()) stopAuto();
    });

    paint();
    body.appendChild(ring);
    body.appendChild(detail);
    body.appendChild(autoBtn);
  }

  function mountXorDemo(container) {
    const { wrap, body } = widgetFrame(
      "XOR truth table (single bits)",
      "Output is 1 when inputs differ. Used as a building block in stream-like constructions and parity tricks—not a complete cipher by itself."
    );
    container.appendChild(wrap);

    let a = 0;
    let b = 0;
    const btns = document.createElement("div");
    btns.className = "xor-bits-row";

    function mkToggle(label, get, set) {
      const lab = document.createElement("div");
      lab.className = "xor-toggle-wrap";
      const span = document.createElement("span");
      span.className = "xor-toggle-label";
      span.textContent = label;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "xor-bit-btn";
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = "0";
      btn.addEventListener("click", () => {
        set(get() === 1 ? 0 : 1);
        btn.textContent = String(get());
        btn.setAttribute("aria-pressed", get() === 1 ? "true" : "false");
        btn.classList.toggle("xor-bit-on", get() === 1);
        sync();
      });
      lab.appendChild(span);
      lab.appendChild(btn);
      return lab;
    }

    const out = document.createElement("output");
    out.className = "xor-out";
    out.setAttribute("aria-live", "polite");

    const tbl = document.createElement("table");
    tbl.className = "xor-table";
    tbl.innerHTML =
      "<caption>XOR truth table</caption><thead><tr><th>A</th><th>B</th><th>A ⊕ B</th></tr></thead><tbody></tbody>";
    const tbody = tbl.querySelector("tbody");
    [
      [0, 0, 0],
      [0, 1, 1],
      [1, 0, 1],
      [1, 1, 0]
    ].forEach(([x, y, z]) => {
      const tr = document.createElement("tr");
      tr.dataset.a = String(x);
      tr.dataset.b = String(y);
      tr.innerHTML = `<td>${x}</td><td>${y}</td><td>${z}</td>`;
      tbody.appendChild(tr);
    });

    function sync() {
      const z = a ^ b;
      out.textContent = `${a} ⊕ ${b} = ${z}`;
      tbody.querySelectorAll("tr").forEach((tr) => {
        tr.classList.toggle("xor-row-live", Number(tr.dataset.a) === a && Number(tr.dataset.b) === b);
      });
    }

    btns.appendChild(
      mkToggle(
        "Bit A",
        () => a,
        (v) => {
          a = v;
        }
      )
    );
    btns.appendChild(
      mkToggle(
        "Bit B",
        () => b,
        (v) => {
          b = v;
        }
      )
    );

    body.appendChild(btns);
    body.appendChild(out);
    body.appendChild(tbl);
    sync();
  }

  function mountParityDFA(container) {
    const { wrap, body } = widgetFrame(
      "Two-state parity automaton",
      "Scan bits left to right; flip state on each 1. After each step you are in an accept state iff the number of 1s read so far is even—a standard regular-language classroom example (your textbook formalizes acceptance on full strings)."
    );
    container.appendChild(wrap);

    let state = 0;
    let tape = "";
    const tapeEl = document.createElement("div");
    tapeEl.className = "parity-tape";
    const stateEl = document.createElement("output");
    stateEl.className = "parity-state";
    stateEl.setAttribute("aria-live", "polite");

    function sync() {
      tapeEl.textContent = tape.length ? [...tape].join(" ") : "—";
      stateEl.textContent =
        state === 0 ? "State: EVEN — accepting prefix for {even number of 1s}" : "State: ODD — rejecting prefix";
    }

    function readBit(b) {
      tape += String(b);
      if (b === 1) state = 1 - state;
      sync();
    }

    const row = document.createElement("div");
    row.className = "interactive-btn-row";
    [0, 1].forEach((b) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "interactive-btn interactive-btn-ghost";
      btn.textContent = `Read ${b}`;
      btn.addEventListener("click", () => readBit(b));
      row.appendChild(btn);
    });
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "interactive-btn";
    resetBtn.textContent = "Reset";
    resetBtn.addEventListener("click", () => {
      tape = "";
      state = 0;
      sync();
    });
    row.appendChild(resetBtn);

    body.appendChild(row);
    body.appendChild(tapeEl);
    body.appendChild(stateEl);
    sync();
  }

  function mountRoundRobin(container) {
    const quantum = 2;
    const names = ["P1", "P2", "P3"];
    const { wrap, body } = widgetFrame(
      "Round-robin CPU scheduling (toy)",
      `Quantum q = ${quantum} time units. Each runnable job runs up to q, then joins the back of the ready queue—classic introductory preemptive fairness (real OS schedulers add priorities, affinity, and kernel threads).`
    );
    container.appendChild(wrap);

    let rem = [5, 3, 4];
    let queue = [0, 1, 2];
    const remRow = document.createElement("div");
    remRow.className = "rr-rem";
    const queueEl = document.createElement("div");
    queueEl.className = "rr-queue";
    const logEl = document.createElement("ol");
    logEl.className = "rr-log";
    logEl.setAttribute("aria-label", "Schedule trace");

    function paintStatic() {
      remRow.textContent = `Remaining bursts — ${names.map((n, i) => `${n}:${rem[i]}`).join(", ")}`;
      queueEl.textContent = `Ready queue (head → tail): ${queue.map((i) => names[i]).join(", ") || "(idle)"}`;
    }

    function ensureQueue() {
      if (queue.length === 0 && rem.some((r) => r > 0)) {
        queue = rem.map((r, i) => (r > 0 ? i : -1)).filter((i) => i >= 0);
      }
    }

    function stepOnce() {
      ensureQueue();
      while (queue.length > 0 && rem[queue[0]] <= 0) queue.shift();
      ensureQueue();
      if (queue.length === 0) return false;
      const i = queue.shift();
      if (rem[i] <= 0) return stepOnce();
      const slice = Math.min(quantum, rem[i]);
      rem[i] -= slice;
      const li = document.createElement("li");
      li.textContent = `${names[i]} runs ${slice} (remaining ${rem[i]})`;
      logEl.appendChild(li);
      if (rem[i] > 0) queue.push(i);
      paintStatic();
      return true;
    }

    const btnRow = document.createElement("div");
    btnRow.className = "interactive-btn-row";
    const stepBtn = document.createElement("button");
    stepBtn.type = "button";
    stepBtn.className = "interactive-btn";
    stepBtn.textContent = "Step once";
    stepBtn.addEventListener("click", () => {
      if (!stepOnce()) stepBtn.disabled = true;
    });
    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "interactive-btn interactive-btn-ghost";
    resetBtn.textContent = "Reset demo";
    resetBtn.addEventListener("click", () => {
      rem = [5, 3, 4];
      queue = [0, 1, 2];
      logEl.innerHTML = "";
      stepBtn.disabled = false;
      paintStatic();
    });
    btnRow.appendChild(stepBtn);
    btnRow.appendChild(resetBtn);

    body.appendChild(btnRow);
    body.appendChild(remRow);
    body.appendChild(queueEl);
    body.appendChild(logEl);
    paintStatic();
  }

  function mountClassificationMetrics(container) {
    const { wrap, body } = widgetFrame(
      "Binary confusion-matrix metrics",
      "Precision = TP/(TP+FP). Recall (TPR) = TP/(TP+FN). Specificity (TNR) = TN/(TN+FP). F1 is the harmonic mean of precision and recall when both defined."
    );
    container.appendChild(wrap);

    const grid = document.createElement("div");
    grid.className = "cm-grid";
    const defaults = { tp: 42, fp: 8, fn: 18, tn: 132 };
    const inputs = {};
    Object.entries(defaults).forEach(([key, val]) => {
      const lab = document.createElement("label");
      lab.className = "cm-field";
      const span = document.createElement("span");
      span.textContent = key.toUpperCase();
      const inp = document.createElement("input");
      inp.type = "number";
      inp.min = "0";
      inp.max = "10000";
      inp.step = "1";
      inp.value = String(val);
      inp.setAttribute("aria-label", key);
      inputs[key] = inp;
      lab.appendChild(span);
      lab.appendChild(inp);
      grid.appendChild(lab);
    });

    const out = document.createElement("output");
    out.className = "cm-out";
    out.setAttribute("aria-live", "polite");

    function fmt(x) {
      if (x === null || Number.isNaN(x)) return "—";
      return (Math.round(x * 10000) / 10000).toFixed(4);
    }

    function sync() {
      const tp = Math.max(0, Number(inputs.tp.value) || 0);
      const fp = Math.max(0, Number(inputs.fp.value) || 0);
      const fn = Math.max(0, Number(inputs.fn.value) || 0);
      const tn = Math.max(0, Number(inputs.tn.value) || 0);
      const pDenom = tp + fp;
      const rDenom = tp + fn;
      const sDenom = tn + fp;
      const prec = pDenom ? tp / pDenom : null;
      const rec = rDenom ? tp / rDenom : null;
      const spec = sDenom ? tn / sDenom : null;
      const f1 = prec !== null && rec !== null && prec + rec > 0 ? (2 * prec * rec) / (prec + rec) : null;
      out.innerHTML = "";
      [`Precision = ${fmt(prec)}`, `Recall (TPR) = ${fmt(rec)}`, `Specificity (TNR) = ${fmt(spec)}`, `F1 = ${fmt(f1)}`].forEach((line) => {
        const p = document.createElement("p");
        p.textContent = line;
        out.appendChild(p);
      });
    }

    Object.values(inputs).forEach((inp) => inp.addEventListener("input", sync));
    body.appendChild(grid);
    body.appendChild(out);
    sync();
  }

  function mountTransactionAtomicity(container) {
    const { wrap, body } = widgetFrame(
      "Atomic transfer (two-account toy)",
      "Shows atomicity: either both balance updates become committed together or neither does—here preserving total funds across A and B. Real databases add isolation levels, durability logs, and crash recovery; this is only the intuition."
    );
    container.appendChild(wrap);

    let committed = { a: 100, b: 50 };
    let draft = null;

    const committedEl = document.createElement("div");
    committedEl.className = "tx-strip tx-committed";
    const draftEl = document.createElement("div");
    draftEl.className = "tx-strip tx-draft-strip";
    const msg = document.createElement("p");
    msg.className = "interactive-note";

    function sum(x) {
      return x.a + x.b;
    }

    function paint() {
      committedEl.innerHTML = `<span><strong>Committed</strong></span> <span>A = ${committed.a}</span> <span>B = ${committed.b}</span> <span class="tx-sum">sum ${sum(committed)}</span>`;
      if (draft) {
        draftEl.hidden = false;
        draftEl.innerHTML = `<span><strong>In transaction</strong></span> <span>A = ${draft.a}</span> <span>B = ${draft.b}</span> <span class="tx-sum">sum ${sum(draft)}</span>`;
      } else {
        draftEl.hidden = true;
      }
    }

    function log(text) {
      msg.textContent = text;
    }

    const row = document.createElement("div");
    row.className = "interactive-btn-row interactive-btn-row-wrap";

    const beginBtn = document.createElement("button");
    beginBtn.type = "button";
    beginBtn.className = "interactive-btn interactive-btn-ghost";
    beginBtn.textContent = "BEGIN";
    beginBtn.addEventListener("click", () => {
      if (draft) return;
      draft = { ...committed };
      log("Transaction open — committed balances unchanged until COMMIT.");
      paint();
      syncDisabled();
    });

    const transferBtn = document.createElement("button");
    transferBtn.type = "button";
    transferBtn.className = "interactive-btn interactive-btn-ghost";
    transferBtn.textContent = "Transfer 10 (A → B)";
    transferBtn.addEventListener("click", () => {
      if (!draft) return;
      if (draft.a < 10) {
        log("Insufficient funds in A for this transfer inside the transaction.");
        return;
      }
      draft.a -= 10;
      draft.b += 10;
      log("Moved 10 inside the transaction (not visible to committed state yet).");
      paint();
    });

    const commitBtn = document.createElement("button");
    commitBtn.type = "button";
    commitBtn.className = "interactive-btn";
    commitBtn.textContent = "COMMIT";
    commitBtn.addEventListener("click", () => {
      if (!draft) return;
      committed = { ...draft };
      draft = null;
      log("Committed — updates are durable in this toy model.");
      paint();
      syncDisabled();
    });

    const abortBtn = document.createElement("button");
    abortBtn.type = "button";
    abortBtn.className = "interactive-btn interactive-btn-ghost";
    abortBtn.textContent = "ROLLBACK";
    abortBtn.addEventListener("click", () => {
      if (!draft) return;
      draft = null;
      log("Rolled back — pending updates discarded; committed balances unchanged.");
      paint();
      syncDisabled();
    });

    function syncDisabled() {
      beginBtn.disabled = Boolean(draft);
      transferBtn.disabled = !draft;
      commitBtn.disabled = !draft;
      abortBtn.disabled = !draft;
    }

    row.append(beginBtn, transferBtn, commitBtn, abortBtn);
    body.appendChild(row);
    body.appendChild(committedEl);
    body.appendChild(draftEl);
    body.appendChild(msg);
    log("Open a transaction, move funds, then COMMIT or ROLLBACK.");
    paint();
    syncDisabled();
  }

  function mountLogicImplication(container) {
    const { wrap, body } = widgetFrame(
      "Material implication (P → Q)",
      "Propositional logic defines P → Q as ¬P ∨ Q: it is false only when P is true and Q is false. Match each row when studying proofs—everyday English ‘if’ is narrower, so translate deliberately."
    );
    container.appendChild(wrap);

    let P = false;
    let Q = false;

    function implies(p, q) {
      return !p || q;
    }

    function toggleRow(label, get, set) {
      const wrapBtn = document.createElement("div");
      wrapBtn.className = "logic-toggle-row";
      const span = document.createElement("span");
      span.textContent = label;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "interactive-btn interactive-btn-ghost logic-lit-btn";
      btn.textContent = get() ? "T" : "F";
      btn.setAttribute("aria-pressed", get() ? "true" : "false");
      btn.addEventListener("click", () => {
        set(!get());
        btn.textContent = get() ? "T" : "F";
        btn.setAttribute("aria-pressed", get() ? "true" : "false");
        btn.classList.toggle("logic-lit-true", get());
        sync();
      });
      btn.classList.toggle("logic-lit-true", get());
      wrapBtn.append(span, btn);
      return wrapBtn;
    }

    const toggles = document.createElement("div");
    toggles.className = "logic-toggle-grid";
    toggles.appendChild(
      toggleRow(
        "P",
        () => P,
        (v) => {
          P = v;
        }
      )
    );
    toggles.appendChild(
      toggleRow(
        "Q",
        () => Q,
        (v) => {
          Q = v;
        }
      )
    );

    const out = document.createElement("output");
    out.className = "logic-implication-out";
    out.setAttribute("aria-live", "polite");

    const tbl = document.createElement("table");
    tbl.className = "truth-table";
    tbl.innerHTML =
      "<caption>Truth table for →</caption><thead><tr><th>P</th><th>Q</th><th>P → Q</th></tr></thead><tbody></tbody>";
    const tbody = tbl.querySelector("tbody");
    const combos = [
      [false, false],
      [false, true],
      [true, false],
      [true, true]
    ];
    const rows = [];
    combos.forEach(([p, q]) => {
      const tr = document.createElement("tr");
      const impl = implies(p, q);
      tr.innerHTML = `<td>${p ? "T" : "F"}</td><td>${q ? "T" : "F"}</td><td>${impl ? "T" : "F"}</td>`;
      tbody.appendChild(tr);
      rows.push({ tr, p, q });
    });

    function sync() {
      const val = implies(P, Q);
      out.textContent = `Current row: P is ${P ? "true" : "false"}, Q is ${Q ? "true" : "false"} ⇒ P → Q is ${val ? "true" : "false"}.`;
      rows.forEach(({ tr, p, q }) => {
        tr.classList.toggle("truth-active", p === P && q === Q);
      });
    }

    body.appendChild(toggles);
    body.appendChild(out);
    body.appendChild(tbl);
    sync();
  }

  function mountLayerAccordion(container, title, description, layers) {
    const { wrap, body } = widgetFrame(title, description);
    container.appendChild(wrap);

    layers.forEach((L, i) => {
      const acc = document.createElement("div");
      acc.className = "layer-acc";
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "layer-acc-btn";
      btn.setAttribute("aria-expanded", i === 0 ? "true" : "false");
      btn.innerHTML = `<span class="layer-num">${i + 1}</span><span class="layer-title">${L.title}</span>`;
      const panel = document.createElement("div");
      panel.className = "layer-acc-panel";
      panel.hidden = i !== 0;
      const p = document.createElement("p");
      p.textContent = L.text;
      panel.appendChild(p);

      btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", open ? "false" : "true");
        panel.hidden = open;
      });

      acc.appendChild(btn);
      acc.appendChild(panel);
      body.appendChild(acc);
    });
  }

  function mountProtocolLayers(container) {
    mountLayerAccordion(
      container,
      "Internet layering",
      "Each layer provides services to the layer above and uses services below. Troubleshooting often asks which layer first violates expectations.",
      [
        { title: "Application", text: "HTTP, SMTP, DNS messages — meaning for users and programs." },
        { title: "Transport", text: "TCP segments / UDP datagrams — multiplexing ports, optional reliability and ordering." },
        { title: "Internet", text: "IP packets — host-to-host delivery with routing; generally best-effort." },
        { title: "Link", text: "Ethernet frames / Wi-Fi MAC — hop-by-hop on one link segment." }
      ]
    );
  }

  function mountMemoryHierarchy(container) {
    mountLayerAccordion(
      container,
      "Memory hierarchy intuition",
      "Ordering is qualitative—numbers vary enormously by chip, firmware, and workload. Still, predictable locality wins until you miss outward toward DRAM or storage.",
      [
        {
          title: "Registers & rename buffers",
          text: "Handfuls of operands named per instruction window; essentially CPU-local scratch space refreshed every cycle."
        },
        {
          title: "Caches (L1–L3)",
          text: "Hide DRAM latency using locality; misses stall the pipeline and dominate performance when access patterns are irregular."
        },
        {
          title: "Main memory (DRAM)",
          text: "Volatile workspace measured in gigabytes; operating systems page cold regions to disk when RAM pressure rises."
        },
        {
          title: "Local SSD / NVMe",
          text: "Persistent blocks with access patterns dominated by queues and firmware—often far slower than RAM but faster than spinning disks."
        },
        {
          title: "Network & remote services",
          text: "Cross-machine round trips routinely overshadow naive synchronous arithmetic assumptions—latency motivates caching, batching, queues, and async APIs."
        }
      ]
    );
  }

  const builders = {
    growthCompare: mountGrowthCompare,
    binarySearchDemo: mountBinarySearchDemo,
    byteBuilder: mountByteBuilder,
    stackQueue: mountStackQueue,
    fetchCycle: mountFetchCycle,
    xorDemo: mountXorDemo,
    parityDFA: mountParityDFA,
    roundRobin: mountRoundRobin,
    classificationMetrics: mountClassificationMetrics,
    transactionAtomicity: mountTransactionAtomicity,
    logicImplication: mountLogicImplication,
    memoryHierarchy: mountMemoryHierarchy,
    protocolLayers: mountProtocolLayers
  };

  window.mergeChapterInteractives = function mergeChapterInteractives(chapters) {
    const src = window.CHAPTER_INTERACTIVES || {};
    chapters.forEach((ch) => {
      if (src[ch.id]?.length) ch.interactives = src[ch.id];
    });
  };

  window.mountChapterInteractives = function mountChapterInteractives(chapter, slot) {
    if (!chapter.interactives?.length || !slot) return;
    slot.classList.add("interactives-slot");
    const heading = document.createElement("h3");
    heading.className = "interactives-band-title";
    heading.textContent = "Interactive demos";
    slot.appendChild(heading);
    chapter.interactives.forEach((cfg) => {
      const fn = builders[cfg.type];
      if (!fn) return;
      fn(slot);
    });
  };
})();

window.CHAPTER_INTERACTIVES = {
  data: [{ type: "byteBuilder" }],
  algorithms: [{ type: "growthCompare" }, { type: "binarySearchDemo" }],
  structures: [{ type: "stackQueue" }],
  architecture: [{ type: "fetchCycle" }, { type: "memoryHierarchy" }],
  os: [{ type: "roundRobin" }],
  networks: [{ type: "protocolLayers" }],
  security: [{ type: "xorDemo" }],
  ai: [{ type: "classificationMetrics" }],
  theory: [{ type: "parityDFA" }],
  databases: [{ type: "transactionAtomicity" }],
  "logic-proof": [{ type: "logicImplication" }]
};
