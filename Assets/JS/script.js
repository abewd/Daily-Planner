// Assign colors to the tasks
var CurrentTaskColor = white;
var FutureTaskColor = green;

// Setup input for date input and task input
var currentDay = moment().format("date, month");
$("#currentDay").text(currentDay);

var tasks = JSON.parse(localStorage.getItem("Tasks"));
var timeSlots = $(".to-do").toArray();

// Past, Present, Future function to display color and style for text and block
function setTimeSlotColors() {
  var currentTime = moment().format("kk");

  for (var i = 0; i < timeSlots.length; i++) {
    if (parseInt(timeSlots[i].id) == currentTime) {
      timeSlots[i].style.backgroundColor = CurrentTaskColor;
    } else if (parseInt(timeSlots[i].id) > currentTime) {
      timeSlots[i].style.backgroundColor = FutureTaskColor;
    }
  }
}

// Display saved tasks which have been previously saved
function getStoredTasks() {
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  $(".display-text").each(function (index, element) {
    for (var i = 0; i < tasks.length; i++) {
      if (tasks[i].pID == element.id) {
        element.textContent = tasks[i].task;
      }
    }
  });
}

$(".to-do").on("click", function () {
  $(".save-button").each(function (index, element) {
    element.style.opacity = 0.2;
  });

  $(this).parent().children(".save-button")[0].style.opacity = 1;

  $(".form-control").each(function (index, element) {
    element.style.visibility = "hidden";
  });

  var formZoneID = "#input-form-" + $(this)[0].id;
  $(formZoneID)[0].style.visibility = "visible";
});

$(".save-button").on("click", function () {
  $(".save-button").each(function (index, element) {
    element.style.opacity = 0.7;
  });

  var currentTask = $(this)
    .parent()
    .children(".to-do")
    .children(".form-control")[0];

  var currentP = $(this)
    .parent()
    .children(".to-do")
    .children(".display-text")[0];
  var taskDescription = currentTask.value;

  currentP.textContent = taskDescription;
  currentTask.style.visibility = "hidden";

  var currentTask = {
    pID: currentP.id,
    task: taskDescription,
  };
  tasks.push(currentTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

$("#remove-tasks").on("click", function () {
  localStorage.clear();
  location.reload();
});

setTimeSlotColors();
getStoredTasks();
