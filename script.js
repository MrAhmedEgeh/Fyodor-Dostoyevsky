//Table Of Content click
var elements = document.getElementsByClassName("click");

for(var i = 0; i < elements.length; i++){
  elements[i].onclick = function(){
    //removing class from sibilings
    var el = elements[0];
    while(el){
      if(el.tagName === "DIV"){el.classList.remove("clicked");}
      el = el.nextSibling;
    }
    this.classList.add("clicked");
  };
}

//image slide code is below
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000); // Change image every 2 seconds
}

//Read More or Less


function myFunction(id) {
  
   var dots;
   var moreText; 
   var btnText;
   
 
           
             dots = document.getElementsByClassName("dots");
             moreText = document.getElementsByClassName("more");
             btnText = document.getElementsByClassName("myBtn");
 
  
  for(var z = id; z <=id; z++){
    if (dots[z].style.display === "none" ) {
    dots[z].style.display = "inline";
    btnText[z].innerHTML = "Read more";
    moreText[z].style.display = "none";
  } else {
    dots[z].style.display = "none";
    btnText[z].innerHTML = "Read less";
    moreText[z].style.display = "inline";
  }
  }
}


