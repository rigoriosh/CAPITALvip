export class OrderModel {
    public pedido = '';
    public total = 0;
    public idOrder = '';
    public mesa = 0;
    public facturado = false;
    public fecha: Date | undefined;

    constructor(pedido: any) {
        this.pedido = pedido.pedido;
        this.total = pedido.total;
        this.mesa = pedido.mesa;
    }
}
