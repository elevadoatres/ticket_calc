
$('#valor').on('keyup', function () {
    if (this.value.length > 0) {

        //variable valor ingresado
        let valor = this.value;

        //calculo de valor liquido
        let val_liquido = valor / 0.9;

        //calculo de valor bruto
        let val_bruto = valor * 0.9;

        //redondeo valor, y formateo en miles de valor liquido
        val_liquido = (Math.round(val_liquido)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        //redondeo valor, y formateo en miles de valor bruto
        val_bruto = (Math.round(val_bruto)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        //formateo en miles el valor ingresado
        valor = valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

        //asigno valor liquido a elemento html
        $('#res_liq').html("$" + val_liquido)

        //asigno valor bruto a elemento html
        $('#val_in').html("$" + valor)

        //asigno valor ingresado a elemento html
        $('#tot_liquido').html("$" + valor)

        //asigno valor a total liquido
        $('#tot_bruto').html("$" + val_bruto)

    }
});