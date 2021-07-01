import {makeReferenceStore} from "@focus4/stores";

import {civilite, statutJuridique} from "../model/references";
import {loadReference} from "../services/reference";

export const referenceStore = makeReferenceStore(loadReference, {
    civilite,
    statutJuridique
});
