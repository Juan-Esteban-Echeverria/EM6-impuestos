// CLASE CLIENTE Y SU EXPORT
export class Cliente {
    constructor(cliente, impuesto){
        this.cliente = cliente;
        this.impuesto = impuesto || {};
    }
    
    // GETTER
    get nombre(){
        return this.nombre;
    }

    // SETTER
    set nombre(nombre){
        this.nombre = nombre;
    }

    // FUNCION DE CALCULO DE IMPUESTOS
    calcularImpuesto = function(){
        return (this.impuesto.getmonto_bruto_anual - this.impuesto.getdeducciones)* 0.21
    }
}
