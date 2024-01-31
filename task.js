document.addEventListener("DOMContentLoaded", () => {
  const newTaskBtn = document.getElementById("new-task-btn");
  const input = document.getElementById("new-task");
  const clearBtn = document.getElementById("clear-btn");

  newTaskBtn.addEventListener("click", () => {
    console.log("nuovo task");
  });
  input.addEventListener("keypress", (e) => {
    console.log("nuovo task");
  });
  clearBtn.addEventListener("click", () => {
    console.log("pulisci task");
  });
});
