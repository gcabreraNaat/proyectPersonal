import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

constructor() { }

/*
  * Encrypt a derived hd private key with a given pin and return it in Base64 form
  */
encryptAES = (text:string) => {
  return CryptoJS.AES.encrypt(text, environment.KEY).toString();
};


/**
 * Decrypt an encrypted message
 * @param encryptedBase64 encrypted data in base64 format
 * @param key The secret key
 * @return The decrypted content
 */
decryptAES = (encryptedBase64:string) => {
  const decrypted = CryptoJS.AES.decrypt(encryptedBase64, environment.KEY);
  if (decrypted) {
    try {
      console.log(decrypted);
      const str = decrypted.toString(CryptoJS.enc.Utf8);
      if (str.length > 0) {
        return str;
      } else {
        return 'error 1';
      } 
    } catch (e) {
      return 'error 2';
    }
  }
  return 'error 3';
};

}
