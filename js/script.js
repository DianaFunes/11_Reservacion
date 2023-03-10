function openModal() {
    var modal = document.getElementById("ventana");
    modal.style.display = "block";

    edades();
  }

  function openModal02() {
    var modal02 = document.getElementById("ventana02");
    modal02.style.display = "block";

    generar();
  }

 
function closeModal() {
  var modal = document.getElementById("ventana");
  modal.style.display = "none";
}
function closeModal02() {
  var modal02 = document.getElementById("ventana02");
  modal02.style.display = "none";
}



document.getElementById("btnAdu").addEventListener('click', function(){
  document.getElementById("menores").disabled = false; // Habilitar el input

  let adultos = document.getElementById("adultos").value;
  let menores = document.getElementById("menores");

  if (adultos == 1) {
    menores.max = 3;
  } else if (adultos == 2) {
    menores.max = 2;
  } else if (adultos == 3) {
    menores.max = 1;
  } else if (adultos == 4) {
    menores.max = 0;
  }
});


function edades(){
    
  const nMenores = document.getElementById("menores").value;
  const edadesMenores = document.getElementById("edadesMenores");

  for(i = 0; i < nMenores; i++){
      const datosMenor = document.createElement("article");
      datosMenor.id = "datosMenor";

      const label = document.createElement("label");
      label.textContent = "Edad del menor";

      const p = document.createElement("p");
      p.innerHTML = i+1;

      const input = document.createElement("input");
      input.type = "number";
      input.name = "nMenor";
      input.id = "nMenor";
      input.style.width = "50px";


      datosMenor.appendChild(label);
      datosMenor.appendChild(p);
      datosMenor.appendChild(input);

      edadesMenores.appendChild(datosMenor);
  }
}

function generar(){

  document.getElementById("resumen").innerHTML = "<br>Nombre:  " + document.getElementById("nombre").value + "<br> Email:  " + document.getElementById("correo").value;
  document.getElementById("resumen02").innerHTML = "<br> N. Lugares: " + document.getElementById("lugares").value + "<br> N. Pasajes: "+document.getElementById("pasajes").value + "<br>N.Habitaciones: "+ document.getElementById("rooms").value + "<br>N. personas: "+document.getElementById("personas").value +"<br>Número de adultos: " + document.getElementById("adultos").value + "<br> Número de menores: " + document.getElementById("menores").value ;
  
}