import {ActionBar, getDraggedItems, LineProps, StoreList, StoreTable, Timeline} from "@focus4/collections";
import {makeField} from "@focus4/forms";
import {Content} from "@focus4/layout";
import {ListStore, stringFor} from "@focus4/stores";
import {runInAction} from "mobx";
import {observer} from "mobx-react";
import * as React from "react";
import {DndProvider, useDrop} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import {Contact} from "../../model/main/contact";
import {loadContactList} from "../../services/main";
import {referenceStore} from "../../stores";

import {line} from "./__style__/list.module.css";

const listStore = new ListStore<Contact>();
listStore.isItemSelectionnable = data => !(data.id! % 2);

const ListLine = observer(({data, toggleDetail}: LineProps<Contact>) => (
    <div style={{background: "white", padding: "15px 50px"}} onClick={() => toggleDetail && toggleDetail()}>
        {`${stringFor(makeField(data.civiliteCode), referenceStore.civilite)} ${data.prenom} ${data.nom} ${data.email}`}
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
                    listStore.innerList.remove(item);
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
export class List extends React.Component {
    async componentWillMount() {
        listStore.list = await loadContactList();
    }

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Content>
                    <StoreTable
                        store={listStore}
                        itemKey={d => d.email}
                        columns={[
                            {title: "Nom", content: data => data.nom, sortKey: "nom"},
                            {title: "Prénom", content: data => data.prenom, sortKey: "prenom"},
                            {title: "Email", content: data => data.email},
                            {
                                title: "Civilité",
                                content: data => stringFor(makeField(data.civiliteCode), referenceStore.civilite)
                            }
                        ]}
                    />
                    <Target />
                    <ActionBar store={listStore} hasSelection={true} />
                    <StoreList
                        store={listStore}
                        LineComponent={ListLine}
                        itemKey={d => d.email}
                        lineTheme={{line}}
                        hasSelection
                        hasDragAndDrop
                        DetailComponent={({data}) => (
                            <h2>
                                {data.nom} {data.prenom}
                            </h2>
                        )}
                    />
                    <Timeline
                        data={listStore.list}
                        TimelineComponent={ListLine}
                        dateSelector={l => makeField(`${l.id}`)}
                        itemKey={d => d.email}
                    />
                </Content>
            </DndProvider>
        );
    }
}
