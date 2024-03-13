async function listarVideos() {
    const conexion = await fetch("http://localhost:3001/videos");

    const conexionConvertida = conexion.json();


    //console.log(conexionConvertida);
    return conexionConvertida

}

async function crearVideo() {
    const conexion = await fetch ("http://localhost:3001/videos",{
        method:"POST",
        headers:{"content-type":"aplication/json"},
        body:JSON.stringify({
            titulo:titulo,
            descripcion:descripcion,
            url:url,
            imagen:imagen
        })
    });
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos, crearVideo
}

//listarVideos()