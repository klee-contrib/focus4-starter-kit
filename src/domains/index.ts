/* tslint:disable */

import {Domain} from "focus4/entity";

import moment from "moment";
import numeral from "numeral";
import { InputDate, InputDateProps } from "focus4/components";

export const DO_BOOLEEN: Domain = {};

export const DO_COMMENTAIRE: Domain = {
    validator: [{
        type: "string",
        options: {
            maxLength: 3000
        }
    }]
};

export const DO_CODE_10: Domain = {
    validator: [{
        type: "string",
        options: {
            maxLength: 10
        }
    }]
};

export const DO_DATE: Domain<InputDateProps> = {
    InputComponent: InputDate,
    displayFormatter: (date: string) => date ? moment(date, moment.ISO_8601).format("DD/MM/YYYY") : "",
    inputProps: {
        inputFormat: "DD/MM/YYYY"
    }
};

export const DO_ID: Domain = {};

export const DO_EMAIL: Domain = {
    validator: [{
        type: "email"
    }]
};

export const DO_LIBELLE_100: Domain = {
    validator: [{
        type: "string",
        options: {
            maxLength: 100
        }
    }]
};

export const DO_MONTANT: Domain = {
    validator: [{
        type: "function",
        value: (input: string) => /^-?\d*\.?\d{0,2}$/.test(input),
        options: {translationKey: "domain.validation.montant"}
    }],
    displayFormatter(montant) {
        return montant && numeral(parseFloat(montant)).format("0,0.00 $") || "";
    },
    inputFormatter(montant) {
        return montant && montant.toString().replace(".", ",") || "";
    },
    unformatter(text) {
        return text && text.replace(",", ".") || "";
    }
};

export const DO_POURCENTAGE: Domain = {
    validator: [{
        type: "function",
        value: (input: string) => /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/.test(input),
        options: {translationKey: "domain.validation.pourcentage"}
    }],
    displayFormatter(montant) {
        return montant && numeral(parseFloat(montant)).format("0,0.00 $") || "";
    },
    inputFormatter(montant) {
        return montant && montant.toString().replace(".", ",") || "";
    },
    unformatter(text) {
        return text && text.replace(",", ".") || "";
    }
};

export const DO_TELEPHONE = {
    type: "string",
    validator: [{
        type: "string",
        options: {
            maxLength: 13
        }
    }]
};
