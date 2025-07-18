import {DateTime} from "luxon";

import {domain, FormSwitch, InputDate, SelectCheckbox} from "@focus4/form-toolbox";

export const DO_BOOLEEN = domain({
    type: "boolean",
    displayFormatter: value => (value ? "Oui" : "Non"),
    InputComponent: FormSwitch
});
export const DO_CODE = domain({
    type: "string",
    inputProps: {maxLength: 10},
    validator: {type: "string", maxLength: 10}
});
export const DO_CODE_LISTE = domain({type: "string-array", SelectComponent: SelectCheckbox<"string-array">});
export const DO_DATE = domain({
    type: "string",
    validator: {type: "date"},
    displayFormatter: date => (date ? DateTime.fromISO(date, {zone: "utc"}).toFormat("dd/MM/yyyy") : ""),
    InputComponent: InputDate,
    inputProps: {
        inputFormat: "dd/MM/yyyy",
        inputProps: {icon: "calendar_month"}
    }
});
export const DO_DATE_HEURE = domain({
    type: "string",
    displayFormatter: date => (date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy à HH:mm:ss") : "")
});
export const DO_EMAIL = domain({type: "string", validator: {type: "email"}, inputProps: {icon: "email"}});
export const DO_ENTIER = domain({type: "number", validator: {type: "number", maxDecimals: 0}});
export const DO_ID = domain({type: "number"});
export const DO_LIBELLE = domain({
    type: "string",
    inputProps: {maxLength: 100},
    validator: {type: "string", maxLength: 100}
});
