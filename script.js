( async function(){
    let peticion = await fetch('http://127.0.0.1:5500/data.json');
    const data = await peticion.json();
    let pieGraph = document.getElementById('graph-pie');
    let lineGraph = document.getElementById('graph-line');
    
    new Chart(pieGraph,data.pie);
    new Chart(lineGraph,data.line);
}())