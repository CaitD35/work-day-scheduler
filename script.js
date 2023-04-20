// SETTING CURRENT DAY TO CALENDAR 
$(document).ready(function () {
  var currentDayEl= $("#currentDay")
 var currentDay= dayjs().format("dddd, MMMM, D")
 currentDayEl.text(currentDay)



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // code to apply the past, present, or future class to each time
  
  var currentHour = dayjs().format("HH");
  var hours = [09, 10, 11, 12, 13, 14, 15, 16, 17];
  $(hours).each(function(i, hour){
    if(hour < currentHour){
      $("#" + hour).addClass("past")
    }
    else if(hour == currentHour){
      $("#" + hour).addClass("present")
    }
    else if(hour > currentHour){
      $("#" + hour).addClass("future")
    }
  })


  //
  // $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
   $('.saveBtn')
  // TODO: Add code to display the current date in the header of the page.
});
