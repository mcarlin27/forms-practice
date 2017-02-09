$(document).ready(function() {
  $("form").submit(function(event) {
      event.preventDefault();

    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var sportInput = $("input#sport").val();
    var teamInput = $("input#team").val();
    var scoreInput = $("input#score").val();
    var animalInput = $("input#animal").val();
    var authorityInput = $("input#authority").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".sport").text(sportInput);
    $(".team").text(teamInput);
    $(".score").text(scoreInput);
    $(".animal").text(animalInput);
    $(".authority").text(authorityInput);

    $("#story").show();

  });
});
