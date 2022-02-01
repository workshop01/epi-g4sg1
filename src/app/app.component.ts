import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP1 : Binding';

  ch: boolean = true;
  nb: number = 0;

  objet = {
    titre: 'tp 1 '
  }

  //définition d'une fonction
  test_click() {
    alert(this.title)
  }

  inc() {
    this.nb++
  }
  dec() {
    this.nb--
  }

  test_keyup(event) {
    /*  event : keyup
        target : input
        value : valeur saisie
    */
    console.log(event.target.value)
  }

  test_change(evt){
    alert(evt.target.value)
  }

  
}
