$(document).ready(function(){

});


function iconToggle(element){
    console.log(element);
    console.log(document);
    var allIcons = document.getElementsByTagName("i");
    for(var i=0; i<allIcons.length; i++){
        allIcons[i].classList.remove('fa-minus-circle');
    }
    var icon = element.getElementsByTagName("i")[0];
    icon.classList.toggle('fa-minus-circle');
  }