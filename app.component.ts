import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-angular';
  habilita() {
    var x = document.querySelectorAll("input")
    for (var i = 1; i < x.length; i++) {
      x[i].disabled = false;
    }
    var y = document.querySelectorAll("button")
    var tamanho = y.length;
    for (var i = 0; i < y.length - 2; i++) {
      y[i].style.display = "none";
    }
    y[tamanho - 1].style.display = "block";
    y[tamanho - 2].style.display = "block";
  }
  limparCampos() {
    var x = document.querySelectorAll("input")
    for (var i = 1; i < x.length; i++) {
      x[i].value = "";
      x[i].disabled = true;
    }
    var y = document.querySelectorAll("button")
    var tamanho = y.length;
    for (var i = 0; i < y.length - 2; i++) {
      y[i].style.display = "block";
    }
    y[tamanho - 1].style.display = "none";
    y[tamanho - 2].style.display = "none";
  }
}

