import {summaryCss, tableFor} from "@focus4/collections";
import {useLoad} from "@focus4/forms";
import {stringFor} from "@focus4/stores";

import {ProfilItemEntity} from "../../model/securite/profil/profil-item";
import {getProfils} from "../../services/securite/profil/profil";
import {profilStore} from "../../stores/profil";

import {router} from "../../router";

export function ProfilTable() {
    const isLoading = useLoad(profilStore.profils, a => a.params().load(getProfils));

    return (
        <>
            <div className={summaryCss.summary}>
                <span className={summaryCss.sentence}>
                    <strong>{profilStore.profils.length}</strong> profils
                </span>
            </div>
            {tableFor({
                data: profilStore.profils,
                itemKey: pro => pro.id.value,
                onLineClick: pro => router.to(x => x("profils")(pro.id.value!)),
                isLoading,
                columns: [
                    {
                        title: ProfilItemEntity.libelle.label,
                        content: pro => stringFor(pro.libelle)
                    },
                    {
                        title: ProfilItemEntity.nombreUtilisateurs.label,
                        content: pro => stringFor(pro.nombreUtilisateurs)
                    }
                ]
            })}
            <br />
        </>
    );
}
