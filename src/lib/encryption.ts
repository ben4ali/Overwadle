
import CryptoJS from 'crypto-js';

// The salt and key should ideally be stored securely, not hardcoded
// For a game like this though, this level of security is reasonable
const ENCRYPTION_KEY = 'overwadle-secure-key-2025';
const SALT = 'overwadle-salt-value';

/**
 * Encrypts data into a base64 string for storage
 * 
 * @param data Any JSON-serializable data to encrypt
 * @returns Encrypted string in base64 format
 */
export function encrypt(data: unknown): string {
  // Convert data to a JSON string
  const jsonString = JSON.stringify(data);
  
  // Add the salt
  const saltedData = jsonString + SALT;
  
  // Encrypt with AES using the key
  const encrypted = CryptoJS.AES.encrypt(saltedData, ENCRYPTION_KEY).toString();
  
  // Convert to Base64 for storage
  return btoa(encrypted);
}

/**
 * Decrypts data from a base64 string
 * 
 * @param encryptedStr The encrypted base64 string
 * @returns The original data, or null if decryption failed
 */
export function decrypt(encryptedStr: string): unknown {
  try {
    // Decode from Base64
    const encrypted = atob(encryptedStr);
    
    // Decrypt with AES
    const decrypted = CryptoJS.AES.decrypt(encrypted, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);
    
    // Remove salt
    const unsalted = decrypted.slice(0, decrypted.length - SALT.length);
    
    // Parse JSON
    return JSON.parse(unsalted);
  } catch (error) {
    console.error('Failed to decrypt data:', error);
    return null;
  }
}

/**
 * Encrypts and stores data in localStorage
 */
export function secureStore(key: string, data: any): void {
  const encrypted = encrypt(data);
  localStorage.setItem(key, encrypted);
}

/**
 * Retrieves and decrypts data from localStorage
 */
export function secureRetrieve(key: string): any {
  const encrypted = localStorage.getItem(key);
  if (!encrypted) return null;
  return decrypt(encrypted);
}
