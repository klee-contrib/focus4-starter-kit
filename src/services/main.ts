/* tslint:disable */

import {Structure} from "../model/main/structure";
import {Suivi} from "../model/main/suivi";
import {Contact} from '../model/main/contact';

export function loadStructure(id?: number) {
    return new Promise<Structure>(resolve => {
        setTimeout(() => {
            resolve({
                id,
                denominationSociale: `Ma structure ${id ? id : ""}`,
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
            } as Structure);
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
                    {id: 3, date: new Date(2016, 1, 1).toISOString(), commentaire: "Ceci est un commentaire pas très intéressant"}
                ]
            });
        }, 250);
    });
}

export function loadContactList() {
    return new Promise<Contact[]>(resolve => {
        setTimeout(() => {
            resolve([{
                civiliteCode: "MME",
                email: "contact1@contact.com",
                id: 1,
                nom: "Contact 2",
                prenom: "Yolo 3"
            }, {
                civiliteCode: "M",
                email: "contact2@contact.com",
                id: 2,
                nom: "Contact 3",
                prenom: "Yolo 1"
            }, {
                civiliteCode: "MME",
                email: "contact3@contact.com",
                id: 3,
                nom: "Contact 1",
                prenom: "Yolo 2"
            }, {
                civiliteCode: "MME",
                email: "contact4@contact.com",
                id: 4,
                nom: "Contact 4",
                prenom: "Yolo 42"
            }, {
                civiliteCode: "MME",
                email: "contact5@contact.com",
                id: 5,
                nom: "Contact 5",
                prenom: "Yolo 36"
            }, {
                civiliteCode: "MME",
                email: "contact6@contact.com",
                id: 6,
                nom: "Contact 6",
                prenom: "Yolo 25"
            }]);
        }, 250);
    });
}
