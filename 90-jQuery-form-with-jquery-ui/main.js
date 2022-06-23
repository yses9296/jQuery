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
        source: availableTags,
        change: function( event, ui ) {
            updateProgress();
        }
    });

    //spinner
    $( "#experience" ).spinner({
        min: 0,
        max: 10,
        step: 1,
        change: function( event, ui ) {
            updateProgress();
        }
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

    //progressBar

    $("#progress").progressbar({
        value: 0
    });
    $('input').change(function(){
        updateProgress();
    })
    function updateProgress(){
        var $progress = 0,
            $itemCount = 5,
            $itemCompleted = 0;
        var $location = $('#location option:selected').val();
        var $category = $('#category').val();
        var $expreience = $('#experience').val();
        var $date = $('#startDate').val();
        var $refer = $("input[type='radio']:checked").val();

        if ($location) $itemCompleted++;
        if ($category) $itemCompleted++;
        if ($expreience) $itemCompleted++;
        if ($date) $itemCompleted++;
        if ($refer) $itemCompleted++;

        $progress = $itemCompleted/$itemCount * 100;
        $( "#progress" ).progressbar( "option", "value", $progress );
        $( ".percent span" ).text($progress);

        if($progress == 100)
        $( "#submit" ).button({
            disabled: false
        });

    }//updateProgress
    updateProgress();
});//document ready