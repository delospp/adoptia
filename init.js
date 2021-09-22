const nambre="Peppapig";
const pw="megustanloscharcos";
function verificar(){
    let nom= document.getElementById("nombreUsuario").value;
    let clave= document.getElementById("claveUsuario").value;
    if(nambre==nom && pw==clave){
        alert("Bienvenido")
    }else{
        alert("Error, por favor verifique los datos")
    }
}