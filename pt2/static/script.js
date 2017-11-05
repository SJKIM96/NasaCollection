// script.js File


$(document).ready(function () {
    $.ajax({ 
        type: 'GET', 
        url: 'https://se3316-skim96.c9users.io:8080/api/se3316', 
        data: { get_param: 'comments' }, 
        dataType: 'json',
        success: function (data) { 
            alert("in function");
            $.each(data, function(index, element) {
                $('body').append($('<div>', {
                    text: element.name
                }));
            });
        }
    });
    
    
    $("#se3316_sender").click(function(){
        var textval = document.getElementById("SE3316").value;
        $.post("https://se3316-skim96.c9users.io:8080/api/se3316",
        {
          comments : textval
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
    
    $("#se3352_sender").click(function(){
        var textval = document.getElementById("SE3352").value;
        $.post("https://se3316-skim96.c9users.io:8080/api/se3352",
        {
          comments : textval
        },
        function(data,status){
            alert("Data: " + data + "\nStatus: " + status);
        });
    });
    
});