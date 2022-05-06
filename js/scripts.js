$(document).ready(function () {
  $("#inputtedNameForm").submit(function (e) {
    e.preventDefault();
    const name = $("#name").val();
    $(".output-name").html(name);
    $("#inputtedNameForm").hide();
    $(".qustions").show();
    $(".question-one").show()
  })




  $("#genderButton").click(function () {
    $(".question-two").show()
    $(".question-one").hide()
  })

  $("#genderButton2").click(function () {
    $(".question-three").show()
    $(".question-two").hide()
  })

  $("#genderButton3").click(function () {
    $(".question-four").show()
    $(".question-three").hide()
  })


  $("#genderButton4").click(function () {
    $(".question-five").show()
    $(".question-four").hide()
  })

  $("#genderButton5").click(function () {
    $(".question-six").show()
    $(".question-five").hide()
  })

  $("#quizQuestion").submit(function (e) {
    e.preventDefault();
    const gender = $('input[name="gender"]:checked').val();
    const age = parseInt($("#age").val());
    const hobby = $('input[name="hobby"]:checked').val();
    const profession = $("#profession").val();
    const state = $('input[name="state"]:checked').val()
    const expectation = $("#expectation").val();
    // console.log(gender);
    // console.log(age);
    // console.log(hobby);
    // console.log(profession);
    // console.log(nationality);
    // console.log(expectation);

    if (gender === "Female") {
      if (age >= 18 && age < 40) {
        if (hobby === "Singing") {
          if (state === "Philadelphia") {
            $(".celebrity-kelvin").show();
          }
        }
        if (hobby === "Dancing") {
          if (state === "New Orleans") {
            $(".celebrity-tyler").show();
          }
        }
        if (hobby === "Cooking") {
          if (state === "New-york") {
            $(".celebrity-peter").show();

          }
        }
      }
    }
    if (gender === "Male") {
      if (age >= 18 && age < 40) {
        if (hobby === "Singing") {
          if (state === "Barbadian") {
            $(".celebrity-Rihanna").show();
          }
        }
        if (hobby === "Cooking") {
          if (state === "carlifonia") {
            $(".celebrity-selena").show();
          }
        }
        if (hobby === "Dancing") {
         if (state === "concordial"){
          $(".celebrity-zendaya").show();
         }
        }
      }
    }
  })
})