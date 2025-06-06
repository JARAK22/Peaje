export default class Peaje {
    constructor() {
        this.automoviles = 0;
        this.buses = 0;
        this.camiones = 0;
        this.totalRecaudado = 0;
    }
    getAutomoviles() {
        return this.automoviles;
    }
    getBuses() {
        return this.buses;
    }
    getCamiones() {
        return this.camiones;
    }
    getTotalRecaudado() {
        return this.totalRecaudado;
    }
    setAutomoviles(automoviles) {
        this.automoviles += automoviles;
        this.totalRecaudado += 5000;
    }
    setBuses(buses) {
        this.buses += buses;
        this.totalRecaudado += 10000;
    }
    setCamiones(camiones) {
        this.camiones += camiones;
        this.totalRecaudado += 15000;
    }
    setTotalRecaudado(totalRecaudado) {
        this.totalRecaudado = totalRecaudado;
    }
}