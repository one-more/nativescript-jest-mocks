import {
    Color,
    CssAnimationProperty,
    CssProperty,
    dip,
    InheritedCssProperty,
    percent,
    px, ShorthandProperty,
    Style
} from "../core/view";
import {TransformFunctionsInfo} from "../animation";
import {Font, FontStyle, FontWeight} from "./font";
import {Background} from "./background";

export type LengthDipUnit = { readonly unit: "dip", readonly value: dip };
export type LengthPxUnit = { readonly unit: "px", readonly value: px };
export type LengthPercentUnit = { readonly unit: "%", readonly value: percent };

export type Length = "auto" | dip | LengthDipUnit | LengthPxUnit;
export type PercentLength = "auto" | dip | LengthDipUnit | LengthPxUnit | LengthPercentUnit;

export namespace Length {
    export function parse(text: string): Length {
        return "auto"
    }
    export function equals(a: Length, b: Length): boolean {
        return false
    }
    /**
     * Converts Length unit to device pixels.
     * @param length The Length to convert.
     * @param auto Value to use for conversion of "auto". By default is Math.NaN.
     */
    export function toDevicePixels(length: Length, auto?: number): number {
        return 0
    }
    export function convertToString(length: Length): string {
        return ''
    }
}

export namespace PercentLength {
    export function parse(text: string): PercentLength {
        return "auto"
    }
    export function equals(a: PercentLength, b: PercentLength): boolean {
        return false
    }
    /**
     * Converts PercentLength unit to device pixels.
     * @param length The PercentLength to convert.
     * @param auto Value to use for conversion of "auto". By default is Math.NaN.
     * @param parentAvailableWidth Value to use as base when converting percent unit. By default is Math.NaN.
     */
    export function toDevicePixels(length: PercentLength, auto?: number, parentAvailableWidth?: px): number {
        return 0
    }
    export function convertToString(length: PercentLength): string {
        return ''
    }
}

export const zeroLength: Length = "auto";

export const rotateProperty: CssAnimationProperty<Style, number> = null;
export const scaleXProperty: CssAnimationProperty<Style, number> = null;
export const scaleYProperty: CssAnimationProperty<Style, number> = null;
export const translateXProperty: CssAnimationProperty<Style, dip> = null;
export const translateYProperty: CssAnimationProperty<Style, dip> = null;

export function transformConverter(text: string): TransformFunctionsInfo {
    return {
        translate: null,
        scale: null,
        rotate: 0
    }
}

export const clipPathProperty: CssProperty<Style, string> = null;
export const colorProperty: InheritedCssProperty<Style, Color> = null;

export const backgroundProperty: ShorthandProperty<Style, string> = null;
export const backgroundColorProperty: CssAnimationProperty<Style, Color> = null;
export const backgroundImageProperty: CssProperty<Style, string> = null;
export const backgroundRepeatProperty: CssProperty<Style, BackgroundRepeat> = null;
export const backgroundSizeProperty: CssProperty<Style, string> = null;
export const backgroundPositionProperty: CssProperty<Style, string> = null;

export const borderColorProperty: ShorthandProperty<Style, string | Color> = null;
export const borderTopColorProperty: ShorthandProperty<Style, string | Color> = null;
export const borderRightColorProperty: ShorthandProperty<Style, string | Color> = null;
export const borderBottomColorProperty: ShorthandProperty<Style, string | Color> = null;
export const borderLeftColorProperty: ShorthandProperty<Style, string | Color> = null;

export const borderWidthProperty: ShorthandProperty<Style, string | Length> = null;
export const borderTopWidthProperty: CssProperty<Style, Length> = null;
export const borderRightWidthProperty: CssProperty<Style, Length> = null;
export const borderBottomWidthProperty: CssProperty<Style, Length> = null;
export const borderLeftWidthProperty: CssProperty<Style, Length> = null;

export const borderRadiusProperty: ShorthandProperty<Style, string | Length> = null;
export const borderTopLeftRadiusProperty: CssProperty<Style, Length> = null;
export const borderTopRightRadiusProperty: CssProperty<Style, Length> = null;
export const borderBottomRightRadiusProperty: CssProperty<Style, Length> = null;
export const borderBottomLeftRadiusProperty: CssProperty<Style, Length> = null;

export const zIndexProperty: CssProperty<Style, number> = null;
export const visibilityProperty: CssProperty<Style, Visibility> = null;
export const opacityProperty: CssAnimationProperty<Style, number> = null;

export const minWidthProperty: CssProperty<Style, dip | LengthDipUnit | LengthPxUnit> = null;
export const minHeightProperty: CssProperty<Style, dip | LengthDipUnit | LengthPxUnit> = null;
export const widthProperty: CssProperty<Style, PercentLength> = null;
export const heightProperty: CssProperty<Style, PercentLength> = null;
export const lineHeightProperty: CssProperty<Style, number> = null;
export const marginProperty: ShorthandProperty<Style, string | PercentLength> = null;
export const marginLeftProperty: CssProperty<Style, PercentLength> = null;
export const marginRightProperty: CssProperty<Style, PercentLength> = null;
export const marginTopProperty: CssProperty<Style, PercentLength> = null;
export const marginBottomProperty: CssProperty<Style, PercentLength> = null;

export const paddingProperty: ShorthandProperty<Style, string | Length> = null;
export const paddingLeftProperty: CssProperty<Style, Length> = null;
export const paddingRightProperty: CssProperty<Style, Length> = null;
export const paddingTopProperty: CssProperty<Style, Length> = null;
export const paddingBottomProperty: CssProperty<Style, Length> = null;

export const horizontalAlignmentProperty: CssProperty<Style, HorizontalAlignment> = null;
export const verticalAlignmentProperty: CssProperty<Style, VerticalAlignment> = null;

export const fontSizeProperty: InheritedCssProperty<Style, number> = null;
export const fontFamilyProperty: InheritedCssProperty<Style, string> = null;
export const fontStyleProperty: InheritedCssProperty<Style, FontStyle> = null;
export const fontWeightProperty: InheritedCssProperty<Style, FontWeight> = null;

export const backgroundInternalProperty: CssProperty<Style, Background> = null;
export const fontInternalProperty: InheritedCssProperty<Style, Font> = null;

export type BackgroundRepeat = "repeat" | "repeat-x" | "repeat-y" | "no-repeat";
export type Visibility = "visible" | "hidden" | "collapse";
export type HorizontalAlignment = "left" | "center" | "right" | "stretch";
export type VerticalAlignment = "top" | "middle" | "bottom" | "stretch";