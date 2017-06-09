import {observer, React} from "focus4";
import {Button} from "react-toolbox/lib/button";
import {homeView, testView} from "../router";

function toHome() {
    homeView.setView({page: undefined, id: undefined});
}

function toTest() {
    testView.setView({lol: "salut"});
}

export const Test = observer(() => (
    <div>
        <h2>{`Salut identifiant ${homeView.currentView.id}`}</h2>
        <Button raised label="Retourne à l'accueil" onClick={toHome} />
        <Button raised primary label="Test le deuxième viewStore" onClick={toTest} />
    </div>
));
