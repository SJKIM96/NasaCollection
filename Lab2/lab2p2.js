// JavaScript File
var myfruit = ["apple", "orenge", "pineappel", "carrot", "cherry" ,"clementine" ,"lemon" ,"melon" ,"pear"];

$(document).ready(function(){
    for (var i =0; i < myfruit.length; i++){
        var text = $("<LI></LI>").text(myfruit[i]);
        $("ol#fruits").append(text);
    }
})

function load(){
    for (var i =0; i < myfruit.length; i++){
        var text = $("<LI></LI>").text(myfruit[i]);
        $("ol#fruits").append(text);
    }
}

function contains(container, obj) {
    var i = container.length;
    while (i--) {
       if (container[i] === obj) {
           return true;
       }
    }
    return false;
}

function remove(array, element) {
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}

function gettext(){
   
   var get_input = document.getElementById("newfruit");
   var textinput = get_input.value;
   
   if (contains(myfruit,textinput)){
       //write
       var text = $("<LI></LI>").text(textinput);
       $("ol#basket").append(text);

       
       
       //remove that element from the array
       remove(myfruit, textinput);
       
	   //erase child node
       var nodes = $("#fruits").empty();
       load();
   }    
}

