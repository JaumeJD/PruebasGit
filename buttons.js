/*Realiza una web con un cuadro de texto y dos botones 
("Crear botones" y "Reiniciar"):
• El usuario introduce un número N y pulsa en "Crear botones" y se crean N botones 
entre los dos anteriores [3p] con el texto rgb(aleatorio,aleatorio,aleatorio) 
y ese color de fondo [1p].
• Al pulsar sobre alguno de los nuevos botones creados de forma dinámica, 
el fondo de la web cambiará a ese color [4p]
• Al pulsar sobre "Reiniciar" volverá todo a como estaba al principio.[2p]*/

//Creacion de los botones
let crearButton = document.querySelector('.crearBotones');
let reiniciarButton = document.querySelector('.reiniciar');

crearButton.addEventListener('click', () => {

    let ubicacion = document.querySelector('.crearBotones');
    let inputButtons = document.getElementsByClassName('nBotones')
    console.log(inputButtons);

    //Bucle para generar los botones.
    for (let index = 0; index < 5; index++) {

        let newButton = document.createElement('button');

        let red = Math.round(Math.random() * 255);
        let green = Math.round(Math.random() * 255);
        let blue = Math.round(Math.random() * 255);

        ubicacion.insertAdjacentElement('afterend', newButton)
        newButton.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`)
        newButton.textContent = `rgb(${red}, ${green}, ${blue})`

        newButton.addEventListener('click', () => {
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
        })
    }
});

reiniciarButton.addEventListener('click', () => {

    document.body.style.backgroundColor = 'rgba(255, 255, 255)'

});

