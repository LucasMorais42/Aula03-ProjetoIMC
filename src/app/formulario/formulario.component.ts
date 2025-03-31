import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  altura: number=0;
  peso: number=0;
  IMC: number=0;
  classificacao_IMC: string='';
  imagem: string='';

 
  CalcularIMC(){

    if ((this.peso==0.0) || (this.altura==0.0)){
      alert("Digite algum valor maior que 0.");
      this.imagem='';
      this.classificacao_IMC='Erro no calculo!';
      this.IMC=NaN;
    }

    else{
        this.IMC = this.peso/Math.pow(this.altura, 2);


        if(this.IMC<18.5){
          this.classificacao_IMC = 'Baixo Peso';
          this.imagem='/abaixo_peso.png';
        }

        else if(this.IMC>=18.5 && this.IMC<=24.9){
          this.classificacao_IMC = 'Peso Normal';
          this.imagem='/peso_normal.png';
        }

        else if(this.IMC>=25.0 && this.IMC<=29.9){
          this.classificacao_IMC = 'Sobrepeso';
          this.imagem='/acima_peso.png';
        }

        else if(this.IMC>=30.0 && this.IMC<=34.9){
          this.classificacao_IMC = 'Obesidade Grau I';
          this.imagem='/obesidade1.png';
        }

        else if(this.IMC>=35.0 && this.IMC<=39.9){
          this.classificacao_IMC = 'Obesidade Grau II';
          this.imagem='/obesidade2.png';
        }

        else{
          this.classificacao_IMC = 'Obesidade Grau III';
          this.imagem='/obesidade3.png';
        }

      }
    }

    

}
