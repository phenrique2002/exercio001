import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  addBotao = false;
  esconderInputs = true;
  addBotaoCadastro = true;
  addBotaoExcluir = true;
  addBotaoProcurar = true;

  novo() {
    this.addBotao = true;
    this.esconderInputs = false;
    this.addBotaoCadastro = false;
  }
  excluir() {
    this.addBotao = true;
    this.addBotaoExcluir = false;
  }
  procurar() {
    this.addBotao = true;
    this.addBotaoProcurar = false;
  }
}
