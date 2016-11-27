/* tslint:disable */

import {ListServiceParams, ListServiceResponse} from "autofocus/list";

import {Contact} from "../model/main/contact";

export function loadList(data: ListServiceParams) {
    return new Promise<ListServiceResponse<Contact>>(resolve => {
        setTimeout(() => {
            resolve({
                dataList: [{
                    civiliteCode: "MME",
                    email: "contact1@contact.com",
                    id: 1,
                    nom: "Contact1",
                    prenom: "Yolo1"
                }, {
                    civiliteCode: "M",
                    email: "contact2@contact.com",
                    id: 2,
                    nom: "Contact2",
                    prenom: "Yolo2"
                }, {
                    civiliteCode: "MME",
                    email: "contact3@contact.com",
                    id: 3,
                    nom: "Contact3",
                    prenom: "Yolo3"
                }],
                totalCount: 3
            });
        }, 250);
    });
}
