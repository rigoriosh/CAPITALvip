import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { FileItem } from '../modelos/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  constructor() { }

  @Input() archivos: FileItem[] = [];

  @Output() mouseSobre: EventEmitter<boolean> = new EventEmitter();

  @HostListener('dragover', ['$event'])
  public dentroDelDrag(event: any): any{
    console.log(5555);
    this.mouseSobre.emit(true);
    this._prevenirDetener(event);
  }

  @HostListener('dragleave', ['$event'])
  public leaveDelDrag(event: any): void{
    this.mouseSobre.emit(false);
  }

  @HostListener('drop', ['$event'])
  public onDrop(event: any): void{
    console.log('on drop');
    const trasnferencia = this._getTransferencia(event);

    if (!trasnferencia) { return; }
    this.archivos.length = 0; // reemplaza el arreglo de files por la nueva carga
    this.previewImage(trasnferencia.files[0]);
    this._prevenirDetener(event);
    /* this._extraerArchivos(trasnferencia.files);
    this._prevenirDetener(event);
     */

    this.mouseSobre.emit(false);
  }

  private previewImage(input: any): any{
    console.log("5544545454");

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.archivos.push(e.target.result);
      //this.myImg = e.target.result;
      console.log(input);
      };
    reader.readAsDataURL(input);
    
  }


  private _getTransferencia(evento: any): any{ // para la compatibilidad entre diferentes navegadores
    return evento.dataTransfer ? evento.dataTransfer : evento.originalEvent.dataTransfer;
  }

  private _extraerArchivos(archivosLista: FileList): any {
    // tslint:disable-next-line:forin
    for (const propiedad in Object.getOwnPropertyNames(archivosLista)) {
      const tempFile = archivosLista[propiedad];
      if (this._archivoPuedeSerCargado(tempFile)) {
        const newFile = new FileItem(tempFile);
        this.archivos.push(newFile);
      }
    }
    console.log(this.archivos);
  }

  // validaciones
  private _archivoPuedeSerCargado(archivo: File): boolean{
    if (!this._archivoYaFueDropeado(archivo.name) && this._esImagen(archivo.type)) {
      return true;
    }else{
      return false;
    }
  }

  private _prevenirDetener(event: any): any{
    event.preventDefault();
    event.stopPropagation();
  }

  private _archivoYaFueDropeado(nombreArchivo: string): any | boolean{
    for (const archivo of this.archivos) {
      if (archivo.nombreArchivo === nombreArchivo) {
        console.log('El archivo ' + nombreArchivo + ' ya esta cargado');
        return true;
      }
    }
    return false;
  }

  private _esImagen(tipoArchivo: string): any{
    return (tipoArchivo === '' || tipoArchivo === undefined) ? false : tipoArchivo.startsWith('image');
  }

}
