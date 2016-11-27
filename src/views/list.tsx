import {observer, React} from "autofocus";
import {stringFor} from "autofocus/entity";
import {connectToListStore, LineProps, ListTable} from "autofocus/list";

import {Contact, ContactEntity} from "../model/main/contact";
import {listStore} from "../stores/list";
import {referenceStore} from "../stores/reference";

@observer
export class List extends React.Component<{}, void> {

    componentWillMount() {
        listStore.load(false);
    }

    render() {
        return ListTable.create(Object.assign({}, connectToListStore(listStore), {
            LineComponent: observer((props: LineProps<Contact>) => (
                <tr>
                    <td>{props.data!.nom}</td>
                    <td>{props.data!.prenom}</td>
                    <td>{props.data!.email}</td>
                    <td>{stringFor({$entity: ContactEntity.fields.civiliteCode, value: props.data!.civiliteCode}, {values: referenceStore.civilite, labelKey: "libelle"})}</td>
                </tr>
            )),
            columns: [{
                label: "Nom",
                noSort: true
            }, {
                label: "Prénom",
                noSort: true
            }, {
                label: "Email",
                noSort: true
            }, {
                label: "Civilité",
                noSort: true
            }]
        }));
    }
}
