
//Query event handlers

$(document).ready()
$("button").hide();

$("input[type=text]").attr(function(){
    if (this.user1.name() || this.user2.name() || this.user3.name() == true) {
        alert("Dato correcto")
    } else {
        alert("Usuario no dado de alta")
    }
});

$("input[type=password]").attr(function(){
    if (this.user1.password()==true & this.user1.name() == true || this.user2.password() ==true & this.user2.name() ==true || this.user3.password() == true & this.user3.name() ==true) {
        alert("Datos correctos") & $("button".show())
    } else {
        alert("Por favor, verifique sus credenciales.")
    }
});

$(":radio#gridRadios1").click(function(){
    alert("Usted ha elegido consulta de saldo, desea continuar?")
});

$(":radio#gridRadios2").click(function(){
    alert("Usted ha elegido deposito, desea continuar?")
});

$(":radio#gridRadios3").click(function(){
    alert("Usted ha elegido retiro, desea continuar?")
});


