import {Domain} from "autofocus/entity";
import Checkbox = require("focus-components/components/input/checkbox");
import Date = require("focus-components/components/input/date");
import Textarea = require("focus-components/components/input/textarea");
import moment = require("moment");
import numeral = require("numeral");

export const DO_BOOLEEN: Domain = {
    type: "boolean",
    InputComponent: Checkbox
};

export const DO_COMMENTAIRE: Domain = {
    InputComponent: Textarea,
    type: "string",
    validator: [{
        type: "string",
        options: {
            maxLength: 3000
        }
    }]
};

export const DO_CODE_10: Domain = {
    type: "text",
    validator: [{
        type: "string",
        options: {
            maxLength: 10
        }
    }]
};

export const DO_DATE: Domain = {
    type: "date",
    InputComponent: Date,
    locale: "fr",
    format: ["DD/MM/YYYY"],
    formatter: date => date ? moment(date, moment.ISO_8601).format("DD/MM/YYYY") : "",
    unformatter: text => moment(text).toDate(),
    options: {
        beforeValueGetter: (value: string) => value ? moment(value).add(moment.duration({minutes: moment(value).utcOffset()})).toISOString() : ""
    }
};

export const DO_ID: Domain = {
    type: "number"
};

export const DO_EMAIL: Domain = {
    type: "email",
    validator: [{
        type: "email"
    }]
};

export const DO_LIBELLE_100: Domain = {
    type: "text",
    validator: [{
        type: "string",
        options: {
            maxLength: 100
        }
    }]
};

export const DO_MONTANT: Domain = {
    type: "text",
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
    type: "text",
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
