let cuentas = [
    {nombre:"Mali" ,saldo:200 ,password:"perro"},
    {nombre:"Gera" ,saldo:290 ,password:"gato"},
    {nombre:"Maui" ,saldo:67 ,password:"leon"}
]

function menuPrincipal() {

    const screen = document.querySelector(`body`);

    screen.innerHTML = "";

    const titulo = document.createElement("h1");
    const guia = document.createElement("h2");
    const user0 = document.createElement("button");
    const user1 = document.createElement("button");
    const user2 = document.createElement("button");

    titulo.textContent = "Bienvenido";
    guia.textContent = "Por favor seleccione una cuenta:"
    user0.textContent = "Mali";
    user1.textContent = "Gera";
    user2.textContent = "Maui";

    user0.addEventListener("click", () => selectUser(0));
    user1.addEventListener("click", () => selectUser(1));
    user2.addEventListener("click", () => selectUser(2));

    document.body.appendChild(titulo);
    document.body.appendChild(guia);
    document.body.appendChild(user0);
    document.body.appendChild(user1);
    document.body.appendChild(user2);

}

let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Regresar al menú principal";
botonBorrar.addEventListener("click", () => menuPrincipal());

function crearCalculos(index,accion) {

    const contenedor = document.createElement("div");

    const inputMonto = document.createElement("input");

    const enviarBoton = document.createElement("button");
    enviarBoton.textContent = "Enviar";

    enviarBoton.addEventListener("click", ({}) => {

        let valorTotalActual;
        let mensaje;

        if(accion === "agregar") {
            valorTotalActual = cuentas[index].saldo + +inputMonto.value;
            mensaje = `El monto ingresado fue: ${inputMonto.value} pesos. Su nuevo saldo es: ${valorTotalActual} pesos`;
        } else if (accion=== "retirar") {
            valorTotalActual = cuentas[index].saldo - +inputMonto.value;
            mensaje = `El monto retirado fue: ${inputMonto.value} pesos. Su nuevo saldo es: ${valorTotalActual} pesos`;
        }
        
        if(valorTotalActual <= 990 && valorTotalActual>= 10) {
            
            cuentas[index].saldo = valorTotalActual;
            
            alert(mensaje);

        } else {
            alert(`Error!!! el monto total estaría por fuera de los rangos permitidos`);
        }

        contenedor.innerHTML = "";

    })

    document.body.appendChild(contenedor);
    contenedor.appendChild(inputMonto);
    contenedor.appendChild(enviarBoton);

}

function analizarPassword(index,input) {

    if(
        (index===0 && input.value==="perro")||
        (index===1 && input.value==="gato")||
        (index===2 && input.value==="leon")
    ) {
        const screen = document.querySelector(`body`);

        screen.innerHTML = "";

        const consultar = document.createElement("button");
        const ingresar = document.createElement("button");
        const retirar = document.createElement("button");

        consultar.textContent = "Consultar saldo";
        ingresar.textContent = "Ingresar monto";
        retirar.textContent = "Retirar monto";

        consultar.addEventListener("click", () => {
            alert(`Su saldo actual es de ${cuentas[index].saldo}`);
        })

        ingresar.addEventListener("click", () => crearCalculos(index,"agregar"));

        retirar.addEventListener("click", () => crearCalculos(index, "retirar"))

        document.body.appendChild(consultar);
        document.body.appendChild(ingresar);
        document.body.appendChild(retirar);
        document.body.appendChild(botonBorrar);


    } else {
        alert("Password errado. Por favor intente nuevamente");
    }

}

function selectUser (index) {

    const screen = document.querySelector(`body`);

    screen.innerHTML = "";

    let saludo = document.createElement("h2");

    saludo.textContent = `Hola ${cuentas[index].nombre}`;

    let insertPassword = document.createElement("input");

    insertPassword.type = "password";

    let loginButton = document.createElement("button");

    loginButton.textContent = "Login";

    loginButton.addEventListener("click", () => analizarPassword(index,insertPassword))

    document.body.appendChild(saludo);
    document.body.appendChild(insertPassword);
    document.body.appendChild(loginButton);
    document.body.appendChild(botonBorrar);

}