import {DateTime} from "luxon";

const {I} = inject();

export default class UtilisateursPage {
    ajouterUtilisateur() {
        I.amOnPage("/#/");
        I.waitForText("Utilisateurs");
        I.click("Utilisateurs");
        I.click("add");
        I.fillField("nom", "Dupont");
        I.fillField("prenom", "Jean");
        I.fillField("email", "jean.dupont@gmail.com");
        I.forceFillField("dateNaissance", "01/01/1990");
        I.fillAutocomplete("adresse", "10 Rue de la Paix 75");
        I.clickRadio("typeUtilisateurCode", "ADMIN");
        I.selectDropdown("profilId", "Profil 3");
        I.click("Enregistrer");
    }

    verifierUtilisateurCree() {
        I.waitForURL(/\/utilisateurs\/\d+$/, {});
        I.waitForProgressBar();
        I.seeInFieldDisplay("adresse", "10 Rue de la Paix 75002 Paris");
        I.seeInFieldDisplay("dateCreation", DateTime.now().toLocaleString(DateTime.DATE_SHORT, {locale: "fr"}));
        I.dontSee("Date de modification");
    }

    desactiverUtilisateur() {
        I.click("Modifier");
        I.clickRadio("actif", false);
        I.click("Enregistrer");

        I.waitForProgressBar();
        I.see("Date de modification");
        I.seeInFieldDisplay("dateModification", DateTime.now().toLocaleString(DateTime.DATE_SHORT, {locale: "fr"}));
    }
}
