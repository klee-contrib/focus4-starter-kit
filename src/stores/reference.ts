import {makeReferenceStore} from "focus4";
import {civilite, statutJuridique} from "../model/references";
import {loadReference} from "../services/reference";

export const referenceStore = makeReferenceStore(loadReference, {
    civilite,
    statutJuridique
});
