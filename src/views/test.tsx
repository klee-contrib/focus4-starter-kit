import {React, action, observer} from "autofocus";
import Button = require("focus-components/components/button");
import {viewStore} from "../router";

function toHome() {
    viewStore.currentView.page = "home";
}

export const Test = observer(() => {
    return (
        <div>
            <h2>{`Salut identifiant ${viewStore.currentView.id}`}</h2>
            <Button label="Retourne à l'accueil" handleOnClick={toHome} />
        </div>
    );
});
