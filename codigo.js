/*

    function FunMostrarTexto() {
    
        document.getElementById("txtID").value  = "Hola Mundo";

    }

    function FunEstaVacio(){

    var txtValorTelefono = document.getElementById("txtID");

        if  (txtID.value == 0){
            
           document.getElementById("PrfParrafoMostrar").innerHTML = "Vacio ";

        }
        else
        document.getElementById("PrfParrafoMostrar").innerHTML = "Lleno";

    }
*/

function FunEsIgual(){
        
    const url = `https://retoolapi.dev/MeBdSQ/data`
    const DatoEntrada = document.getElementById('txtID');
    const Mensaje = document.getElementById("PrfParrafoMostrar").innerHTML ="Usser not fund";


    if (txtID.value == 0){
            document.getElementById("PrfParrafoMostrar").innerHTML = "Type your phone";
    }
    else 
        fetch (url)
            .then (res => res.json())
            .then (data =>{
                data.forEach(Mormones =>{
                    if (txtID.value == Mormones.Phone)  {
                        document.getElementById("PrfParrafoMostrar").innerHTML = " Welcome! ";
                        const p = document.createElement('p');
                        const o = document.createElement('o');
                        p.innerHTML = Mormones.Name
                        o.innerHTML = Mormones.Address
                        PrfParrafoMostrar.appendChild(p)
                        PrfParrafoMostrar.appendChild(o) 
                    }       
        })
        if ( txtID.value != Mormones.Phone){
            Mensaje;
        }
        
    })
       // document.getElementById("PrfParrafoMostrar").innerHTML ="Error de Coincidencia";
}