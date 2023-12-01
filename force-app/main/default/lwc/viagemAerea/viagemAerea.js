import { LightningElement } from 'lwc';
import getAeroportos from '@salesforce/apex/VooController.listarAeroportos';

export default class ViagemAerea extends LightningElement  {
    value = "";
    selecao = [];

   connectedCallback(){
    getAeroportos().then(resultado =>{
       let aux = [];
       for(let i = 0; i < resultado.length ; i++){
        aux.push({label: resultado[i].Name, value: resultado[i].IATA__c});
       }
       this.selecao = aux;
    });
   }

   get aeroportosPartida(){
    return this.selecao;
   }
   get aeroportosDestino(){
    return this.selecao;
   }

   selecionarPartida(){

   }
   selecionarDestino(){

   }
}

