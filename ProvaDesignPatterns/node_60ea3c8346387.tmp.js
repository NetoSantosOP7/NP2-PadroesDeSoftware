class itemCardapio {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }

    static preparar(){

    }
}

class PratoPrincipal extends itemCardapio{
    constructor(nome, preco){
        super(nome, preco)
    }
    preparar(){
        console.log(`Preparando ${nome}, com preço de ${preco}`)
    }
}

class Sobremesa extends itemCardapio {
    constructor(nome, preco){
        super(nome, preco)
    }
    preparar(){
        console.log(`Esta sendo feito uma sobremesa de ${nome} a ${preco}`)
    }

}

class CriadorDeItem {

    constructor(tipo, nome, preco){
        this.tipo = tipo
        this.nome = nome
        this.preco = preco
    }
    static criarItem(tipo, nome, preco){

        }
}

class CriadorDePratoPincipal extends CriadorDeItem{
    constructor(tipo, nome, preco){
        super(tipo, nome, preco)
    }

    static criarItem() {
        return new PratoPrincipal(nome, preco)
    }
}

class CriadorDeSobremesa extends CriadorDeItem{
    constructor(nome, preco){
        super(nome, preco)

    }
    criarSobremesa(){
        return new Sobremesa(nome, preco)
    }
}