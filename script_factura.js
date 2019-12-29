//CALCULO IVA

$('#valor').on('keyup', function () {
    if (this.value.length > 0) {

        //variable net ingresado
        let neto = this.value;

        //calculo iva
        let iva = neto * 0.19
        //calculo de neto total
        let total = neto * 1.19;

        //redondeo valor, y formateo en miles de valor iva
        iva = (Math.round(iva)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        
        //redondeo valor, y formateo en miles de valor total
        total = (Math.round(total)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")



        //asigno valor iva a elemento html
        $('#res_iva').html("$" + iva)

        //asigno valor bruto a elemento html
        $('#res_total').html("$" + total)


    }
});