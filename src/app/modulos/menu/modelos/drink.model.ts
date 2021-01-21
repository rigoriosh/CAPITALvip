
 export class DrinkModel{
    id: number | undefined;
    categoria: string | undefined;
    precio: number | undefined;
    imagen: string;
    descripcion: string | undefined;
    backgroud = '';
    nombre: string | undefined;
    cantidad: number | undefined;

    constructor(){
        this.imagen = '';
    }
}

