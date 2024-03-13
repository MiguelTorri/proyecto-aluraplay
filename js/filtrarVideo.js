import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(evento){

    evento.preventDefault();
    const datosDeBusqueda = document.querySelector("[data-busqueda]");
    const busqueda = await conexionAPI.buscarVideos(datosDeBusqueda);


    const lista = document.querySelector("[data-lista]");

    busqueda.forEach(video => lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)));
    //console.log (busqueda)

}


const boton = document.querySelector("[data-boton-busqueda]");

boton.addEventListener("click", evento => filtrarVideo(evento));