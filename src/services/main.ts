import {Suivi} from "../model/main/suivi";

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
