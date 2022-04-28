$(document).ready(function() {
  $("#inputtedNameForm").submit(function(e) {
    e.preventDefault();
    const name = $("#name").val();
    $(".output-name").html(name);
    $("#inputtedNameForm").hide();
    $(".qustions").show();
    $(".question-one").show()
  })


  

  $("#genderButton").click(function() {
    $(".question-two").show()
    $(".question-one").hide()
  })

  $("#genderButton2").click(function() {
    $(".question-three").show()
    $(".question-two").hide()
  })

  $("#genderButton3").click(function() {
    $(".question-four").show()
    $(".question-three").hide()
  })

  
  $("#genderButton4").click(function() {
    $(".question-five").show()
    $(".question-four").hide()
  })

  $("#genderButton5").click(function() {
    $(".question-six").show()
    $(".question-five").hide()
  })



  

})