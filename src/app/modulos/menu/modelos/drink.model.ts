
 export class DrinkModel{
    id: number;
    categoria: string;
    precio: number;
    imagen: string;
    descripcion: string;
    backgroud: string;
    nombre: string;
    cantidad: number;

    constructor(){
        this.id = 0;
        this.categoria = '';
        this.precio = 0;
        this.imagen = '';
        this.descripcion = '';
        this.backgroud = '';
        this.nombre = '';
        this.cantidad = 0;
    }
}

