var cantidadpj = 0;
var cantmagos = 0;
var elementos1 = ["fuego","agua","viento","tierra","electricidad","oscuridad","luz","unica","dimensional"];
var personaje = [];
var mago = []
var daos = ["luz lunar","lapiz","arco","garra","maestro","sombras","voluntad","miedo","espada"];
var agua = ["Essence of Water","Profound Mystery of Ice","Profound Mystery of blood","Profoundo Misterio de neblina ilusoria","Profound Mystery of Waterbody ","Profoundo misterio de la suavidad ciclica"]
var viento = ["Essence of Wind - GAS","Profound Mystery of Doppelganger","Profound Mystery of Sound waves ","Profound Mystery of Music","Profound Mystery of Wind Walking","Profound Mystery of ilucionism "," Profound Mystery of Void ","Profound Mystery of Fast ","Profound Mystery of Slow "]
var tierra = ["Essence of Earth - solido ","Profound Mystery of Strength ","Profound Mystery of World Walking ","Profound Mystery of Vitality ","Profound Mystery of Gravitational Space ","Profound Mystery of Throbbing Pulse of the World "]
var electricidad = ["Essence of Lightning ","profound mystery of Electric Charge ","profound mystery of Electric Current ","profound mystery of Electric Field ","profound mystery of Electric Potential ","profound mystery of electric Magentism "]
var oscuridad = ["Essence of Darkness - creacion ","Profound Mystery of Shadow Doppelganger ","Profound Mystery of Evil ","Profound Mystery of Devour ","Profound Mystery of Sigil ","Profound Mystery of True Shadow "]
var luz = ["Essence of Light ","Profound Mystery of Light Speed ","Profound Mystery of Light Doppelganger ","Profound mystery of Regeneration ","Profound Mystery of Domination ","Profound Mystery of Propagation "]
var fuego = ["Esencia del fuego - Cambio ","Profundo misterio del calor","Profoundo misterio de la explosion","Profoundo misterio del cuerpo llameante","Profundo misterio de la transformacion","Profundo misterio de la pureza"]
var ram = []
var unico=[]
var actitudes = []
function dsda(arr,veces) {
    let b =[]
    while(ram.length< veces){
    for (let index = 0; index <= veces ;){
        o=(Math.floor(Math.random()*(arr.length-1)))
        if (o<=arr.length) {
            b.push(o);
            index++;
        }
        
        
    }

    ram = [...new Set(b) ]
        
    }

    return (ram)
}



function perdao() {
    personaje.push("------" + ("\n"))
    veces = 4;
    dsda(daos,veces)
    for (let index = 0; index < 4; index++) {
     
        
       
        let a = ram[index]
       
        personaje.push(index+1 + ")")
        personaje.push(daos[a]);
    
        personaje.push("\n")
        
       
        
        document.getElementById("area").value = personaje
    
    }
    nocomasdao()
}


function reset() {
    document.getElementById("area").value = ("su personaje aqui")
    borrar = personaje.length
    for (let index = 0; index < borrar; index++) {
        personaje.pop()
        
    }
    borrarmag = mago.length
    for (let index = 0; index < borrarmag; index++) {
        mago.pop()
        
    }
}
function magia(){
    var veces = Math.round(Math.random()*(elementos1.length-1))
    dsda(elementos1,veces)
    for (let index = 0; index < veces; index++) {
        let a = ram[index]
        mago.push(index+1 + ")-")
        
       
        mago.push(elementos1[a]);
        escuela(a)
        mago.push("\n")

        document.getElementById("area").value = mago ;
        
    }

    nocomas()
    
}
function escuela(mar){
    if(elementos1[mar]=="fuego"){
        var numram = Math.round(Math.random()*(fuego.length-1));
        dsda(fuego,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
           
            mago.push(fuego[a])
           
        }
    } else if (elementos1[mar]=="agua"){
        var numram = Math.round(Math.random()*(agua.length-1));
        dsda(agua,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
           
            mago.push(agua[a])
           
        }
    } else if (elementos1[mar]=="viento"){
        var numram = Math.round(Math.random()*(viento.length-1));
        dsda(viento,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
            mago.push(viento[a])
           
        }
    } else if (elementos1[mar]=="tierra"){
        var numram = Math.round(Math.random()*(tierra.length-1));
        dsda(tierra,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
            mago.push(tierra[a])
           
        }
    } else if(elementos1[mar]=="electricidad"){
        var numram = Math.round(Math.random()*(electricidad.length-1));
        dsda(electricidad,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
         
            mago.push(electricidad[a])
           
        }
    }  else if(elementos1[mar]=="oscuridad"){
        var numram = Math.round(Math.random()*(oscuridad.length-1));
        dsda(oscuridad,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
    
            mago.push(oscuridad[a])
           
        }
    } else if(elementos1[mar]=="luz"){
        var numram = Math.round(Math.random()*(luz.length-1));
        dsda(luz,numram)
        for (let index = 0; index < numram; index++) {
            let a = ram[index]
            mago.push("\n")
            mago.push("***")
            mago.push(luz[a])
           
        }
    }
}

function nocomas(){
    var texto = document.getElementById("area").value.toLowerCase();
    var txtCifrado = texto.replace(/,/igm,"")
    document.getElementById("text-area2").innerHTML = txtCifrado;
}   
function nocomasdao(){
    var texto = document.getElementById("area").value.toLowerCase();
    var txtCifrado = texto.replace(/,/igm,"")
    document.getElementById("area2").innerHTML = txtCifrado;
}   
function copydao(){


    var contenido = document.querySelector("#area2");
    contenido.select();
    document.execCommand("copy")
    navigator.clipboard.writeText(area2)
    alert("¡Mensaje copiado!")
}
function copy(){


    var contenido = document.querySelector("#text-area2");
    contenido.select();
    document.execCommand("copy")
    navigator.clipboard.writeText(text-area2)
    alert("¡Mensaje copiado!")
}
function agregar(){
    var agredao = document.getElementById("agrega")
    daos.push(agredao)
}
