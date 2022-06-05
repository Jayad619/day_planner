// declaring variables

var myTEXT =$("#myText");
var saveBtn =$(".savebtn");



//adding todays Date

var date = moment().format("MMMM Do, YYYY");
$("#currentDay").text(date);

// LOCAL STORAGE FUNCTION ------------------------------------------------------------------------------

$(document).ready(function () {
    // Save buttons job
    $(".saveBtn").on("click", function () {
      // Catch the value of 3rd 'dom' down, which is the user input value/class called description
      var myText = $(this).siblings(".description").val();
  
      // Catch the id of the 1st 'dom', which is the times, explained in the lines below(34-43)
      var timings = $(this).parent().attr("id");
  
      // Below saves users input on the planner even after refreshing in local storage..
      localStorage.setItem(timings, myText);
  
      // Logging the activity
      console.log("button is clicked");
      console.log(myText);
      console.log(timings);
    //   console.log(CurrentHR);
    });
  

  // changing the colours based on current, past, future tense

// Each 'input' box will get colour coded based on the below function
function descriptionBox() {
    var CurrentHR = moment().hours();
    $(".time-block").each(function() {
    var clockHr = parseInt(
        $(this).attr("id")
        .split("-")[1]
    );

    if (CurrentHR > clockHr) {
      // Find the 'past' class and colour GREY -> CSS
      $(this).addClass("past");
    }

    // If the current hour is equals to hours counting it is PRESENT...
    else if (CurrentHR === clockHr) {
      // Find the 'present' class and colour RED -> CSS
      $(this).removeClass("past");
      $(this).addClass("present");
    }

    // "color" is 0, if "0" and counting + 9 is less than current hour, then create class PAST...
    
    // If counting number + 9 is larger than current hour, then create class FUTURE...
    else {
      // Find the 'future' class and colour GREEN -> CSS
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
    console.log(clockHr)
    console.log(CurrentHR)
    console.log(this)
})}
descriptionBox();

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  
});

