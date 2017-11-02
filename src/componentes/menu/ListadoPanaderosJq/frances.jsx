const periodo = [
    'diario',         'semanal',    'quincenal',
    'mensual',        'bimestral',  'trimestral',
    'cuatrimestral',  'semestral',  'anual',
]

const tasa_tipo = ['mensual', 'anual']

const calcTasa = (tasa, periodo) => {
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

const getTasa = (tasa, tasa_tipo, periodo) => {
    if (tasa_tipo === "anual") { tasa = tasa / 12 }
    tasa = tasa / 100.0
    return calcTasa(tasa, periodo)
}

const getValorDeCuotaFija = (monto, tasa, cuotas, periodo, tasa_tipo) => {
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

export {
    getValorDeCuotaFija, getTasa, calcTasa, tasa_tipo, periodo, getAmortizacion
}