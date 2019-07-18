/**
 * Allows you to save and restore any kind of information related to your application.
 * @module "application-settings"
 */ /** */

/**
 * Checks whether such a key exists.
 * @param key The key to check for.
 */
export function hasKey(key: string): boolean {
    return false
}

/**
 * Gets a value (if existing) for a key as a Boolean Object. A default value can be provided in case there is no existing value.
 * @param key The key to check for.
 * @param defaultValue An optional value to be returned in case there is no existing value.
 */
export function getBoolean(key: string, defaultValue?: boolean): boolean {
    return false
}

/**
 * Gets a value (if existing) for a key as a String Object. A default value can be provided in case there is no existing value.
 * @param key The key to check for.
 * @param defaultValue An optional value to be returned in case there is no existing value.
 */
export function getString(key: string, defaultValue?: string): string {
    return ''
}

/**
 * Gets a value (if existing) for a key as a Number Object. A default value can be provided in case there is no existing value.
 * @param key The key to check for.
 * @param defaultValue An optional value to be returned in case there is no existing value.
 */
export function getNumber(key: string, defaultValue?: number): number {
    return 0
}

/**
 * Sets a Boolean Object for a key.
 * @param key The key.
 * @param value The value.
 */
export function setBoolean(key: string, value: boolean): void {
    return
}

/**
 * Sets a String Object for a key.
 * @param key The key.
 * @param value The value.
 */
export function setString(key: string, value: string): void {
    return
}

/**
 * Sets a Number Object for a key.
 * @param key The key.
 * @param value The value.
 */
export function setNumber(key: string, value: number): void {
    return
}

/**
 * Removes a value (if existing) for a key.
 * @param key The key to check for.
 */
export function remove(key: string): void {
    return
}

/**
 * Removes all values.
 */
export function clear(): void {
    return
}

/**
 * Flush all changes to disk synchronously.
 * @return {boolean} flag indicating if changes were saved successfully to disk.
 */
export function flush(): boolean {
    return false
}

/**
 * Get all stored keys
 * @return Array containing all stored keys
 */
export function getAllKeys(): Array<string> {
    return []
}
