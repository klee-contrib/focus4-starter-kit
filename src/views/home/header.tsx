import {Button} from "@focus4/toolbox";
import {Observer} from "mobx-react";
import * as React from "react";

import {homeViewStore} from "../../stores";

export const header = {
    barRight: (
        <Button
            label="id au hasard"
            onClick={() => homeViewStore.setView({id: `${Math.floor(Math.random() * 100)}`})}
        />
    ),
    cartridge: <Observer>{() => <h2>{`Salut identifiant ${homeViewStore.currentView.id}`}</h2>}</Observer>,
    summary: <Observer>{() => <strong>{`Salut identifiant ${homeViewStore.currentView.id}`}</strong>}</Observer>
};
