import {LineProps, observer, React, stringFor, timelineFor} from "autofocus";
import {ActionBar, ListStore, StoreList, StoreTable} from "autofocus/list";

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
const ContactList: new() => StoreList<Contact, LineProps<Contact>> = StoreList;

const TableLine = observer(({data}: LineProps<Contact>) => (
    <tr>
        <td>{data!.nom}</td>
        <td>{data!.prenom}</td>
        <td>{data!.email}</td>
        <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle"})}</td>
    </tr>
));

const ListLine = observer(({data}: LineProps<Contact>) => (
    <div>{`${stringFor({$entity: ContactEntity.fields.civiliteCode, value: data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle"})} ${data!.prenom} ${data!.nom} ${data!.email}`}</div>
));

export const List = observer(() =>
    <div>
        <ContactTable
            store={listStore}
            LineComponent={TableLine}
            columns={{
                nom: "Nom",
                prenom: "Prénom",
                email: "Email",
                civilite: "Civilité"
            }}
            sortableColumns={["nom", "prenom"]}
        />
        <br />
        <ActionBar store={listStore} hasSelection={true} />
        <ContactList
            store={listStore}
            LineComponent={ListLine}
            hasSelection={true}
        />
        {timelineFor({data: listStore.dataList, LineComponent: ListLine, dateSelector: line => ({$entity: ContactEntity.fields.id, value: `${line.id}`})})}
    </div>
);
