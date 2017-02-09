$(document).ready(function() {
  $("blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var sportInput = $("input#sport").val();
    var teamInput = $("input#team").val();
    var scoreInput = $("input#score").val();
    var animalInput = $("input#animal").val();
    var authorityInput = $("input#authority").val();

    $(".person1").text("blah blah");
    $(".person2").text("blah blah");
    $(".sport").text("blah blah");
    $(".team").text("blah blah");
    $(".score").text("blah blah");
    $(".animal").text("blah blah");
    $(".authority").text("blah blah");

    $("#story").show();

    event.preventDefault();
  });
});
