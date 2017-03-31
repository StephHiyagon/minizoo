var img = document.getElementsByClassName('animal');
var select = document.getElementById('select');
var ac;
select.addEventListener("change", function(){
  switch (select.value) {
    case "blanco-negro":
      ac="animal blanco-negro";
      break;

    case "original":
      ac="animal original";
      break;

    case "invertir-colores":
      ac="animal invertir-colores";
      break;

    case "sepia":
      ac="animal sepia";
      break;
    }
    add(ac);
  });

  function add(item){
    for(var i=0; i<img.length;i++){
      img[i].setAttribute("class",item);
    }
  }
