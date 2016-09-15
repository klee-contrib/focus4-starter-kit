import {Domain} from "autofocus/entity";
import Checkbox = require("focus-components/components/input/checkbox");
import Date = require("focus-components/components/input/date");
import Textarea = require("focus-components/components/input/textarea");
import moment = require("moment");
import numeral = require("numeral");

export const DO_BOOLEEN: Domain = {
    InputComponent: Checkbox
};

export const DO_COMMENTAIRE: Domain = {
    InputComponent: Textarea,
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

export const DO_DATE = {
    InputComponent: Date,
    formatter: (date: string) => date ? moment(date, moment.ISO_8601).format("DD/MM/YYYY") : "",
    unformatter: (text: string) => moment(text).toDate(),
    beforeValueGetter: (value: string) => value ? moment(value).add(moment.duration({minutes: moment(value).utcOffset()})).toISOString() : "",
    locale: "fr",
    format: ["DD/MM/YYYY"],
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
    formatter(montant, options?) {
        if (null !== montant && undefined !== montant) {
            if (!(options && options.isEdit)) {
                return numeral(montant).format("0,0.00 $");
            } else {
                return montant.toString().replace(",", ".");
            }
        } else {
            return "";
        }
    },
    unformatter(text, options?) {
        if (!(options && options.isEdit)) {
            return numeral().unformat(text.replace(".", ","));
        } else {
            return text;
        }
    }
};

export const DO_POURCENTAGE: Domain = {
    validator: [{
        type: "function",
        value: (input: string) => /^(100(\.00?)?|[1-9]?\d(\.\d\d?)?)$/.test(input),
        options: {translationKey: "domain.validation.pourcentage"}
    }],
    formatter(pourcentage, options?) {
        if (null !== pourcentage && undefined !== pourcentage) {
            if (!(options && options.isEdit)) {
                return parseFloat(pourcentage).toFixed(2).toString().replace(".", ",") + " %";
            } else {
                return pourcentage.toString().replace(",", ".");
            }
        } else {
            return "";
        }
    },
    unformatter(text, options?) {
        if (!(options && options.isEdit)) {
            return numeral().unformat(text.replace(".", ","));
        } else {
            return text;
        }
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
