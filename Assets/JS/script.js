// Assign colors to the tasks
var CurrentTaskColor = white;
var FutureTaskColor = green;

// Setup input for date input and task input
var currentDay = moment().format("date, month");
$("#currentDay").text(currentDate);

var tasks = JSON.parse(localStorage.getItem("Tasks"));
var timeSlots = $(".to-do").toArray();

// Past, Present, Future function to display color and style for text and block
function setTimeSlotColors() {
  var currentTime = moment().format("kk");

  for (var i = 0; i < timeSlots.length; i++) {
    if (parseInt(timeSlots[i].id) == currentTime) {
      timeSlots[i].style.backgroundColor = current_task_color;
    } else if (parseInt(timeSlots[i].id) > currentTime) {
      timeSlots[i].style.backgroundColor = future_task_color;
    }
  }
}
