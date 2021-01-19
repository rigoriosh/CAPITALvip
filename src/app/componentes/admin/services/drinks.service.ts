import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DrinkModel } from '../../../modulos/menu/modelos/drink.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { FileItem } from '../modelos/file-item';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private urlDB = 'https://capitalvip-3ec1e-default-rtdb.firebaseio.com';

  private CARPETA_IMAGENES = 'img';
  item$: Observable<any[]>;

  constructor(private http: HttpClient, private firestore: AngularFirestore,
              private storage: AngularFireStorage) {
              this.item$ = firestore.collection('items').valueChanges();
              this.item$.subscribe(resp => {
                console.log(resp);
              });
  }

  crearDrink(drink: DrinkModel): any{
    return this.http.post(`${this.urlDB}/drinks.json`, drink)
      .pipe(
        map((resp: any) => {
          drink.id = resp.name;
          return drink;
        })
      );
  }

  actualizarDrink(drink: DrinkModel): any{

    console.log('actualizando');
    const tempDrink = {...drink}; console.log(tempDrink);
    // delete tempDrink.id;
    return this.http.put(`${this.urlDB}/drinks/${drink.id}.json`, drink);

  }

  getDrinks(): any{
    console.log(66666);
    return this.http.get(`${this.urlDB}/drinks.json`)
            .pipe(map((resp: any) => this.ajustarDataDrinks(resp)));
  }

  private ajustarDataDrinks(drinkObj: any): any{
    const bebidas: DrinkModel[] = [];
    console.log(drinkObj);
    if (drinkObj === null){return[]; }

    console.log(Object.keys(drinkObj));
    Object.keys(drinkObj).forEach(key => {
      const hero: DrinkModel = drinkObj[key];
      bebidas.push(drinkObj[key]);
    });
    // this.drinks = bebidas;
    console.log(bebidas);
    return bebidas;
  }

  getDrinkById(id: string): any{
    return this.http.get(`${this.urlDB}/drinks/${id}.json`);
  }

  deleteDrinkById(id: string): any{
    return this.http.delete(`${this.urlDB}/drinks/${id}.json`);
  }

  /// logica imagenes
  /* uploadPercent: Observable<number>;
  downloadURL: Observable<string>; */

  cargarImagenesFirebase(imagenes: FileItem[]): any{
    const myImg = imagenes[0];
    const file = myImg;
    const filePath = myImg.nombreArchivo;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    // myImg.progreso = task.percentageChanges();
    // get notified when the download URL is available
    /* task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = ref.getDownloadURL() )
     )
    .subscribe(r => console.log(r)); */
    /* const storageRef = firebase.storage().ref();
    for (const item of imagenes) {
      item.estaSubiendo = true;
      if (item.progreso >= 100) {
        continue;
      }
      const upLoadTask: firebase.storage.UploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`)
        .put(item.archivo);
      
      upLoadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot: firebase.storage.UploadTaskSnapshot) =>
          item.progreso = (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        (error) => console.error('Error al subir: ', error),
        () => {
          console.log('imagen cargada correctamente');
          item.url = upLoadTask.snapshot.downloadURL;
          item.estaSubiendo = false;
          this.guardarImagen({nombre: item.nombreArchivo, url: item.url});
        }
        );
    } */
  }

  private guardarImagen(imagen: {nombre: string, url: string}): any{
    this.firestore.collection(`/${this.CARPETA_IMAGENES}`)
      .add(imagen);
  }
}
