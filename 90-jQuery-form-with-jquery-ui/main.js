$( function() {
    $('#location').selectmenu();


    var availableTags = [
        "HTML",
        "CSS",
        "Javascript",
        "jQuery",
        "C",
        "C++",
        "Design",
        "illustrator",
        "PHP",
        "Swift",
        "SQL"
      ];
      $( "#category" ).autocomplete({
        source: availableTags
      });
});//document ready