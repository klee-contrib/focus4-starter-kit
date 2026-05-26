import {Locator} from "playwright";

export default class FocusHelper extends Helper {
    get Playwright() {
        return (this as any).helpers.Playwright as CodeceptJS.Playwright;
    }

    /**
     * Clique sur le radio correspondant au nom et à la valeur donnée.
     * @param name Nom du champ.
     * @param value Valeur du radio.
     */
    async clickRadio(name: string, value: string | number | boolean) {
        return await this.Playwright.click(
            locate("span").after(`input[name=${name}-${value === true ? "yes" : value === false ? "no" : value}]`)
        );
    }

    /**
     * Rempli une valeur dans un champ autocomplete Focus.
     * @param field Champ.
     * @param value Valeur.
     * @param allowNoResult Autorise le cas où aucune suggestion n'est affichée après avoir rempli le champ. Dans ce cas, la fonction retourne false.
     * @returns True si une suggestion a été sélectionnée, false sinon.
     */
    async fillAutocomplete(field: CodeceptJS.LocatorOrString, value: string | number, allowNoResult = false) {
        await this.forceFillField(field, value);

        if (value) {
            const id = await (await this.locate(field))?.getAttribute("id");
            await this.Playwright.wait(0.5);
            await this.Playwright.waitToHide(`//*[@id='${id}' and @aria-busy='true']`, 5);

            if (
                allowNoResult &&
                (await this.Playwright.grabNumberOfVisibleElements(locate("li").inside(`#${id}-suggestions`))) == 0
            ) {
                return false;
            }

            await this.Playwright.wait(0.25);
            await this.Playwright.pressKey("Enter");

            return true;
        }

        return false;
    }

    /**
     * Force le remplissage d'un champ, sans taper les caractères un par un. A utiliser lorsque le champ d'input contient des comportements spéciaux lors de la saisie (ex : masque).
     * @param field Champ.
     * @param value Valeur.
     */
    async forceFillField(field: CodeceptJS.LocatorOrString, value: string | number) {
        return (await this.locate(field))?.fill(value.toString(), {force: true});
    }

    /**
     * Sélectionne une valeur dans un dropdown Focus. A utiliser à la place de `I.selectOption`.
     * @param name Nom du champ.
     * @param value Valeur à sélectionner (code ou libellé).
     */
    async selectDropdown(name: string, value: string) {
        const element = `(//div[@data-name='${name}']//span[@data-value='${value}'] | //div[@data-name='${name}']//span[@aria-label='${value}'])`;
        await this.Playwright.waitForElement(element, 10);

        const count = await this.Playwright.grabNumberOfVisibleElements(element);
        for (let i = 1; i <= count; i++) {
            await this.Playwright.forceClick(element + `[${i}]`);
        }
    }

    /**
     * Vérifie que le champ en consultation contient la valeur attendue.
     * @param name Nom du champ.
     * @param value Valeur du champ.
     */
    async seeInFieldDisplay(name: string, value: string) {
        return await this.Playwright.see(value, locate("div").withAttr({"data-name": name}));
    }

    /**
     * Attend que la progressbar disparaisse (elle doit être déjà présente initialement).
     * @param progressBar
     */
    async waitForProgressBar(progressBar: CodeceptJS.LocatorOrString = "[role=progressbar]") {
        await this.Playwright.waitForVisible(progressBar);
        let count = 0;
        let visible = true;
        while (true) {
            if (visible) {
                await this.Playwright.waitForInvisible(progressBar, 10);
                visible = false;
            } else {
                await this.Playwright.wait(0.1);
                visible = (await this.Playwright.grabNumberOfVisibleElements(progressBar)) !== 0;
                if (!visible && count >= 3) {
                    break;
                }
                if (visible) {
                    count = 0;
                } else {
                    count++;
                }
            }
        }
    }

    private async locate(field: CodeceptJS.LocatorOrString) {
        // @ts-expect-error
        const elements: Locator[] = await this.Playwright._locateFields(field);
        if (elements.length > 0) {
            return elements[0];
        }
    }
}

