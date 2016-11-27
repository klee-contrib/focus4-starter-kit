/* tslint:disable */

import {Structure} from "../model/main/structure";
import {Suivi} from "../model/main/suivi";

export function loadStructure(id: number) {
    return new Promise<Structure>(resolve => {
        setTimeout(() => {
            resolve({
                id: 1,
                denominationSociale: "Ma structure",
                capitalSocial: 14503.32,
                isBeneficiaireEffectif: true,
                dateDemande: new Date(2016, 4, 23).toISOString(),
                statutJuridiqueCode: "SARL",
                adresse: {
                    id: 1,
                    ligne1: "13 rue",
                    codePostal: "75016",
                    ville: "Paris"
                }
            });
        }, 250);
    });
}

export function saveStructure(structure: Structure) {
    return new Promise<Structure>(resolve => {
        setTimeout(() => {
            resolve(structure);
        }, 250);
    });
}

export function loadSuivi() {
    return new Promise<Suivi>(resolve => {
        setTimeout(() => {
            resolve({
                dateCreation: new Date().toISOString(),
                nombreEvenement: 3,
                evenementList: [
                    {id: 1, date: new Date(2016, 3, 1).toISOString(), commentaire: "Ceci est un commentaire"},
                    {id: 2, date: new Date(2016, 2, 1).toISOString(), commentaire: "Ceci est un autre commentaire"},
                    {id: 3, date: new Date(2016, 1, 1).toISOString(), commentaire: "Ceci est un commentaire pas très intéressany"}
                ]
            });
        }, 250);
    });
}
