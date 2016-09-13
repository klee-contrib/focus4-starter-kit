import {makeEntityStore, EntityArray} from "autofocus/entity";
import {AdresseEntity} from "../model/main/adresse";
import {ContactData, ContactEntity} from "../model/main/contact";
import {EvenementEntity} from "../model/main/evenement";
import {StructureData, StructureEntity} from "../model/main/structure";
import {SuiviData, SuiviEntity} from "../model/main/suivi";

export const mainStore = makeEntityStore<any>({
    contactList: [[], "contact"],
    structure: {},
    suivi: {}
}, [
    AdresseEntity as any,
    ContactEntity,
    EvenementEntity,
    StructureEntity,
    SuiviEntity
]) as {
    contactList: EntityArray<ContactData>,
    structure: StructureData,
    suivi: SuiviData,
    set: (config: {}) => void,
    clear: () => void;
};
