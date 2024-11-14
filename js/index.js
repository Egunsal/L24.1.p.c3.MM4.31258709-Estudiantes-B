let estudiantes = [ 
    {nombre: "Tomi", semestre: 3, nota: 1},
    {nombre: "Joe", semestre: 1, nota: 12},
    {nombre: "Edwuard", semestre: 4, nota: 10},
    {nombre: "Franxu", semestre: 10, nota: 20},
    {nombre: "Kelvin", semestre: 9, nota: 19},
    ]

let nombreDeAprobados = (estudiantes) =>{
   let estudiantesAprobados = [];
   estudiantes.forEach(estudiante => {
    if(estudiante.nota > 10) estudiantesAprobados.push(estudiante.nombre)
   });
return estudiantesAprobados
}
let salida = document.getElementById("salida")

salida.innerHTML = JSON.stringify(nombreDeAprobados(estudiantes))

