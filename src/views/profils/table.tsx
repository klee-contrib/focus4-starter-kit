import {summaryCss, tableFor} from "@focus4/collections";
import {useLoad} from "@focus4/forms";
import {stringFor} from "@focus4/stores";
import {FontIcon, Tooltip} from "@focus4/toolbox";

import {ProfilItemEntity} from "../../model/securite/profil/profil-item";
import {getProfils} from "../../services/securite/profil/profil";
import {profilStore} from "../../stores/profil";

import {router} from "../../router";

import css from "./__style__/table.css";

export function ProfilTable() {
    const isLoading = useLoad(profilStore.profils, a => a.params().load(getProfils));

    return (
        <>
            <div className={summaryCss.summary}>
                <span>
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
                        content: pro => (
                            <div className={css.users}>
                                {stringFor(pro.nombreUtilisateurs)}
                                {(pro.nombreUtilisateurs.value ?? 0) > 5 ? (
                                    <Tooltip tooltip="Il ne devrait pas y avoir plus de 5 utilisateurs avec le même profil !">
                                        <FontIcon>warning</FontIcon>
                                    </Tooltip>
                                ) : null}
                            </div>
                        )
                    }
                ]
            })}
            <br />
        </>
    );
}
