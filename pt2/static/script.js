// script.js File


/*$(document).ready(function () {
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
});*/

let url = 'https://se3316-skim96.c9users.io:8080/api/se3316';

fetch(url)
.then(res => res.json())
.then((out) => {
  alert('Checkout this JSON! ', out);
})
.catch(err => { throw err });