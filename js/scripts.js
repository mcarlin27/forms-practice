$(document).ready(function() {
  $("blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var sportInput = $("input#sport").val();
    var teamInput = $("input#team").val();
    var scoreInput = $("input#score").val();
    var animalInput = $("input#animal").val();
    var authorityInput = $("input#authority").val();

    $(".person1").append("blah blah");
    $(".person2").append("blah blah");
    $(".sport").append("blah blah");
    $(".team").append("blah blah");
    $(".score").append("blah blah");
    $(".animal").append("blah blah");
    $(".authority").append("blah blah");

    $("#story").show();

    event.preventDefault();
  });
});
