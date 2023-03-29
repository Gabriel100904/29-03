class modelos{
    constructor(marca,cor){
        this.marca = marca
        this.cor = cor
    }

    acelerarVeiculo(){
        console.log('vrumm')
    }
    acelerarVeiculoKM(km){
        console.log('vrumm'+km+' kms')
    }
    DistanciaMax(){
        return '100km/h'
    }
}