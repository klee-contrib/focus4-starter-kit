import {runInAction} from "mobx";
import {observer} from "mobx-react";
import {Component} from "react";
import {DndProvider, useDrop} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

import {ActionBar, getDraggedItems, LineProps, List, Table, Timeline} from "@focus4/collections";
import {Content} from "@focus4/layout";
import {CollectionStore, makeField, stringFor} from "@focus4/stores";

import {Contact} from "../../model/main/contact";
import {loadContactList} from "../../services/main";

import {referenceStore} from "../../stores";

import css from "./__style__/list.css";

const listStore = new CollectionStore<Contact>();
listStore.sortBy = "nom";
listStore.isItemSelectionnable = data => !(data.id! % 2);

const ListLine = observer(({data, toggleDetail}: LineProps<Contact>) => (
    <div onClick={() => toggleDetail?.()} style={{background: "white", padding: "15px 50px"}}>
        {`${stringFor(
            makeField(data.civiliteCode),
            referenceStore.civilite
        )} ${data.prenom!} ${data.nom!} ${data.email!}`}
    </div>
));

function Target() {
    const [{isOver, canDrop}, ref] = useDrop({
        accept: "item",
        drop(_, monitor) {
            const dragged = getDraggedItems<Contact>(monitor);
            runInAction(() => {
                dragged.forEach(item => {
                    if (listStore.selectedItems.has(item)) {
                        listStore.selectedItems.clear();
                    }
                    listStore.list = listStore.list.filter(i => i !== item);
                });
            });
        },
        collect: monitor => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        })
    });

    return (
        <div
            ref={ref}
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
    );
}

@observer
export class HomeList extends Component {
    async componentDidMount() {
        listStore.list = await loadContactList();
    }

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Content>
                    <Table
                        columns={[
                            {title: "Nom", content: data => data.nom, sortKey: "nom"},
                            {title: "Prénom", content: data => data.prenom, sortKey: "prenom"},
                            {title: "Email", content: data => data.email},
                            {
                                title: "Civilité",
                                content: data => stringFor(makeField(data.civiliteCode), referenceStore.civilite)
                            }
                        ]}
                        hasSelection
                        itemKey={d => d.email}
                        store={listStore}
                    />
                    <Target />
                    <ActionBar hasSelection store={listStore} />
                    <List
                        DetailComponent={({data}) => (
                            <h2>
                                {data.nom} {data.prenom}
                            </h2>
                        )}
                        hasDragAndDrop
                        hasSelection
                        itemKey={d => d.email}
                        LineComponent={ListLine}
                        store={listStore}
                        theme={{line: css.line}}
                    />
                    <Timeline
                        addItemHandler={() => {
                            /* */
                        }}
                        data={listStore.list}
                        dateSelector={l => {
                            const date = new Date(2020, 1, 30);
                            date.setDate(30 - l.id!);
                            return makeField(date.toLocaleDateString());
                        }}
                        itemKey={d => d.email}
                        TimelineComponent={ListLine}
                    />
                </Content>
            </DndProvider>
        );
    }
}
