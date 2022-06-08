( async function(){
    let pieGraph = document.getElementById('graph-pie');
    let lineGraph = document.getElementById('graph-line');

    try{
        let peticion = await fetch('http://127.0.0.1:5500/data.json');
        // let peticion = await fetch('http://192.168.43.37:5500/data.json');

        const data = await peticion.json();

        new Chart(pieGraph,data.pie);
        new Chart(lineGraph,data.line);
    }
    catch(error){
        const divs = document.getElementsByClassName("ifError");
        pieGraph.className = "hidden";
        lineGraph.className = "hidden";
        
        divs[0].innerHTML = "Ha ocurrido un error.. Esta gráfica no se puede mostrar.";
        divs[1].innerHTML = "Ha ocurrido un error.. Esta gráfica no se puede mostrar.";

        console.error(error);
    }

}());

(()=>{
    let coord = [7.7493901,-72.2289052];
    let map = L.map('map',{zoomControl: false, attributionControl: false}).setView(coord,16)
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        zoomControl: false
    }).addTo(map);
    L.control.scale({position: "bottomleft", maxWidth: 100, metric: true, imperial: false}).addTo(map);

    var marker = L.marker(coord).addTo(map);
})()