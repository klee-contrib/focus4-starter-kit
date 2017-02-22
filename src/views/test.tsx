import {observer, React} from "autofocus";
import Button from "focus-components/button";
import {homeView, testView} from "../router";

function toHome() {
    homeView.currentView = {page: undefined, id: undefined};
}

function toTest() {
    testView.currentView.lol = "salut";
}

export const Test = observer(() => (
    <div>
        <h2>{`Salut identifiant ${homeView.currentView.id}`}</h2>
        <Button label="Retourne à l'accueil" handleOnClick={toHome} />
        <Button label="Test le deuxième viewStore" handleOnClick={toTest} />
    </div>
));
