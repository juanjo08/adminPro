import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {

    this.subscripcion = this.regresaObservable().pipe( 

      retry(3)

      )
    .subscribe (
      
      numero => console.log('Subs ', numero),
      error => console.log('Error en obs ', error),
      () => console.log('El observador termino! ')
      );

   }

  ngOnInit() {
  }


  ngOnDestroy(){

    console.log("La pagina se va a cerrar");
    this.subscripcion.unsubscribe();

  }

  regresaObservable() : Observable <any> {

    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      
          let intervalo = setInterval ( () => {
  
            contador += 1;

            const salida = {

              valor : contador

            };

            observer.next( salida );
            
  
           // if(contador === 3){
  
             // clearInterval(intervalo);
             // observer.complete();
  
           // }

          }, 1000);
  
      }).pipe(

        map( resp =>  resp.valor), 

        filter( (valor, index) => {
          //console.log(valor, index);

            if((valor % 2) === 1){

              return true;
              // impar

            }else{

              return false;
              // par
            }
        })

      );
  }

}
