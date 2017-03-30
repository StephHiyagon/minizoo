var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');
select.addEventListener("change", function(){
  switch (select.value) {
    case "blanco-negro":{
      for(var i=0; i<img.length;i++){
        img[i].className="animal blanco-negro";
      }
      break;
    }

    case "original": {
      for(var i=0; i<img.length;i++){
      img[i].className="animal original";
      }
      break;
    }
    case "invertir-colores":
    for(var i=0; i<img.length;i++){
      img[i].className="animal invertir-colores";
    }
    break;

    case "sepia":{
      for(var i=0; i<img.length;i++){
        img[i].className="animal sepia";
      }
      break;
    }
  }
});
