// CLASE IMPUESTOS Y SU EXPORT
export class Impuestos {
    constructor(monto_bruto_anual, deducciones){
        this.monto_bruto_anual = monto_bruto_anual
        this.deducciones = deducciones
    }

    // GETTERS
    get getmonto_bruto_anual(){
        return this.monto_bruto_anual;
    }
    get getdeducciones(){
        return this.deducciones;
    }

    // SETTERS
    set setmonto_bruto_anual(nuevo_monto_bruto_anual){
        this.monto_bruto_anual = nuevo_monto_bruto_anual
    }
    set setdeducciones(nuevo_deducciones){
        this.deducciones = nuevo_deducciones
    }
}
