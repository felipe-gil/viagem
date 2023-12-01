public with sharing class VooController {
    @AuraEnabled(cacheable=true)
    public static List<criarVoo__c> listarAeroportos(){
        return [SELECT Aeroporto_de_chegada__c, Aeroporto_de_partida__c, IATA__c, Distancia__c FROM criarVoo__c];
    }
}
