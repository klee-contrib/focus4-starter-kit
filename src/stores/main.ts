import {makeEntityStore} from "autofocus/entity";

import {AdresseEntity} from "../model/main/adresse";
import {ContactEntity, ContactNode} from "../model/main/contact";
import {EvenementEntity} from "../model/main/evenement";
import {StructureEntity, StructureNode} from "../model/main/structure";
import {SuiviEntity, SuiviNode} from "../model/main/suivi";

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
