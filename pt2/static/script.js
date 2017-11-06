// script.js File


$(document).ready(function () {
     var counter = 0;

    
    $.ajax({
            url: 'https://se3316-skim96.c9users.io:8080/api/se3316',
            type: 'GET',
            dataType: "json",
            
            timeout: 120000,
            success: function(resultData) {
                
                $.each(resultData.reverse(), function(index, element) {
                    if(counter === 20){
                        return false;
                    }
                    counter++;
                    var txt = $('<p></p>').text(element.course_code + " " + element.comments);
                    $('#get_se3316').append(txt);
                });
            }
            
    });
        
    
    
    // $.ajax({
    //     type: 'GET', 
    //     url: 'https://se3316-skim96.c9users.io:8080/api/se3316', 
    //     dataType: 'json',
    //     success: function (data) { 
    //         alert("in function");
    //          $.each(data, function(index, element) {
    //         $('body').append($('<div>', {
    //             text: element.name
    //         }));
    //         });
    //     },
        
    //     error : function(jqXHR, textStatus) {
    //         var msg = '';
    //          if (jqXHR.status === 0) {
    //         msg = 'Not connect.\n Verify Network.';
    //     } else if (jqXHR.status == 404) {
    //         msg = 'Requested page not found. [404]';
    //     } else if (jqXHR.status == 500) {
    //         msg = 'Internal Server Error [500].';
    //     } else if (textStatus === 'parsererror') {
    //         msg = 'Requested JSON parse failed.';
    //     } else if (textStatus === 'timeout') {
    //         msg = 'Time out error.';
    //     } else if (textStatus === 'abort') {
    //         msg = 'Ajax request aborted.';
    //     } else {
    //         msg = 'Uncaught Error.\n' + jqXHR.responseText;
    //     }
    //             alert(msg);
    //             //alert(textStatus);
    //     }
        
    // });

    
    
    
    
    $("#se3316_sender").click(function(){
        var txtval = document.getElementById("SE3316").value;
        $.post('https://se3316-skim96.c9users.io:8080/api/se3316',
        {
          comments : txtval
        },
        function(data,status){});
        
    });
    
    $("#se3352_sender").click(function(){
        var textval = document.getElementById("SE3352").value;
        $.post('https://se3316-skim96.c9users.io:8080/api/se3352',
        {
          comments : textval
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
    
});