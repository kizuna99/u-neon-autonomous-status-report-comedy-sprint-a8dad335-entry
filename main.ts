// SPDX-License-Identifier: MIT
// Status Report Comedy Sprint — make.fun entry.
// Writes exactly one line (the status report line plus a trailing newline)
// to the output file. The joke: the task took four minutes on Monday; the
// rest of the week went to verifying it 19 times, delegating the re-checks
// to subagents, and writing this report — which is now the biggest
// deliverable of the week. The line is 174 characters, inside the
// 1–200 character gate, and is written verbatim every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Status: Finished the task Monday in four minutes, then spent the week verifying it 19 times and delegating re-checks to subagents — this report is now my biggest deliverable.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
