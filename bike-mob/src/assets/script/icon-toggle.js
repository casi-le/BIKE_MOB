$(document).ready(function(){

});


function iconToggle(element){
    console.log(element);
    console.log(document);
    var allIcons = document.getElementsByTagName("i");
    for(var i=0; i<allIcons.length; i++){
        if(allIcons[i].classList.contains('iconChange')){
            allIcons[i].classList.remove('fa-minus-circle');
            allIcons[i].classList.add('fa-plus-circle');
        }
        
    }
    var icon = element.getElementsByTagName("i")[0];
    if(icon.classList.contains('iconChange')){
        icon.classList.toggle('fa-minus-circle');
        icon.classList.toggle('fa-plus-circle');
    }

  }