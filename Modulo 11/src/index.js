const reservas = [
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 3
    },
    {
        tipoHabitacion: "standard",
        desayuno: false,
        pax: 1,
        noches: 4
    },
    {
        tipoHabitacion: "suite",
        desayuno: true,
        pax: 2,
        noches: 1
    }
];

class calculaHotel {
    constructor() {
        this._reservas = [];
        this._subtotal = 0;
        this._total = 0;
    }

    precioHabitacion(tipoHabitacion) {
        switch (tipoHabitacion) {
            case "standard":
                return 100;
            case "suite":
                return 150;
        }

        return 1;
    }

    personaAdicional(personas) {
        return personas > 1 ? 40 * (personas - 1) : 0;
    }

    sumaDesayuno(desayuno) {
        return desayuno == true ? 15 : 0;
    }

    calculaSubtotal() {
        this._subtotal = reservas.reduce(
            (acumulado, { tipoHabitacion, desayuno, pax, noches }) => acumulado + noches * (this.precioHabitacion(tipoHabitacion) + this.personaAdicional(pax) + this.sumaDesayuno(desayuno) * pax),
            0
        );
    }

    calculaTotal() {
        this._total = reservas.reduce(
            (acumulado, { tipoHabitacion, desayuno, pax, noches }) => acumulado + noches * (this.precioHabitacion(tipoHabitacion) + this.personaAdicional(pax) + this.sumaDesayuno(desayuno) * pax) * 1.21,
            0
        );
    }

    get subtotal() {
        return this._subtotal;
    }

    get total() {
        return this._total;
    }

    set reservas(listaReservas) {
        this._reservas = listaReservas;
        this.calculaSubtotal();
        this.calculaTotal();
    }
}

class ClientePrivado extends calculaHotel {
    constructor() {
        super();
    }
}

class Touroperador extends calculaHotel {
    constructor() {
        super();
    }

    precioHabitacion(tipoHabitacion) {
        return tipoHabitacion = 100;
    }

    get total() {
        return (this._total * 0.85);
    }
}

console.log("** Cliente normal **");
const clientePrivado = new ClientePrivado();
clientePrivado.reservas = reservas;
console.log("Subtotal", clientePrivado.subtotal);
console.log("Total", clientePrivado.total);

console.log("** Tour operador **");
const touroperador = new Touroperador();
touroperador.reservas = reservas;
console.log("Subtotal", touroperador.subtotal);
console.log("Total", touroperador.total);