import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import z from "zod";

import {i18nCollections} from "@focus4/collections";
import {baseI18nextConfig, coreConfig} from "@focus4/core";
import {i18nFormToolbox} from "@focus4/form-toolbox";
import {i18nLayout} from "@focus4/layout";
import {i18nStores} from "@focus4/stores";

import {en} from "./en";
import {fr} from "./fr";

coreConfig.useI18nextAcceptHeader = true;
i18next.use(initReactI18next).init({
    ...baseI18nextConfig([i18nCollections, i18nFormToolbox, i18nLayout, i18nStores], {
        fr,
        en
    }),
    lng: localStorage.getItem("lng") ?? "fr",
    fallbackLng: "fr"
});

z.config(z.locales[i18next.language as "fr"]());
