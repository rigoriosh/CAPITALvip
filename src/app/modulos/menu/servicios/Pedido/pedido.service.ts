import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from 'src/app/componentes/admin/modelos/order-model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private urlDB = 'https://capitalvip-3ec1e-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  insertPedido(pedido: OrderModel): any{
    return this.http.post(`${this.urlDB}/pedidos.json`, pedido)
      .pipe(
        map((resp: any) => {
          pedido.idOrder = resp.name;
          console.log(pedido);
          return pedido;
        })
      );
  }

  actualizarPedido(order: OrderModel): any{
    return this.http.put(`${this.urlDB}/pedidos/${order.idOrder}.json`, order);
  }

  getPedidos(): any{
    return this.http.get(`${this.urlDB}/pedidos.json`)
                    .pipe(map((resp: any) => this.ajustarPedidos(resp)));
  }
  ajustarPedidos(resp: any): any {
    console.log(resp);
    if (resp === null){return[]; }
    const pedidos: any = [];
    Object.keys(resp).forEach(key => {
      if (!resp[key].facturado) {pedidos.push(resp[key]);}
    });
    pedidos.forEach((pedido: any) => {
      if (typeof(pedido.pedido) !== 'object'){
        pedido.pedido = JSON.parse(pedido.pedido);
      }
    });
    return pedidos;
  }


}
