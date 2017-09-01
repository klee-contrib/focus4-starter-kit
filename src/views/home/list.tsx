import {observer, React, stringFor, timelineFor} from "focus4";
import {ListStore, storeListFor, storeTableFor} from "focus4/list";
import {ActionBar} from "focus4/search";

import {Contact, ContactEntity} from "../../model/main/contact";
import {referenceStore} from "../../stores";

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

const TableLine = observer(({data}: {data: Contact}) => (
    <tr>
        <td>{data!.nom}</td>
        <td>{data!.prenom}</td>
        <td>{data!.email}</td>
        <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle" as "libelle"})}</td>
    </tr>
));

const ListLine = observer(({data}: {data: Contact}) => (
    <div style={{background: "white", padding: "15px 50px", marginBottom: "5px"}}>
        {`${stringFor({$entity: ContactEntity.fields.civiliteCode, value: data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle" as "libelle"})} ${data!.prenom} ${data!.nom} ${data!.email}`}
    </div>
));

export const List = observer(() =>
    <div>
        {storeTableFor({
            store: listStore,
            RowComponent: TableLine,
            columns: {
                nom: "Nom",
                prenom: "Prénom",
                email: "Email",
                civilite: "Civilité"
            },
            sortableColumns: ["nom", "prenom"]
        })}
        <br />
        <ActionBar store={listStore} hasSelection={true} />
        {storeListFor({
            store: listStore,
            LineComponent: ListLine,
            hasSelection: true
        })}
        {timelineFor({data: listStore.dataList, TimelineComponent: ListLine, dateSelector: line => ({$entity: ContactEntity.fields.id, value: `${line.id}`})})}
    </div>
);
