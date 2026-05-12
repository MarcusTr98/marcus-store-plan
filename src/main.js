import { TASKS } from "./data/constants.js";
import { getCurrentTime } from "./utils/helpers.js";
import { initFirebase, syncStateToFirebase } from "./services/firebase.js";
import {
  renderTasks,
  renderMembers,
  updateStats,
  isTaskDone,
} from "./ui/renderer.js";

let state = JSON.parse(
  localStorage.getItem("grad_proj_2026_electronic") || "{}",
);

function saveStateLocal() {
  localStorage.setItem("grad_proj_2026_electronic", JSON.stringify(state));
}

function triggerRender() {
  ["p1", "p2", "p3", "p4", "p5"].forEach((phase) =>
    renderTasks(phase, `tasks-${phase}`, state),
  );
  renderMembers();
  updateStats(state);
}

// Map event functions to Window object for HTML inline handlers
window.toggleMainTask = function (phaseId, index) {
  const task = TASKS[phaseId][index];
  const time = getCurrentTime();

  if (task.subtasks) {
    const allDone = task.subtasks.every((st) => isTaskDone(state, st.id));
    task.subtasks.forEach((st) => {
      state[st.id] = { done: !allDone, time: !allDone ? time : null };
    });
  } else {
    const done = isTaskDone(state, task.id);
    state[task.id] = { done: !done, time: !done ? time : null };
  }

  triggerRender();
  saveStateLocal();
  syncStateToFirebase(state);
};

window.toggleSubTask = function (subtaskId) {
  const done = isTaskDone(state, subtaskId);
  state[subtaskId] = { done: !done, time: !done ? getCurrentTime() : null };

  triggerRender();
  saveStateLocal();
  syncStateToFirebase(state);
};

window.switchTab = function (tabId) {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    if (btn.dataset.target === tabId) {
      btn.classList.remove(
        "text-slate-700",
        "hover:bg-slate-100",
        "border-transparent",
      );
      btn.classList.add("bg-indigo-50", "text-indigo-700", "border-indigo-200");
    } else {
      btn.classList.add(
        "text-slate-700",
        "hover:bg-slate-100",
        "border-transparent",
      );
      btn.classList.remove(
        "bg-indigo-50",
        "text-indigo-700",
        "border-indigo-200",
      );
    }
  });

  document.querySelectorAll(".section-content").forEach((sec) => {
    if (sec.id === tabId) {
      sec.classList.remove("hidden-section");
      sec.classList.add("active-section");
    } else {
      sec.classList.add("hidden-section");
      sec.classList.remove("active-section");
    }
  });
};

// Lifecycle Init
document.addEventListener("DOMContentLoaded", () => {
  triggerRender();

  initFirebase((syncedData) => {
    state = syncedData;
    saveStateLocal();
    triggerRender();
  });
});
