import {observer, React, stringFor, timelineFor} from "focus4";
import {getDraggedItems, ListStore, storeListFor, storeTableFor} from "focus4/list";
import {ActionBar} from "focus4/search";
import {IObservableArray, runInAction} from "mobx";
import {ConnectDropTarget, DragDropContext, DropTarget} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import {Contact, ContactEntity} from "../../model/main/contact";
import {referenceStore} from "../../stores";

import {line} from "./__style__/list.css";

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
}];

const TableLine = observer(({data}: {data: Contact}) => (
    <tr>
        <td>{data.nom}</td>
        <td>{data.prenom}</td>
        <td>{data.email}</td>
        <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: data.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle" as "libelle"})}</td>
    </tr>
));

const ListLine = observer(({data}: {data: Contact}) => (
    <div style={{background: "white", padding: "15px 50px"}}>
        {`${stringFor({$entity: ContactEntity.fields.civiliteCode, value: data.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle" as "libelle"})} ${data.prenom} ${data.nom} ${data.email}`}
    </div>
));

const Target = DropTarget<any>("item", {
        drop(_, monitor) {
        const dragged = getDraggedItems<Contact>(monitor);
        runInAction(() => {
            dragged.forEach(item => {
                if (listStore.selectedItems.has(item)) {
                    listStore.selectedList.clear();
                }
                (listStore.dataList as IObservableArray<Contact>).remove(item);
            });
        });
    }
}, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
}))(({connectDropTarget, isOver, canDrop}: {connectDropTarget?: ConnectDropTarget, isOver?: boolean, canDrop?: boolean}) => connectDropTarget!(<div style={{width: 200, height: 200, boxSizing: "border-box", background: canDrop ? "yellow" : "transparent", borderColor: "black", borderStyle: "dashed", transition: "0.1s all ease-out", borderWidth: isOver ? 5 : 1}}>POUBELLE</div>));

export const List = DragDropContext(HTML5Backend)(observer(() =>
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
        <Target />
        <ActionBar store={listStore} hasSelection={true} />
        {storeListFor({
            store: listStore,
            lineTheme: {line},
            LineComponent: ListLine,
            hasSelection: true,
            hasDragAndDrop: true
        })}
        {timelineFor({data: listStore.dataList, TimelineComponent: ListLine, dateSelector: l => ({$entity: ContactEntity.fields.id, value: `${l.id}`})})}
    </div>
));
