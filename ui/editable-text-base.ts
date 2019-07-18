/**
 * @module "ui/editor-text-base"
 */ /** */

import { TextBase} from "./text-base";
import {CssProperty, Property} from "./core/properties";
import {Color, Style} from "./core/view";

/**
 * Represents the base class for all editable text views.
 */
export class EditableTextBase extends TextBase {
    public static blurEvent: string;
    public static focusEvent: string;

    /**
     * Gets or sets the soft keyboard type.
     */
    keyboardType: KeyboardType;

    /**
     * Gets or sets the soft keyboard return key flavor.
     */
    returnKeyType: ReturnKeyType;

    /**
     * Gets or sets a value indicating when the text property will be updated.
     */
    updateTextTrigger: UpdateTextTrigger;

    /**
     * Gets or sets the autocapitalization type.
     */
    autocapitalizationType: AutocapitalizationType;

    /**
     * Gets or sets whether the instance is editable.
     */
    editable: boolean;

    /**
     * Enables or disables autocorrection.
     */
    autocorrect: boolean;

    /**
     * Gets or sets the placeholder text.
     */
    hint: string;

    /**
     * Limits input to a certain number of characters.
     */
    maxLength: number;

    /**
     * Hides the soft input method, ususally a soft keyboard.
     */
    dismissSoftInput(): void {}


}

export type KeyboardType = "datetime" | "phone" | "number" | "url" | "email";
export type ReturnKeyType = "done" | "next" | "go" | "search" | "send";
export type UpdateTextTrigger = "focusLost" | "textChanged";
export type AutocapitalizationType = "none" | "words" | "sentences" | "allcharacters";

export const keyboardTypeProperty: Property<EditableTextBase, KeyboardType> = null;
export const returnKeyTypeProperty: Property<EditableTextBase, ReturnKeyType> = null;
export const editableProperty: Property<EditableTextBase, boolean> = null;
export const updateTextTriggerProperty: Property<EditableTextBase, UpdateTextTrigger> = null;
export const autocapitalizationTypeProperty: Property<EditableTextBase, AutocapitalizationType> = null;
export const autocorrectProperty: Property<EditableTextBase, boolean> = null;
export const hintProperty: Property<EditableTextBase, string> = null;
export const placeholderColorProperty: CssProperty<Style, Color> = null;
export const maxLengthProperty: Property<EditableTextBase, number> = null;



export * from "./text-base";