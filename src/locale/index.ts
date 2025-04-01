import {initReactI18next} from "react-i18next";

import {i18nCollections} from "@focus4/collections";
import {initI18n} from "@focus4/core";
import {i18nFormToolbox} from "@focus4/form-toolbox";
import {i18nLayout} from "@focus4/layout";
import {i18nStores} from "@focus4/stores";

import {en} from "./en";
import {fr} from "./fr";

initI18n(
    [initReactI18next],
    localStorage.getItem("lng") ?? "fr",
    [i18nCollections, i18nFormToolbox, i18nLayout, i18nStores],
    {
        fr,
        en
    }
);
