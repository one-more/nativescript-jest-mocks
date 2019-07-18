import {CssProperty, InheritedCssProperty, Property} from "./core/properties";
import {FormattedString} from "./formatted-string";
import {View, AddChildFromBuilder, Length, Style} from "./core/view";

export class TextBase extends View implements AddChildFromBuilder {

    /**
     * Gets of the text widget. In some cases(android TextInputLayout) the TextView is made of 2 views: the layout and the text view
     * So we need a different getter for the layout and text functions
     */
    public readonly nativeTextViewProtected: any;

    /**
     * Gets or sets the text.
     */
    text: string;

    /**
     * Gets or sets a formatted string.
     */
    formattedText: FormattedString;

    /**
     * Gets or sets font-size style property.
     */
    fontSize: number;

    /**
     * Gets or sets letterSpace style property.
     */
    letterSpacing: number;

    /**
     * Gets or sets lineHeight style property.
     */
    lineHeight: number;

    /**
     * Gets or sets text-alignment style property.
     */
    textAlignment: TextAlignment;

    /**
     * Gets or sets text decorations style property.
     */
    textDecoration: TextDecoration;

    /**
     * Gets or sets text transform style property.
     */
    textTransform: TextTransform;

    /**
     * Gets or sets white space style property.
     */
    whiteSpace: WhiteSpace;

    /**
     * Gets or sets padding style property.
     */
    padding: string | Length;

    /**
     * Specify the bottom padding of this layout.
     */
    paddingBottom: Length;

    /**
     * Specify the left padding of this layout.
     */
    paddingLeft: Length;

    /**
     * Specify the right padding of this layout.
     */
    paddingRight: Length;

    /**
     * Specify the top padding of this layout.
     */
    paddingTop: Length;

    /**
     * Called for every child element declared in xml.
     * This method will add a child element (value) to current element.
     * @private
     * @param name - Name of the element.
     * @param value - Value of the element.
     */
    _addChildFromBuilder(name: string, value: any): void {}


}

export const textProperty: Property<TextBase, string> = null;
export const formattedTextProperty: Property<TextBase, FormattedString>= null;

export type WhiteSpace = "initial" | "normal" | "nowrap";
export type TextAlignment = "initial" | "left" | "center" | "right";
export type TextTransform = "initial" | "none" | "capitalize" | "uppercase" | "lowercase";
export type TextDecoration = "none" | "underline" | "line-through" | "underline line-through";

export const textAlignmentProperty: InheritedCssProperty<Style, TextAlignment> = null;
export const textDecorationProperty: CssProperty<Style, TextDecoration> = null;
export const textTransformProperty: CssProperty<Style, TextTransform> = null;
export const whiteSpaceProperty: CssProperty<Style, WhiteSpace> = null;
export const letterSpacingProperty: CssProperty<Style, number> = null;

//Used by tab view
export function getTransformedText(text: string, textTransform: TextTransform): string {
    return ''
}

export const resetSymbol: symbol = null;