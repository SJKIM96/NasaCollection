// JavaScript File// JavaScript File

var myfruit = ["apple", "orenge", "pineappel", "carrot", "cherry" ,"clementine" ,"lemon" ,"melon" ,"pear"];



function load(){
    
    var parent =document.getElementById("fruits");
    
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
    }
    
	for (var i = 0 ; i < myfruit.length; i++){
		var x = document.createElement("LI");
	    var t = document.createTextNode(myfruit[i]);
	    x.appendChild(t);
	    parent.appendChild(x);
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
       var x = document.createElement("LI");
       var t = document.createTextNode(textinput);
	   x.appendChild(t);
	   document.getElementById("basket").appendChild(x);

       
       
       //remove that element from the array
       remove(myfruit, textinput);
       
	   //erase child node
       var elem = document.getElementById("fruits");
       load();
   }    
  
   
   
}

