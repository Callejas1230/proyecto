const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
function generarCorreo() {
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let fechaNacimiento = document.getElementById('fechaNacimiento').value;
    let anioNacimiento = new Date(fechaNacimiento).getFullYear().toString().slice(-2);
    if (nombre && apellidos && fechaNacimiento) {
        let inicialApellido = apellidos.split(' ')[0].charAt(0);
        let letrasNombre = nombre.slice(1, 3);
        let ultimasLetrasApellido = apellidos.split(' ')[1].slice(-2);
        let segundoNombre = nombre.split(' ')[1] || '';
        let ultimasLetrasSegundoNombre = segundoNombre.slice(-5);
        let correo = inicialApellido + letrasNombre + ultimasLetrasApellido + ultimasLetrasSegundoNombre + anioNacimiento + '@gmail.com';
        document.getElementById('correo').value = correo;
    }
}

function validarContrasena() {
    let contrasena = document.getElementById('contrasena').value;
    let patron = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=.]).{8,}$/;
    if (patron.test(contrasena)) {
        document.getElementById('confirmarContrasena').style.display = 'inline';
        document.getElementById('contrasenaError').style.display = 'none';
        return false;
    } else {
        document.getElementById('contrasenaError').style.display = 'inline';
        document.getElementById('confirmarContrasena').style.display = 'none';
        return false;
    }
}

function confirmarContrasena() {
    alert('Contraseña confirmada correctamente');
    document.getElementById('formularioRegistro').submit();
}

function cambiarContrasena() {
    document.getElementById('contrasena').value = '';
    document.getElementById('contrasenaError').style.display = 'none';
    document.getElementById('confirmarContrasena').style.display = 'none';
}
function registrarCuenta() { 
    if (validarContrasena()) { 
        let nombre = document.getElementById('nombre').value; 
        let apellidos = document.getElementById('apellidos').value; 
        let fechaNacimiento = document.getElementById('fechaNacimiento').value; 
        let correo = document.getElementById('correo').value; 
        let contrasena = document.getElementById('contrasena').value; 
        
        let usuario = { 
            nombre, 
            apellidos, 
            fechaNacimiento, 
            correo, 
            contrasena 
        }; 
        
        localStorage.setItem('usuario', JSON.stringify(usuario)); alert('Registro exitoso. Ahora puedes iniciar sesión.'); 
        
        window.location.href = 'https://callejas1230.github.io/landingpg/';  
    } 
} 

function iniciarSesion() {
    let usuarioGuardado = JSON.parse(localStorage.getItem('usuario')); 
    let correo = document.querySelector('.login input[type="text"]').value; 
    let contrasena = document.querySelector('.login input[type="password"]').value; 
    if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) { 
        alert('Inicio de sesión exitoso.'); 
        window.location.href = 'https://callejas1230.github.io/landingpg/'; 
    } else { 
        alert('Usuario o contraseña incorrectos.'); 
    } }