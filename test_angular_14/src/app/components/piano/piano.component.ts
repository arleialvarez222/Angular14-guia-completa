import { Component } from '@angular/core';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {

  aplicarSonido(numero: number){
    const audio = new Audio();
    audio.src = `../../assets/sonidos/note${numero}.wav`;
    audio.load();
    audio.play()
  }
}
