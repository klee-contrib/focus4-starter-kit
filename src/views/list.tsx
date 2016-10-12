import {React} from "autofocus";
import {connectToListStore, ListTable, LineProps} from "autofocus/list";

import {listStore} from "../stores/list";
import {Contact} from "../model/main/contact";

export function ListView() {
    return ListTable.create(Object.assign({}, connectToListStore(listStore), {
        columns: [],
        LineComponent: (props: LineProps<Contact>) => <tr><td>{props.data!.nom}</td></tr>
    }));
}
