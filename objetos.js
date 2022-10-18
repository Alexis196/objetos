const yo = {
    nombre: 'Alexis',
    apellido: 'Franco',
    edad: 26,
    altura: 1.71,
    eresDesarrollador: true
};

let miEdad = yo.edad;
console.log(miEdad);

let listaPersonal = [
    yo,
    {
        nombre: 'Javier',
        apellido: 'Gonzalez',
        edad: 43,
        altura: 1.65,
        esDesarrollador: false
    },
    {
        nombre: 'Gaston',
        apelldido: 'Hernandez',
        edad: 38,
        altura: 1.80,
        esDesarrollador: false
    }
];

console.log(listaPersonal);

let listaOrdenada = listaPersonal.sort((a, b) => a.edad - b.edad);
console.log(listaOrdenada);