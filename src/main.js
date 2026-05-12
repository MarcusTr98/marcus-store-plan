import { TASKS } from "./data/constants.js";
import { getCurrentTime } from "./utils/helpers.js";
import { initFirebase, syncStateToFirebase } from "./services/firebase.js";
import {
  renderTasks,
  renderMembers,
  updateStats,
  isTaskDone,
} from "./ui/renderer.js";

// Khởi tạo Quản lý Trạng thái (State Management - Cơ bản nhất)
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

// Global UI Events (Đưa ra window để template HTML tĩnh có thể bấm được)
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

// Bắt sự kiện chuyển Tab không dùng hàm inline
document.addEventListener("DOMContentLoaded", () => {
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const targetId = e.target.dataset.target;

      tabBtns.forEach((b) => {
        b.classList.remove(
          "bg-indigo-50",
          "text-indigo-700",
          "border-indigo-200",
        );
        b.classList.add("text-slate-600", "border-transparent");
      });
      e.target.classList.add(
        "bg-indigo-50",
        "text-indigo-700",
        "border-indigo-200",
      );
      e.target.classList.remove("text-slate-600", "border-transparent");

      document.querySelectorAll(".section-content").forEach((sec) => {
        if (sec.id === targetId) {
          sec.classList.remove("hidden-section");
          sec.classList.add("active-section");
        } else {
          sec.classList.add("hidden-section");
          sec.classList.remove("active-section");
        }
      });
    });
  });

  // Khởi chạy App
  initFirebase((syncedData) => {
    state = syncedData;
    saveStateLocal();
    triggerRender();
  });

  triggerRender();
});
