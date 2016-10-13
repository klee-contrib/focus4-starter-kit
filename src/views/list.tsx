import {React, observer} from "autofocus";
import {stringFor} from "autofocus/entity";
import {connectToListStore, ListTable, LineProps} from "autofocus/list";

import {listStore} from "../stores/list";
import {referenceStore} from "../stores/reference";
import {Contact, ContactEntity} from "../model/main/contact";

@observer
export class List extends React.Component<{}, void> {

    componentWillMount() {
        listStore.load(false);
    }

    render() {
        return ListTable.create(Object.assign({}, connectToListStore(listStore), {
            columns: [],
            LineComponent: (props: LineProps<Contact>) => (
                <tr>
                    <td>{props.data!.nom}</td>
                    <td>{props.data!.prenom}</td>
                    <td>{props.data!.email}</td>
                    <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: props.data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle"})}</td>
                </tr>
            )
        }));
    }
}
