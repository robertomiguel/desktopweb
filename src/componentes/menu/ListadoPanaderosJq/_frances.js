function calcTasa (tasa, periodo) {
    return {
        'diario'       : tasa / 30.4167,
        'semanal'      : tasa / 4.34524,
        'quincenal'    : tasa / 2,
        'bimestral'    : tasa * 2,
        'trimestral'   : tasa * 3,
        'cuatrimestral': tasa * 4,
        'semestral'    : tasa * 6,
        'anual'        : tasa * 12,
        'mensual'      : tasa
    }[periodo];
}

function getTasa(tasa, tasa_tipo, periodo) {
     if (tasa_tipo === "anual") { tasa = tasa / 12 }
     tasa = tasa / 100.0
    return calcTasa(tasa, periodo)
}

function getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo) {
    tasa = getTasa(tasa, tasa_tipo, periodo);
    let valor = monto *( (tasa * Math.pow(1 + tasa, cuotas)) / (Math.pow(1 + tasa, cuotas) - 1) );
    return valor.toFixed(2);
}

function getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo) {
    let valor_de_cuota = getValorDeCuotaFija(monto, tasa, cuotas, periodo, tasa_tipo)
    let saldo_al_capital = monto
    let items = {
        totales: {
            interes: 0,
            abono_al_capital: 0,
            valor_de_cuota: 0,
        },
        listado: [],
    }
    let numero              = 0
    let abono_al_capital    = 0
    let interes             = 0

    for (let i=0; i < cuotas; i++) {
        interes             = saldo_al_capital * getTasa(tasa, tasa_tipo, periodo);
        abono_al_capital    = valor_de_cuota - interes;
        saldo_al_capital    -= abono_al_capital;
        numero              = i + 1;

        items.listado.push({
            numero              : numero,
            interes             : interes.toFixed(2),
            abono_al_capital    : abono_al_capital.toFixed(2),
            valor_de_cuota      : (valor_de_cuota*1).toFixed(2),
            saldo_al_capital    : saldo_al_capital.toFixed(2),
        })

        items.totales.interes += interes
        items.totales.abono_al_capital += abono_al_capital
        items.totales.valor_de_cuota += valor_de_cuota*1

    }
    // diferencia de capital aplicada a la última cuota
    let ultima_cuota = items.listado[ cuotas - 1 ].valor_de_cuota * 1
    let saldo_capital_final = items.listado[ cuotas - 1 ].saldo_al_capital * 1
    items.listado[ cuotas - 1 ].valor_de_cuota = (ultima_cuota + saldo_capital_final).toFixed(2)
    items.listado[ cuotas - 1 ].saldo_al_capital = 0
    console.log(items.totales)
    return items;
}

function formatoMoneda(numero) {
    numero = (numero*1).toFixed(2)
    if (numero*1 === 0 ) return '$ 0,00'
    let decimales = numero.split('.')[1]
    let enteros = numero.split('.')[0].replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ".")
    return `$ ${enteros},${decimales}`
}

function calcular() {
    let monto = document.getElementById("input_monto").value
    let cuotas = document.getElementById("input_cuotas").value
    let tasa = document.getElementById("input_tasa").value
//
//     let validarIngreso = function (monto, cuotas, tasa) {
//         return (!monto) ? true : 'Falta el monto inicial'
//     }
/*
    if (!monto) alert('Indique el monto');
    if (!cuotas) alert('Indique las cuotas');
    if (!tasa) alert('Indique la tasa');
    if (parseInt(cuotas) < 1) alert('Las cuotas deben ser de 1 en adelante');
*/
    // if (!validarIngreso(monto, cuotas, tasa)) {
    //     alert(validarIngreso)
    //     return
    // }

    const select_periodo = document.getElementById("select_periodo")
    periodo = select_periodo.options[select_periodo.selectedIndex].value;
    const select_tasa_tipo = document.getElementById("select_tasa_tipo")
    tasa_tipo = select_tasa_tipo.options[select_tasa_tipo.selectedIndex].value;
    const items = getAmortizacion(monto, tasa, cuotas, periodo, tasa_tipo)
    const tbody = document.getElementById("tbody_1")
    tbody.innerHTML = "";

    let tr = ''

   // if (parseInt(cuotas) > 3000) { alert("Ha indicado una cantidad excesiva de cuotas, porfavor reduzcala a menos de 3000"); return; }

    items.listado.map((linea, indice) => {
        tbody.innerHTML +=
            `<tr key="ta${indice}"><td>${linea.numero}</td>` +
            `<td>${formatoMoneda(linea.interes)}</td>`+
            `<td>${formatoMoneda(linea.abono_al_capital)}</td>`+
            `<td>${formatoMoneda(linea.valor_de_cuota)}</td>`+
            `<td>${formatoMoneda(linea.saldo_al_capital)}</td></tr>`
        //tbody.innerHTML += tr;
    })
    tbody.innerHTML += `<tr><td>Totales:</td>` +
        `<td>${formatoMoneda(items.totales.interes)}</td>` +
        `<td>${formatoMoneda(items.totales.abono_al_capital)}</td>` +
        `<td>${formatoMoneda(items.totales.valor_de_cuota)}</td></tr>`

    const div1 = document.getElementById("div-valor-cuota")

    valor = formatoMoneda(items.listado[0].valor_de_cuota);
    div1.innerHTML = valor;

    let ustedPaga = 'Usted estará pagando'

    let msg = {
        'diario'        : `${ustedPaga} ${valor}, todos los dias durante ${items.listado.length} dias.`,
        'semanal'       : `${ustedPaga} ${valor}, semanalmente durante ${items.listado.length} semanas."`,
        'mensual'       : `${ustedPaga} ${valor}, mensualmente durante ${items.listado.length} meses.`,
        'quincenal'     : `${ustedPaga} ${valor}, de manera quincenal por un periodo de ${items.listado.length} quincenas.`,
        'bimestral'     : `${ustedPaga} ${valor}, cada 2 meses durante un periodo de ${items.listado.length} bimestres.`,
        'trimestral'    : `${ustedPaga} ${valor}, cada 3 meses durante ${items.listado.length} trimestres.`,
        'cuatrimestral' : `${ustedPaga} ${valor}, cada cuatrimestre (4 meses) por un periodo de ${items.listado.length} cuatrimestres.`,
        'semestral'     : `${ustedPaga} ${valor}, cada 6 meses durante ${items.listado.length} semestres`,
        'anual'         : `${ustedPaga} ${valor}, anualmente por un periodo de ${items.listado.length} años`,
    }

    const div2 = document.getElementById("div-comentario")

    div2.innerHTML = msg[periodo];
}