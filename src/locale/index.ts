import i18next from "i18next";

import {translation} from "./fr-FR";

i18next.init({
    lng: "fr",
    resources: {
        fr: {
            translation
        }
    },
    nsSeparator: false
});
