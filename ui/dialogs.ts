/**
 * Allows you to show different dialogs such as alerts, prompts, etc.
 * @module "ui/dialogs"
 */ /** */

/**
 * Defines the input type for prompt dialog.
 */
export module inputType {
    /**
     * Plain text input type.
     */
    export const text: string = '';

    /**
     * Password input type.
     */
    export const password: string = '';

    /**
     * Email input type.
     */
    export const email: string = '';

    /**
     * Number input type.
     */
    export const number: string = '';

    /**
     * Decimal input type.
     */
    export const decimal: string = '';

    /**
     * Phone input type.
     */
    export const phone: string = '';
}

/**
 * Defines the capitalization type for prompt dialog.
 */
export module capitalizationType {
    /**
     * No automatic capitalization.
     */
    export const none: string = '';

    /**
     * Capitalizes every character.
     */
    export const all: string = '';

    /**
     * Capitalize the first word of each sentence.
     */
    export const sentences: string = '';

    /**
     * Capitalize the first letter of every word.
     */
    export const words: string = '';
}

/**
 * The alert() method displays an alert box with a specified message.
 * @param options Specifies the options for the alert box.
 */
export function alert(options: AlertOptions): Promise<void> {
    return Promise.resolve()
}

/**
 * The confirm() method displays a dialog box with a specified message.
 * @param options Specifies the options for the confirm box.
 */
export function confirm(options: ConfirmOptions): Promise<boolean> {
    return Promise.resolve(false)
}

/**
 * The prompt() method displays a dialog box that prompts the visitor for input.
 * @param message The text to display in the dialog box.
 * @param defaultText The default text to display in the input box. Optional.
 */
export function prompt(message: string, defaultText?: string): Promise<PromptResult> {
    return Promise.resolve({
        result: false,
        text: ''
    })
}

/**
 * The login() method displays a login dialog box that prompts the visitor for user name and password.
 * @param options The options for the dialog box.
 */
export function login(options: LoginOptions): Promise<LoginResult> {
    return Promise.resolve({
        result: false,
        userName: '',
        password: '',
    })
}

/**
 * The action() method displays a action box that prompts the visitor to choose some action.
 * @param options The options for the dialog box.
 */
export function action(options: ActionOptions): Promise<string> {
    return Promise.resolve('')
}

/**
 * Provides options for the dialog.
 */
export interface CancelableOptions {
    /**
     * [Android only] Gets or sets if the dialog can be canceled by taping outside of the dialog.
     */
    cancelable?: boolean;
}

/**
 * Provides options for the dialog.
 */
export interface ActionOptions extends CancelableOptions {
    /**
     * Gets or sets the dialog title.
     */
    title?: string;

    /**
     * Gets or sets the dialog message.
     */
    message?: string;

    /**
     * Gets or sets the Cancel button text.
     */
    cancelButtonText?: string;

    /**
     * Gets or sets the list of available actions.
     */
    actions?: Array<string>;
}

/**
 * Provides options for the dialog.
 */
export interface DialogOptions extends CancelableOptions {
    /**
     * Gets or sets the dialog title.
     */
    title?: string;

    /**
     * Gets or sets the dialog message.
     */
    message?: string;

}

/**
 * Provides options for the alert.
 */
export interface AlertOptions extends DialogOptions {
    /**
     * Gets or sets the OK button text.
     */
    okButtonText?: string;
}

/**
 * Provides options for the confirm dialog.
 */
export interface ConfirmOptions extends AlertOptions {
    /**
     * Gets or sets the Cancel button text.
     */
    cancelButtonText?: string;

    /**
     * Gets or sets the neutral button text.
     */
    neutralButtonText?: string;
}

/**
 * Provides options for the prompt dialog.
 */
export interface PromptOptions extends ConfirmOptions {
    /**
     * Gets or sets the default text to display in the input box.
     */
    defaultText?: string;

    /**
     * Gets or sets the prompt input type (plain text, password, or email).
     */
    inputType?: string;

    /**
     * Gets or sets the prompt capitalizationType (none, all, sentences, or words).
     */
    capitalizationType?: string;
}

/**
 * Provides options for the login dialog.
 */
export interface LoginOptions extends ConfirmOptions {
    /**
     * Gets or sets the default text to display as hint in the user name input box.
     */
    userNameHint?: string;

    /**
     * Gets or sets the default text to display as hint in the password input box.
     */
    passwordHint?: string;

    /**
     * Gets or sets the default text to display in the user name input box.
     */
    userName?: string;

    /**
     * Gets or sets the default text to display in the password input box.
     */
    password?: string;
}

/**
 * Provides result data from the prompt dialog.
 */
export interface PromptResult {
    /**
     * Gets or sets the prompt dialog boolean result.
     */
    result: boolean;

    /**
     *  Gets or sets the text entered in the prompt dialog.
     */
    text: string;
}

/**
 * Provides result data from the login dialog.
 */
export interface LoginResult {
    /**
     * Gets or sets the login dialog boolean result.
     */
    result: boolean;

    /**
     *  Gets or sets the user entered in the login dialog.
     */
    userName: string;

    /**
     *  Gets or sets the password entered in the login dialog.
     */
    password: string;
}
