

let minutos;
let operador;
const opeFijo=0.20;
const opeClaro=0.40;
const opeMovistar=0.60;
const opeEntel=1.00;
let costLlamada;

minutos=parseFloat(prompt("Ingrese los minutos hablados: "));
operador=prompt("Ingrese el operador telefonico: ");

let cFijo=minutos*opeFijo
let cClaro=minutos*opeClaro
let cMovistar=minutos*opeMovistar
let cEntel=minutos*opeEntel

 if (operador=="Movistar" || operador=="movistar"){
     document.write(`<b>Tiempo hablado:</b> ${minutos} minutos(s) <br><b>Operador:</b> ${operador} <br><b>TOTAL:</b> S/ ${cMovistar}`)
    }else if(operador=="Claro"|| operador=="claro"){
        document.write(`<b>Tiempo hablado:</b> ${minutos} minutos(s) <br><b>Operador:</b> ${operador} <br><b>TOTAL:</b> S/ ${cClaro}`)
    }else if(operador=="Entel"|| operador=="entel"){
        document.write(`<b>Tiempo hablado:</b> ${minutos} minutos(s) <br><b>Operador:</b> ${operador} <br><b>TOTAL:</b> S/ ${cEntel}`)
    }else if(operador=="Fijo"|| operador=="fijo"){
        document.write(`<b>Tiempo hablado:</b> ${minutos} minutos(s) <br><b>Operador:</b> ${operador} <br><b>TOTAL:</b> S/ ${cFijo}`)
    }else{
        document.write(`Operador Erroneo, vuelta a ingresar el tiempo hablado y el operador.`)
  }




