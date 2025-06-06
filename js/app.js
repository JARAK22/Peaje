import Peaje from "./peaje.js";

let frmPeajes = document.getElementById("frmPeajes");
let elementos = frmPeajes.elements;
let txtAutomovil = document.getElementById("txtAutomovil");
let txtBuses = document.getElementById("txtBuses");
let txtCamiones = document.getElementById("txtCamiones");
let txtRecaudado = document.getElementById("txtRecaudado");
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const imgCarro = document.getElementById("imgCarro");
const imgAutobus = document.getElementById("imgAutobus");
const imgCamion = document.getElementById("imgCamion");
let carro = 0;
let bus = 0;
let camion = 0;
let peaje = new Peaje();

btnAbrir.addEventListener("click", () => {
    txtAutomovil.value = "0";
    txtBuses.value = "0";
    txtCamiones.value = "0";
    txtRecaudado.value = "0";
    for (let i = 0; i < elementos.length; i++) {
        console.log(elementos[i]);
        elementos[i].disabled = false; // Deshabilita cada elemento
    }
    imgCarro.classList.remove("desabilitado");
    imgAutobus.classList.remove("desabilitado");
    imgCamion.classList.remove("desabilitado");
    imgCarro.classList.add("habilitado");
    imgAutobus.classList.add("habilitado");
    imgCamion.classList.add("habilitado");
});

btnCerrar.addEventListener("click", () => {
    console.log(elementos);
    for (let i = 0; i < elementos.length - 2; i++) {
        console.log(elementos[i]);
        elementos[i].disabled = true; // Deshabilita cada elemento
    }
    imgCarro.classList.remove("habilitado");
    imgAutobus.classList.remove("habilitado");
    imgCamion.classList.remove("habilitado");
    imgCarro.classList.add("desabilitado");
    imgAutobus.classList.add("desabilitado");
    imgCamion.classList.add("desabilitado");
});
// al darle click a la imagin debe aumentar el valor en el input
imgCarro.addEventListener("click", () => {
    txtAutomovil.value = "";
    txtRecaudado.value = "";
    carro = 1;
    peaje.setAutomoviles(carro);
    txtAutomovil.value += peaje.getAutomoviles();
    txtRecaudado.value += peaje.getTotalRecaudado();

});

imgAutobus.addEventListener("click", () => {
    txtBuses.value = "";
    txtRecaudado.value = "";
    bus = 1;
    peaje.setBuses(bus);
    txtBuses.value += peaje.getBuses();
    txtRecaudado.value += peaje.getTotalRecaudado();
});

imgCamion.addEventListener("click", () => {
    txtCamiones.value = "";
    txtRecaudado.value = "";
    camion = 1;
    peaje.setCamiones(camion);
    txtCamiones.value += peaje.getCamiones();
    txtRecaudado.value += peaje.getTotalRecaudado();
});

function actualizarHora() {
    const ahora = new Date();
    console.log(ahora);
    const hora = ahora.toLocaleTimeString(); 
    document.getElementById('hora').textContent = hora;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);
actualizarHora()