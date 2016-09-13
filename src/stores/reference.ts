import {makeReferenceStore} from "autofocus";
import {Civilite, StatutJuridique} from "../model/references";
import {loadReference} from "../services/reference";

export const referenceStore = makeReferenceStore(
    (refName: string) => () => loadReference(refName),
    {
        civilite: [] as Civilite[],
        statutJuridique: [] as StatutJuridique[]
    }
);
