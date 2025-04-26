
let alerta = (msg) => {
    msg = "alerta() -> " + msg;
    
    function criarBomDia(){
        return 'Bom dia jovens!';
    }
    console.log(criarBomDia() + msg);
}