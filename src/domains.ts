import {DateTime} from "luxon";
import z from "zod";
import {fr} from "zod/locales";

import {domain, FormSwitch, InputDate, SelectCheckbox} from "@focus4/form-toolbox";

z.config(fr());

export const DO_BOOLEEN = domain({
    schema: z.boolean(),
    displayFormatter: value => (value ? "Oui" : "Non"),
    InputComponent: FormSwitch
});
export const DO_CODE = domain({
    schema: z.string().max(10, "focus.validation.string"),
    inputProps: {maxLength: 10}
});
export const DO_CODE_LISTE = domain({
    schema: z.array(z.string().max(10, "focus.validation.string")),
    SelectComponent: SelectCheckbox<z.ZodArray<z.ZodString>>
});
export const DO_DATE = domain({
    schema: z.iso.date("focus.validation.date"),
    displayFormatter: date => (date ? DateTime.fromISO(date, {zone: "utc"}).toFormat("dd/MM/yyyy") : ""),
    InputComponent: InputDate,
    inputProps: {
        inputFormat: "dd/MM/yyyy",
        ISOStringFormat: "date-only",
        inputProps: {icon: "calendar_month"}
    }
});
export const DO_DATE_HEURE = domain({
    schema: z.iso.datetime("focus.validation.date"),
    displayFormatter: date => (date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy à HH:mm:ss") : "")
});
export const DO_EMAIL = domain({schema: z.email("focus.validation.email"), inputProps: {icon: "email"}});
export const DO_ENTIER = domain(z.int("focus.validation.number"));
export const DO_ID = DO_ENTIER;
export const DO_LIBELLE = domain({
    schema: z.string().max(100, "focus.validation.string"),
    inputProps: {maxLength: 100}
});
