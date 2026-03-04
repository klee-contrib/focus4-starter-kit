import {defineMock} from "vite-plugin-mock-dev-server";

export default defineMock({
    url: "/api/adresse",
    body: async ({query: {key}}) => {
        const response = await fetch(
            `https://api-adresse.data.gouv.fr/search/?q=${key.replaceAll("||", " ").trim()}&limit=1`
        );
        const json = await response.json();
        return json.features?.map((adr: any) => adr.properties.label)?.[0];
    }
});
