var cursos = [];

var btnc = document.getElementById("c++")
var btnjava = document.getElementById("java")
var btnnote = document.getElementById("note")

var imgnote = "img/note.png"
var imgjava = "img/java.png"
var imgc = "img/c++.png"

var curso1 = ["carlos","C++","Capacidad de programar full C++", 14];
var curso2 = ["Juan","Java","Capacidad de programar full Java", 14];
var curso2 = ["Miguel","Note","Capacidad de programar full note", 14];

function agregar_note() {
    try {
    let curso = "";
    curso += `
    <div class="contenedor">
        <div class="ruta_card">
            <div>
                <img class="imagen_card" src="img/note.png" alt="Note.js">
            </div>
            <div>
                <h2 class="ruta">Node</h2>
            </div>
            <div>
            <h2 class="docente">Miguel</h2>
            </div>
        </div>
    </div>
    `
    
    document.getElementById("container_note").innerHTML = curso;
}catch (error) {
    console.log(error)      
    }
}


function agregar_java() {
    try {
        let curso = "";
    curso += `
    <div class="contenedor">
        <div class="ruta_card">
        <div>
            <img class="imagen_card" src="img/java.png" alt="Note.js">
        </div>
        <div>
            <h2 class="ruta">Java</h2>
        </div>
        <div>
            <h2 class="docente">Juan</h2>
        </div>
        </div>
    </div>
    `
    document.getElementById("container_java").innerHTML = curso;
}catch (error) {
    console.log(error)      
    }
}

function agregar_c() {
    try {
        let curso = "";
    curso += `
    <div class="contenedor">
        <div class="ruta_card">
        <div>
            <img class="imagen_card" src="img/c++.png" alt="Note.js">
        </div>
        <div>
            <h2 class="ruta">C++</h2>
        </div>
        <div>
            <h2 class="docente">Carlos</h2>
        </div>
        </div>
    </div>
    `
    document.getElementById("container_c++").innerHTML = curso;
}catch (error) {
    console.log(error)      
    }
}