class Carro{
    public nombre:string = "Mustang";
    private marca:string = "ford";

    constructor(){}

    toString = () => console.log(`toString[ nombre : ${this.nombre}, marca : ${this.marca} ]`);
}

let carro:Carro = new Carro();

carro.toString();
