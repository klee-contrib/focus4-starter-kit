import {Domain} from "autofocus/entity";

const DO_LIBELLE_100: Domain = {
    type: "text",
    validator: [{
        type: "string",
        options: {
            maxLength: 100
        }
    }]
}