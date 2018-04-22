import {InputDate, InputDateProps} from "focus4/components";
import {Domain} from "focus4/entity";

import moment from "moment";
import numeral from "numeral";

export const DO_BOOLEEN: Domain = {};

export const DO_COMMENTAIRE: Domain = {
    inputProps: {
        multiline: true,
        rows: 4,
        maxLength: 3000
    },
    validator: {
        type: "string",
        maxLength: 3000
    }
};

export const DO_CODE_10: Domain = {
    inputProps: {maxLength: 10},
    validator: {
        type: "string",
        maxLength: 10
    }
};

export const DO_DATE: Domain<InputDateProps> = {
    validator: {type: "date"},
    InputComponent: InputDate,
    displayFormatter: (date: string) => (date ? moment(date, moment.ISO_8601).format("DD/MM/YYYY") : ""),
    inputProps: {
        inputFormat: "DD/MM/YYYY"
    }
};

export const DO_ID: Domain = {};

export const DO_EMAIL: Domain = {
    validator: {type: "email"}
};

export const DO_LIBELLE_100: Domain = {
    inputProps: {maxLength: 100},
    validator: {
        type: "string",
        maxLength: 100
    }
};

export const DO_MONTANT: Domain = {
    validator: (input: string) => !/^-?\d*\.?\d{0,2}$/.test(input) && "domain.validation.montant",
    displayFormatter(montant) {
        return (montant && numeral(parseFloat(montant)).format("0,0.00 $")) || "";
    },
    inputFormatter(montant) {
        return (montant && montant.toString().replace(".", ",")) || "";
    },
    unformatter(text) {
        return (text && text.replace(",", ".")) || "";
    }
};

export const DO_POURCENTAGE: Domain = {
    validator: (input: string) => !/^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/.test(input) && "domain.validation.montant",
    displayFormatter(montant) {
        return (montant && numeral(parseFloat(montant)).format("0,0.00 $")) || "";
    },
    inputFormatter(montant) {
        return (montant && montant.toString().replace(".", ",")) || "";
    },
    unformatter(text) {
        return (text && text.replace(",", ".")) || "";
    }
};

export const DO_TELEPHONE: Domain = {
    validator: {
        type: "string",
        maxLength: 13
    }
};
