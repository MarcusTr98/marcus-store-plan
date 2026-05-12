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
    const hasSubtasks = task.subtasks && task.subtasks.length > 0;
    const isDone = hasSubtasks
      ? task.subtasks.every((st) => isTaskDone(state, st.id))
      : isTaskDone(state, task.id);

    const taskEl = document.createElement("div");
    taskEl.className = `group flex flex-col p-4 bg-white border ${isDone ? "border-emerald-200 bg-emerald-50/20" : "border-slate-200 shadow-sm"} rounded-xl transition-all mb-3`;

    const checkHtml = isDone
      ? `<div class="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-emerald-500 border border-emerald-500 text-white shadow-sm cursor-pointer" onclick="window.toggleMainTask('${phaseId}', ${index})"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div>`
      : `<div class="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 border-2 border-slate-300 hover:border-indigo-400 bg-white cursor-pointer transition-colors" onclick="window.toggleMainTask('${phaseId}', ${index})"></div>`;

    const tagsHtml = task.tags
      .map((tag) => {
        const style = TAG_STYLES[tag] || TAG_STYLES["all"];
        return `<span class="px-2 py-0.5 rounded-md text-[11px] font-medium border ${style}">${TAG_LABELS[tag] || tag}</span>`;
      })
      .join("");

    let subtasksHtml = "";
    if (hasSubtasks) {
      const progressVal = Math.round(
        (task.subtasks.filter((st) => isTaskDone(state, st.id)).length /
          task.subtasks.length) *
          100,
      );
      subtasksHtml = `
                <div class="mt-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div class="flex items-center justify-between mb-3 border-b border-slate-200/60 pb-2">
                        <span class="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg> To-do list chi tiết</span>
                        <span class="text-[11px] font-bold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-md border border-indigo-200">${progressVal}%</span>
                    </div>
                    <div class="space-y-1.5">
                        ${task.subtasks
                          .map((st) => {
                            const isStDone = isTaskDone(state, st.id);
                            const stStateObj = state[st.id] || {};
                            const timeStr =
                              isStDone && stStateObj.time
                                ? `<span class="ml-auto text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 flex-shrink-0 whitespace-nowrap shadow-sm">${stStateObj.time}</span>`
                                : "";
                            return `
                                <div class="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-sm transition-all cursor-pointer group/st" onclick="window.toggleSubTask('${st.id}')">
                                    <div class="w-4 h-4 rounded flex items-center justify-center flex-shrink-0 transition-colors ${isStDone ? "bg-emerald-500 text-white border border-emerald-500" : "border border-slate-300 bg-white group-hover/st:border-indigo-400"}">
                                        ${isStDone ? `<svg class="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>` : ""}
                                    </div>
                                    <span class="text-[13px] font-medium leading-relaxed pr-2 ${isStDone ? "text-slate-400 line-through" : "text-slate-700"}">${st.title}</span>
                                    ${timeStr}
                                </div>
                            `;
                          })
                          .join("")}
                    </div>
                </div>
            `;
    }

    const mainTimeStr =
      isDone && state[task.id]?.time && !hasSubtasks
        ? `<span class="ml-auto text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 flex-shrink-0 whitespace-nowrap shadow-sm">${state[task.id].time}</span>`
        : "";

    taskEl.innerHTML = `
            <div class="flex items-start gap-3 w-full">
                ${checkHtml}
                <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-2 mb-1.5">
                        <h4 class="text-base font-bold ${isDone ? "text-emerald-700" : "text-slate-800"} leading-snug cursor-pointer hover:text-indigo-600 transition-colors" onclick="window.toggleMainTask('${phaseId}', ${index})">
                            ${task.title}
                        </h4>
                        ${mainTimeStr}
                    </div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-[12px] font-semibold text-slate-600 flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                            <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            ${task.date}
                        </span>
                    </div>
                    ${task.note ? `<p class="text-[13px] ${isDone ? "text-slate-500" : "text-slate-600"} mb-3 leading-relaxed pr-2">${task.note}</p>` : ""}
                    <div class="flex flex-wrap items-center gap-2 mb-3">
                        ${tagsHtml}
                        <span class="text-[12px] font-semibold text-slate-700 flex items-center gap-1 before:content-['•'] before:text-slate-300 before:font-normal">
                            <svg class="w-3.5 h-3.5 ml-1 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            ${task.who}
                        </span>
                    </div>
                    <div class="bg-indigo-50/50 border border-indigo-100/80 rounded-lg p-3 flex items-start gap-2.5">
                        <svg class="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        <div>
                            <span class="text-[10px] font-bold text-indigo-400 uppercase tracking-wider block mb-0.5">Minh chứng / Sản phẩm</span>
                            <span class="text-[12.5px] font-medium text-indigo-900">${task.output}</span>
                        </div>
                    </div>
                    ${subtasksHtml}
                </div>
            </div>
        `;
    container.appendChild(taskEl);
  });
}

export function renderMembers() {
  const container = document.getElementById("member-list");
  if (!container) return;
  container.innerHTML = "";
  MEMBERS.forEach((m) => {
    const tasksHtml = m.tasks
      .map(
        (t) =>
          `<li class="text-sm text-slate-600 flex items-start gap-2 mb-1.5"><svg class="w-4 h-4 text-slate-300 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="leading-tight">${t}</span></li>`,
      )
      .join("");
    const div = document.createElement("div");
    div.className =
      "bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow";
    div.innerHTML = `<div class="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4"><div class="w-12 h-12 rounded-full ${m.color} ${m.tcolor} font-bold text-lg flex items-center justify-center flex-shrink-0 border border-slate-100/50">${m.avatar}</div><div><h4 class="font-bold text-slate-800 text-base">${m.name}</h4><p class="text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">${m.role}</p></div></div><ul class="pl-1">${tasksHtml}</ul>`;
    container.appendChild(div);
  });
}

export function updateStats(state) {
  let total = 0,
    done = 0;
  Object.values(TASKS)
    .flat()
    .forEach((t) => {
      if (t.subtasks && t.subtasks.length > 0) {
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
