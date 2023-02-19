import {DateTime} from "luxon";
import numeral from "numeral";

import {domain, InputDate} from "@focus4/forms";

import "numeral/locales/fr";
numeral.locale("fr");

export const DO_BOOLEEN = domain({type: "boolean"});

export const DO_COMMENTAIRE = domain({
    type: "string",
    inputProps: {
        multiline: true,
        rows: 4,
        maxLength: 3000
    },
    validator: {
        type: "string",
        maxLength: 3000
    }
});

export const DO_CODE_10 = domain({
    type: "string",
    inputProps: {maxLength: 10},
    validator: {
        type: "string",
        maxLength: 10
    }
});

export const DO_DATE = domain({
    type: "string",
    validator: {type: "date"},
    InputComponent: InputDate,
    displayFormatter: date => (date ? DateTime.fromISO(date, {zone: "utc"}).toFormat("dd/MM/yyyy") : ""),
    inputProps: {
        inputFormat: "dd/MM/yyyy"
    }
});

export const DO_ID = domain({type: "number"});

export const DO_EMAIL = domain({type: "string", validator: {type: "email"}});

export const DO_LIBELLE_100 = domain({
    type: "string",
    inputProps: {maxLength: 100},
    validator: {
        type: "string",
        maxLength: 100
    }
});

export const DO_MONTANT = domain({
    type: "number",
    validator: {
        type: "number",
        maxDecimals: 2,
        errorMessage: "domain.validation.montant"
    },
    displayFormatter(montant) {
        return (montant && numeral(montant).format("0,0.00 $")) || "";
    },
    inputProps: {
        hasThousandsSeparator: true,
        maxDecimals: 2
    }
});

export const DO_POURCENTAGE = domain({
    type: "number",
    validator: {
        type: "number",
        maxDecimals: 2,
        max: 100,
        min: 0,
        errorMessage: "domain.validation.pourcentage"
    },
    displayFormatter(montant) {
        return (montant && numeral(montant).format("0[.0] %")) || "";
    }
});

export const DO_TELEPHONE = domain({
    type: "string",
    validator: {
        type: "string",
        maxLength: 13
    }
});
