import {domain, InputDate} from "@focus4/components";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/fr";

moment.locale("fr");
numeral.locale("fr");

export const DO_BOOLEEN = domain<boolean>()({});

export const DO_COMMENTAIRE = domain<string>()({
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

export const DO_CODE_10 = domain<string>()({
    inputProps: {maxLength: 10},
    validator: {
        type: "string",
        maxLength: 10
    }
});

export const DO_DATE = domain<string>()({
    validator: {type: "date"},
    InputComponent: InputDate,
    displayFormatter: date => (date ? moment(date, moment.ISO_8601).format("DD/MM/YYYY") : ""),
    inputProps: {
        inputFormat: "DD/MM/YYYY"
    }
});

export const DO_ID = domain<number>()({});

export const DO_EMAIL = domain<string>()({
    validator: {type: "email"}
});

export const DO_LIBELLE_100 = domain<string>()({
    inputProps: {maxLength: 100},
    validator: {
        type: "string",
        maxLength: 100
    }
});

export const DO_MONTANT = domain<number>()({
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

export const DO_POURCENTAGE = domain<number>()({
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

export const DO_TELEPHONE = domain<string>()({
    validator: {
        type: "string",
        maxLength: 13
    }
});
