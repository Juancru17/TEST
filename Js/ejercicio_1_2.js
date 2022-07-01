const personas = [
    {
    "id": 1,
    "nombre": "Persona 1",
    "edad": 29,
    "habilidades": [
    "Programador front-end",
    "Diseñador",
    "Gestor"
    ]
    },
    {
    "id": 2,
    "nombre": "Persona 2",
    "edad": 33,
    "habilidades": [
    "Programador back-end",
    "DBA",
    "Gestor"
    ]
    },
];

//Ejercicio 1

const filtroEdad = personas.filter(element => {
    if (element.edad < 30) {
      return element;
    }
  
    return false;
  });

console.log(filtroEdad)

  const filtroHabilidad = personas.map(function(item){
    
    return item.habilidades
})

const uniqueArray = filtroHabilidad.filter((value, index, self) => {
    const _value = JSON.stringify(value);
    return index === filtroHabilidad.findIndex(filtroHabilidad => {
      return JSON.stringify(filtroHabilidad) === _value;
    });
  });

console.log(new Set(uniqueArray[0].concat(uniqueArray[1])))



  const edades = personas.map(element => {
      
    if (element.edad > 0) {
        return element.edad;
      }
    
      return false;
    });

  const edadMedia = edades.reduce(function(a, b){
    return a + b/edades.length; 
}, 0);

  console.log(edadMedia)


// Ejercicio 2 en js

const arr = ["abcd", "efgh", "ijklmn"];

const arrSliceResult = arr.map(function(v) { return v.slice(0, 2) }) 

console.log(arrSliceResult)