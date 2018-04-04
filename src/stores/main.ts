import {makeEntityStore} from "focus4/entity";

import {ContactEntity} from "../model/main/contact";
import {EvenementEntity} from "../model/main/evenement";
import {StructureEntity} from "../model/main/structure";
import {SuiviEntity} from "../model/main/suivi";

export const mainStore = makeEntityStore({
    structure: StructureEntity,
    suivi: SuiviEntity,
    evenement: EvenementEntity,
    contactList: [ContactEntity]
});
