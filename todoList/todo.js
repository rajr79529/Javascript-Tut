//we should modularize our code to stop the clash between two variables with same name
//to do so we can wrap our code in IIFE
//IIFE is restricting other user to access the sharable data, we need to pass them to other users

var todoScript = (function () {
  let tasks = [];
  const tasksList = document.getElementById("list");
  const addTaskInput = document.getElementById("add");
  const tasksCounter = document.getElementById("tasks-counter");

  async function fetchToDos() {
    //with async await
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const datas = await response.json();
      tasks = datas.splice(0, 7);
      renderList();
    } catch (error) {
      console.log(error);
    }
    //with .then and .catch
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((datas) => {
    //       console.log(datas);
    //       tasks = datas.splice(0, 7);
    //       renderList();
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
  }

  function handleClickListner(e) {
    const target = e.target;
    if (target.className === "delete") {
      const targetId = target.getAttribute("data-id");
      console.log("targetID for delete", targetId);
      deleteTask(targetId);
    } else if (target.className === "custom-checkbox") {
      const targetId = target.id;
      toggleTask(targetId);
    }
  }

  function renderListItem(task) {
    const li = document.createElement("li");
    li.innerHTML = ` 
    <input type="checkbox" id="${task.id}" ${
      task.completed ? "checked" : ""
    } class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    <img src="/images/trash-solid.svg" class="delete" data-id="${task.id}" />
    `;

    tasksList.append(li);
  }

  function renderList() {
    tasksList.innerHTML = "";
    //tasks .slice will return a whole new copy of tasks.
    //this will help to render the todos from the top.
    tasks
      .slice()
      .reverse()
      .map((task) => {
        renderListItem(task);
      });
    tasksCounter.innerText = tasks.length;
  }

  function toggleTask(taskId) {
    for (let task of tasks) {
      if (task.id === Number(taskId)) {
        task.completed = !task.completed;
        renderList();
        return;
      }
    }
    showNotification("can not toggle the task");
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== Number(taskId));
    tasks = newTasks;
    renderList();
    setTimeout(() => {
      showNotification("task deleted successfully");
    });
  }

  function addTask(task) {
    if (task) {
      tasks.push(task);
      // showNotification("task added successfully");
      renderList();
    } else {
      showNotification("task can not be added");
    }
  }

  function showNotification(text) {
    alert(text);
  }

  function handleInput(e) {
    console.log("In handleInput");
    if (e.key === "Enter") {
      const text = e.target.value;
      if (!text) {
        showNotification("Please enter a task.");
      }
      const task = {
        id: Date.now(),
        title: text,
        completed: false,
      };
      console.log(task);
      addTask(task);
      e.target.value = "";
    }
  }

  function initializeApp() {
    fetchToDos();
    document.addEventListener("click", handleClickListner);
    addTaskInput.addEventListener("keyup", handleInput);
  }
  return {
    //it will give access of initialzeApp fn to other user
    initialize: initializeApp,
  };
})();
