import {LineProps, observer, React, stringFor} from "autofocus";
import {ListStore, StoreTable} from "autofocus/list";

import {Contact, ContactEntity} from "../model/main/contact";
import {referenceStore} from "../stores/reference";

const listStore = new ListStore<Contact>();
listStore.dataList = [{
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
}];

const ContactTable: new() => StoreTable<Contact, LineProps<Contact>> = StoreTable;

export const List = observer(() =>
   <ContactTable
        store={listStore}
        LineComponent={observer((props: LineProps<Contact>) => (
            <tr>
                <td>{props.data!.nom}</td>
                <td>{props.data!.prenom}</td>
                <td>{props.data!.email}</td>
                <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: props.data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle"})}</td>
            </tr>
        ))}
        columns={{
            nom: "Nom",
            prenom: "Prénom",
            email: "Email",
            civilite: "Civilité"
        }}
        sortableColumns={{
            nom: {sortAsc: true, sortDesc: true},
            prenom: {sortAsc: true},
            email: {sortDesc: true}
        }}
    />
);
