import {Sha256} from '@aws-crypto/sha256-js';

export async function GeneratePassword(url: string, phrase: string){
    if(url === "" || phrase === "")return "";
    
    const hasher = new Sha256(phrase); /** Use the phrase as the key */
    hasher.update(url);
    return Buffer.from(await hasher.digest()).toString('base64').slice(0,23);// Returns the first 12 characters of base64 encoded digest.
}