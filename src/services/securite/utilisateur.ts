////
//// ATTENTION CE FICHIER EST GENERE AUTOMATIQUEMENT !
////

import fetch from "../fetch";

import {UtilisateurItem} from "../../model/securite/utilisateur/utilisateur-item";
import {UtilisateurRead} from "../../model/securite/utilisateur/utilisateur-read";
import {UtilisateurWrite} from "../../model/securite/utilisateur/utilisateur-write";

/**
 * Ajoute un utilisateur
 * @param utilisateur Utilisateur à sauvegarder
 * @param options Options pour 'fetch'.
 * @returns Utilisateur sauvegardé
 */
export async function addUtilisateur(utilisateur: UtilisateurWrite, options: RequestInit = {}): Promise<UtilisateurRead> {
    const response = await fetch(`./api/utilisateurs`, {
        ...options,
        method: "POST",
        body: JSON.stringify(utilisateur),
        headers: {...options.headers, "Content-Type": "application/json"}
    });
    return await response.json();
}

/**
 * Supprime un utilisateur
 * @param utiId Id de l'utilisateur
 * @param options Options pour 'fetch'.
 */
export async function deleteUtilisateur(utiId: number, options: RequestInit = {}): Promise<void> {
    await fetch(`./api/utilisateurs/${utiId}`, {
        ...options,
        method: "DELETE"
    });
}

/**
 * Charge le détail d'un utilisateur
 * @param utiId Id de l'utilisateur
 * @param options Options pour 'fetch'.
 * @returns Le détail de l'utilisateur
 */
export async function getUtilisateur(utiId: number, options: RequestInit = {}): Promise<UtilisateurRead> {
    const response = await fetch(`./api/utilisateurs/${utiId}`, {
        ...options,
        method: "GET"
    });
    return await response.json();
}

/**
 * Récupère tous les utilisateurs.
 * @param options Options pour 'fetch'.
 * @returns Utilisateurs.
 */
export async function getUtilisateurs(options: RequestInit = {}): Promise<UtilisateurItem[]> {
    const response = await fetch(`./api/utilisateurs`, {
        ...options,
        method: "GET",
    });
    return await response.json();
}

/**
 * Sauvegarde un utilisateur
 * @param utiId Id de l'utilisateur
 * @param utilisateur Utilisateur à sauvegarder
 * @param options Options pour 'fetch'.
 * @returns Utilisateur sauvegardé
 */
export async function updateUtilisateur(utiId: number, utilisateur: UtilisateurWrite, options: RequestInit = {}): Promise<UtilisateurRead> {
    const response = await fetch(`./api/utilisateurs/${utiId}`, {
        ...options,
        method: "PUT",
        body: JSON.stringify(utilisateur),
        headers: {...options.headers, "Content-Type": "application/json"}
    });
    return await response.json();
}
