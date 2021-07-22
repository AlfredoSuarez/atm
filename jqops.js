
//JQuery para la operacion

$(document).ready()
$("button").hide();

$(":radio#gridRadios1").click(function(){
    if(this.User.getBalance()!= this.User.getControlBalance()){
        alert("Revise su saldo")
    } else{
        return this.User.getBalance().value() & $("button").show()
    }
});

$(":radio#gridRadios2").click(function(){
    if(this.User.getBalance()!= this.User.getControlBalance()){
        alert("Revise su saldo")
    } else{
        return this.User.getBalance().value() & $("button").show()
    }
});

$(":radio#gridRadios3").click(function(){
    if(this.User.getBalance()!= this.User.getControlBalance()){
        alert("Revise su saldo")
    } else{
        return this.User.getBalance().value() & $("button").show()
    }
});
