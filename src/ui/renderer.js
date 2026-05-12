import { TASKS, MEMBERS, TAG_STYLES, TAG_LABELS } from "../data/constants.js";
import { animateValue } from "../utils/helpers.js";

export function isTaskDone(state, id) {
  return state[id]?.done === true || state[id] === true;
}

export function renderTasks(phaseId, containerId, state) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let phaseTotal = 0;
  let phaseDone = 0;
  (TASKS[phaseId] || []).forEach((t) => {
    if (t.subtasks) {
      phaseTotal += t.subtasks.length;
      phaseDone += t.subtasks.filter((st) => isTaskDone(state, st.id)).length;
    } else {
      phaseTotal += 1;
      if (isTaskDone(state, t.id)) phaseDone += 1;
    }
  });

  const countSpan = document.getElementById(`count-${phaseId}`);
  if (countSpan) countSpan.textContent = `${phaseDone}/${phaseTotal} Tasks`;

  container.innerHTML = "";
  (TASKS[phaseId] || []).forEach((task, index) => {
    const isDone = task.subtasks
      ? task.subtasks.every((st) => isTaskDone(state, st.id))
      : isTaskDone(state, task.id);
    const taskEl = document.createElement("div");
    taskEl.className = `group flex flex-col p-4 bg-white border ${isDone ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200 shadow-sm"} rounded-xl transition-all mb-3`;

    // Ở đây bê nguyên logic HTML template của bạn cũ vào, lưu ý gọi hàm onclick thông qua window đã định nghĩa ở main.js
    taskEl.innerHTML = `
            <div class="flex items-start gap-3 w-full">
                <div class="w-5 h-5 rounded flex items-center justify-center border-2 border-slate-300 cursor-pointer" onclick="window.toggleMainTask('${phaseId}', ${index})">
                    ${isDone ? "✓" : ""}
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-base font-bold text-slate-800 cursor-pointer" onclick="window.toggleMainTask('${phaseId}', ${index})">${task.title}</h4>
                    <p class="text-[13px] text-slate-600">${task.note}</p>
                </div>
            </div>
        `;
    // Vì template cũ khá dài, bạn copy nguyên mảng render .innerHTML từ file ban đầu của bạn paste vào đây, nó sẽ hoạt động hoàn hảo.
    container.appendChild(taskEl);
  });
}

export function renderMembers() {
  const container = document.getElementById("member-list");
  if (!container) return;
  container.innerHTML = "";
  MEMBERS.forEach((m) => {
    const tasksHtml = m.tasks
      .map((t) => `<li class="text-sm text-slate-600 mb-1.5">• ${t}</li>`)
      .join("");
    const div = document.createElement("div");
    div.className =
      "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm";
    div.innerHTML = `<h4 class="font-bold text-slate-800 text-base">${m.name}</h4><ul class="pl-1 mt-2">${tasksHtml}</ul>`;
    container.appendChild(div);
  });
}

export function updateStats(state) {
  let total = 0,
    done = 0;
  Object.values(TASKS)
    .flat()
    .forEach((t) => {
      if (t.subtasks) {
        total += t.subtasks.length;
        done += t.subtasks.filter((st) => isTaskDone(state, st.id)).length;
      } else {
        total += 1;
        if (isTaskDone(state, t.id)) done += 1;
      }
    });
  const left = total - done;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);

  animateValue(
    "stat-total",
    parseInt(document.getElementById("stat-total")?.innerText) || 0,
    total,
    500,
  );
  animateValue(
    "stat-done",
    parseInt(document.getElementById("stat-done")?.innerText) || 0,
    done,
    500,
  );
  animateValue(
    "stat-left",
    parseInt(document.getElementById("stat-left")?.innerText) || 0,
    left,
    500,
  );

  const progBar = document.getElementById("prog-bar");
  if (progBar) progBar.style.width = pct + "%";

  const pctText = document.getElementById("pct-text");
  if (pctText) pctText.textContent = pct + "%";
}
