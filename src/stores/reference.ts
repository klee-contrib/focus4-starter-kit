import {makeReferenceStore} from "focus4";
import {Civilite, StatutJuridique} from "../model/references";
import {loadReference} from "../services/reference";

export const referenceStore = makeReferenceStore(loadReference, {
    civilite: {} as Civilite,
    statutJuridique: {} as StatutJuridique
});
