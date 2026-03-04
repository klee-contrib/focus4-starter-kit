import fetch from "./fetch";

/**
 * Charge une liste de référence
 * @param name Nom de la liste de référence.
 * @param options Options pour 'fetch'.
 * @returns Liste de référence demandée.
 */
export function getReferenceList<T>(name: string, options: RequestInit = {}): Promise<T[]> {
    return fetch(`./api/references/${name}`, options).json<T[]>();
}
