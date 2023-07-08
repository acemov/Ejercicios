const perfil = "Asistente";

if (perfil === "") {
    console.log("Debe especificar el perfil del usuario");
}
else if (perfil === "administrador" ||perfil === "Administrador" ||  perfil === "ADMINISTRADOR") {
    console.log("Usted tiene todos los privilegios de uso del sistema");
}
else if (perfil === "asistente" || perfil === "Asistente" ||  perfil === "ASISTENTE") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}
else if (perfil === "invitado" || perfil === "Invitador" || perfil === "INVITADOR") {
    console.log("Usted sólo tiene permisos de consultar datos");
}
else {
    console.log("Debe especificar un perfil válido");
}