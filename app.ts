$(function () {

    cargarSexo();


    $('#cmbFiltro').change(function () {
        filtrarPersonas(this.value);
    });

    //agregar al evento change de los 4 checkbox, el manejador "mapearCampos"

    $("#chkId").change(function() {
            alert("fede"); 
    });

    $("#btnCalcularPromedio").click(function(){
        calcularPromedio();
    });

});

function cargarSexo() {
  
   let todos = document.createElement("option");
   let masculino = document.createElement("option");
   let femenino = document.createElement("option");

   todos.appendChild(document.createTextNode("Todos"));
   masculino.appendChild(document.createTextNode("Masculino"));
   femenino.appendChild(document.createTextNode("Femenino"));

   document.getElementById("cmbFiltro").appendChild(todos);
   document.getElementById("cmbFiltro").appendChild(masculino);
   document.getElementById("cmbFiltro").appendChild(femenino);
   

}

function filtrarPersonas(tipo:string) {

    let personasFiltradas: Array<Clases.Persona>;
    if (lista != undefined){
        if(tipo != "Todos"){
            personasFiltradas = lista
            .filter(function(persona){
                return persona.gender === tipo;
            });
            actualizarTabla(personasFiltradas);
        }
        else{
            actualizarTabla(lista);
        }
    }    
}

function calcularPromedio() {

    let promedio:number = 0;

    if (lista != undefined){
        promedio = lista.filter(function(persona){
            if($("#cmbFiltro").val() === "Todos")
                return persona.gender;
            else
                return persona.gender === $("#cmbFiltro").val();
        })
        .map(function(users){
            return parseInt(users.edad)
        })
        .reduce(function(previo, actual) {
        return previo + actual;
        }, 0) / lista.length;
    }
    
    $("#txtPromedio").val(promedio);
}

function mapearCampos(lista:Array<Clases.Persona>) {

    let chkName: boolean = (<HTMLInputElement> $('#chkName')[0]).checked;
    let chkApellido: boolean = (<HTMLInputElement> $('#chkApellido')[0]).checked;
    let chkEdad: boolean = (<HTMLInputElement> $('#chkEdad')[0]).checked;
    let chkEmail: boolean = (<HTMLInputElement> $('#chkEmail')[0]).checked;
    let chkGender: boolean = (<HTMLInputElement> $('#chkGender')[0]).checked;
    let chkId: boolean = (<HTMLInputElement> $('#chkId')[0]).checked;
    let chkActive: boolean = (<HTMLInputElement> $('#chkActive')[0]).checked;
    let chkProfesion: boolean = (<HTMLInputElement> $('#chkProfesion')[0]).checked;
          
    let array:boolean[] = [chkName,chkApellido,chkEdad,chkEmail,chkGender,chkId,chkActive,chkProfesion];

    for (const item in array) {
        if (item){                                
        }
    }
}
    