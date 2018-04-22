import {observer, React, stringFor, timelineFor} from "focus4";
import {ActionBar, getDraggedItems, ListStore, storeListFor, storeTableFor} from "focus4/collections";
import {makeField} from "focus4/entity";
import {runInAction} from "mobx";
import {ConnectDropTarget, DragDropContext, DropTarget} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import {Contact} from "../../model/main/contact";
import {loadContactList} from "../../services/main";
import {referenceStore} from "../../stores";

import {line} from "./__style__/list.css";

const listStore = new ListStore<Contact>();
listStore.isItemSelectionnable = data => !(data.id! % 2);

const TableLine = observer(({data}: {data: Contact}) => (
    <tr>
        <td>{data.nom}</td>
        <td>{data.prenom}</td>
        <td>{data.email}</td>
        <td>{stringFor(makeField(data.civiliteCode), referenceStore.civilite)}</td>
    </tr>
));

const ListLine = observer(({data}: {data: Contact}) => (
    <div style={{background: "white", padding: "15px 50px"}}>
        {`${stringFor(makeField(data.civiliteCode), referenceStore.civilite)} ${data.prenom} ${data.nom} ${data.email}`}
    </div>
));

const Target = DropTarget<any>(
    "item",
    {
        drop(_, monitor) {
            const dragged = getDraggedItems<Contact>(monitor);
            runInAction(() => {
                dragged.forEach(item => {
                    if (listStore.selectedItems.has(item)) {
                        listStore.selectedList.clear();
                    }
                    listStore.innerList.remove(item);
                });
            });
        }
    },
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    })
)(
    ({
        connectDropTarget,
        isOver,
        canDrop
    }: {
        connectDropTarget?: ConnectDropTarget;
        isOver?: boolean;
        canDrop?: boolean;
    }) =>
        connectDropTarget!(
            <div
                style={{
                    width: 200,
                    height: 200,
                    boxSizing: "border-box",
                    background: canDrop ? "yellow" : "transparent",
                    borderColor: "black",
                    borderStyle: "dashed",
                    transition: "0.1s all ease-out",
                    borderWidth: isOver ? 5 : 1
                }}
            >
                POUBELLE
            </div>
        )
);

@(DragDropContext(HTML5Backend) as any)
@observer
export class List extends React.Component<{}> {
    async componentWillMount() {
        listStore.list = await loadContactList();
    }

    render() {
        return (
            <>
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
                {timelineFor({
                    data: listStore.list,
                    TimelineComponent: ListLine,
                    dateSelector: l => makeField(`${l.id}`)
                })}
            </>
        );
    }
}
