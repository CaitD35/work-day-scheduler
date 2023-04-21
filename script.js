// SETTING CURRENT DAY TO CALENDAR 
$(document).ready(function () {
  var currentDayEl= $("#currentDay")
 var currentDay= dayjs().format("dddd, MMMM, D")
 currentDayEl.text(currentDay)


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
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
 
   $(".saveBtn")

   })
  