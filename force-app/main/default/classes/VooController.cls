public with sharing class VooController {
    @AuraEnabled(cacheable=true)
    public static List<criarVoo__c> listarAeroportos(){
        return [SELECT Name, IATA__c FROM criarVoo__c];
    }
}