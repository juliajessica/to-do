// business logic

function List (newTask) {
  this.task = newTask;
  // this.id = taskNumber;

}
List.prototype.finalResult = function() {

  return this.task;
  // + " " + this.id;
}


//user logic
$(document).ready(function() {
  $('form#toDoList').submit(function(event) {  //pushing resutls to html
    event.preventDefault();

    var inputToDo = $("input#textInput").val(); // var linking to html
    var newList = new List(inputToDo); //variable linking to protoype

    $("ul#showList").append("<li id='" + newList.finalResult() + "'>" + newList.finalResult() + ' ' + ' '  + '<input type="checkbox" id="clickBox" value="' + newList.finalResult() + '" name="itemSelected">' + ' ' + ' ' + "</li>");

    $('form#listFromUser').submit(function(event) {//taking results, allowing checked, and submitting to be removed
      event.preventDefault();
      $("input:checkbox[name=itemSelected]:checked").each(function(){
      var eachItem = $(this).val();
      console.log(eachItem);
      $("#" + eachItem).fadeOut();

    }); //closing second function
  // var parent
  // var child


  }); //close form
}); //close function

});





 //close second form
    // if (inputToDo = ) {
    //   //debugger;
    //   $("#showList h2").text("To do:");
    //   $(".showList").text(inputToDo.food);
    // } else {
    //   console.log();
    // }


      // $('ul').prepend("<li>"+item.val()+"</li>");

        // $('li').click(function() {
        // $(this).remove();

        // $('#chkb-unchecked').checkbox();
