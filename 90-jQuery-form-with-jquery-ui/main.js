$( function() {
    // location
    $('#location').selectmenu();

    //category
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

    //spinner
    $( "#experience" ).spinner({
        min: 0,
        max: 10,
        step: 2
    });
    
    // dataPicker
    $( "#startDate" ).datepicker({
        minDate: new Date(),
        maxDate: "+2w"
    });
    $('#startDate').datepicker("setDate", new Date());

    //radio
    $( "input[type='radio']" ).checkboxradio();

    //submit button
    $( "#submit" ).button({
        disabled: true
    });
    $( "#submit" ).click( function( e ) {
      e.preventDefault();
    } );
});//document ready