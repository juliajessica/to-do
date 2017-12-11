// business logic
function List (newTask, taskNumber) {
  this.task = newTask;
  // this.id = taskNumber;
}
List.prototype.finalResult = function() {
  return this.task;
  // + " " + this.id;
}


//user logic
$(document).ready(function() {
  $('form#toDoList').submit(function(event) {
    event.preventDefault();

    var inputToDo = $("label#enter-what-to-do").val(); // var linking to html
    // var inputErrands = $("#").val();

    var newList = new List(inputToDo); //variable linking to protoype

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    if (inputToDo = ) {
      //debugger;
      $("#showList h2").text("To do:");
      $(".finalResult").text(inputToDo.food);
    } else {
      console.log();
    }


      // $('ul').prepend("<li>"+item.val()+"</li>");

        // $('li').click(function() {
        // $(this).remove();

        // $('#chkb-unchecked').checkbox();
  });
});
