import {makeEntityStore} from "autofocus/entity";

import {AdresseEntity} from "../model/main/adresse";
import {ContactNode, ContactEntity} from "../model/main/contact";
import {EvenementEntity} from "../model/main/evenement";
import {StructureNode, StructureEntity} from "../model/main/structure";
import {SuiviNode, SuiviEntity} from "../model/main/suivi";

export const mainStore = makeEntityStore({
    structure: {} as StructureNode,
    suivi: {} as SuiviNode
}, {
    contactList: {} as ContactNode
}, [
    AdresseEntity,
    ContactEntity,
    EvenementEntity,
    StructureEntity,
    SuiviEntity
], {
    contactList: "contact"
});
