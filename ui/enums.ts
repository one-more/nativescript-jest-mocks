import {
    KeyboardType as BaseKeyboardType,
    ReturnKeyType as BaseReturnKeyType,
    UpdateTextTrigger as BaseUpdateTrigger,
    AutocapitalizationType as BaseAutocapitalizationType
} from "./editable-text-base";

import {
    WhiteSpace as BaseWhiteSpace,
    TextAlignment as BaseTextAlignment,
    TextTransform as BaseTextTransform,
    TextDecoration as BaseTextDecoration
} from "./text-base";

import * as animationModule from "./animation";

import {
    Orientation as BaseOrientation
} from "./layouts/stack-layout";

import {
    Dock as BaseDock
} from "./layouts/dock-layout";

import {
    BackgroundRepeat as BaseBackgroundRepeat,
    Visibility as BaseVisibility,
    HorizontalAlignment as BaseHorizontalAlignment,
    VerticalAlignment as BaseVerticalAlignment
} from "./styling/style-properties";

import {
    Stretch as BaseStretch
} from "./image";

import {
    FontStyle as BaseFontStyle,
    FontWeight as BaseFontWeight
} from "./core/view";

/**
 * Represents a soft keyboard flavor.
 */
export module KeyboardType {
    /**
     * Android: [TYPE_CLASS_DATETIME](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_DATETIME) | [TYPE_DATETIME_VARIATION_NORMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_DATETIME_VARIATION_NORMAL)
     * iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
     */
    export const datetime: BaseKeyboardType = null;
    /**
     * Android: [TYPE_CLASS_PHONE](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_PHONE)
     * iOS:  [UIKeyboardTypePhonePad](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
     */
    export const phone: BaseKeyboardType = null;

    /**
     * Android: [TYPE_CLASS_NUMBER](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_NUMBER) | [TYPE_NUMBER_VARIATION_NORMAL](http://developer.android.com/intl/es/reference/android/text/InputType.html#TYPE_NUMBER_VARIATION_NORMAL) | [TYPE_NUMBER_FLAG_SIGNED](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_SIGNED) | [TYPE_NUMBER_FLAG_DECIMAL](http://developer.android.com/reference/android/text/InputType.html#TYPE_NUMBER_FLAG_DECIMAL)
     * iOS:  [UIKeyboardTypeNumbersAndPunctuation](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
     */
    export const number: BaseKeyboardType = null;

    /**
     * Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_URI](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_URI)
     * iOS:  [UIKeyboardTypeURL](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
     */
    export const url: BaseKeyboardType = null;

    /**
     * Android: [TYPE_CLASS_TEXT](http://developer.android.com/reference/android/text/InputType.html#TYPE_CLASS_TEXT) | [TYPE_TEXT_VARIATION_EMAIL_ADDRESS](http://developer.android.com/reference/android/text/InputType.html#TYPE_TEXT_VARIATION_EMAIL_ADDRESS)
     * iOS:  [UIKeyboardTypeEmailAddress](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIKeyboardType)
     */
    export const email: BaseKeyboardType = null;
}

/**
 * Represents the flavor of the return key on the soft keyboard.
 */
export module ReturnKeyType {
    /**
     * Android: [IME_ACTION_DONE](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_DONE)
     * iOS: [UIReturnKeyDone](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
     */
    export const done: BaseReturnKeyType = null;

    /**
     * Android: [IME_ACTION_NEXT](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_NEXT)
     * iOS: [UIReturnKeyNext](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
     */
    export const next: BaseReturnKeyType = null;

    /**
     * Android: [IME_ACTION_GO](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_GO)
     * iOS: [UIReturnKeyGo](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
     */
    export const go: BaseReturnKeyType = null;

    /**
     * Android: [IME_ACTION_SEARCH](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEARCH)
     * iOS: [UIReturnKeySearch](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
     */
    export const search: BaseReturnKeyType = null;

    /**
     * Android: [IME_ACTION_SEND](http://developer.android.com/reference/android/view/inputmethod/EditorInfo.html#IME_ACTION_SEND)
     * iOS: [UIReturnKeySend](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UITextInputTraits_Protocol/index.html#//apple_ref/c/tdef/UIReturnKeyType)
     */
    export const send: string = '';
}

/**
 * Represents a text-align enumeration.
 */
export module TextAlignment {
    /**
     * Represents left text-align.
     */
    export const left: BaseTextAlignment = null;

    /**
     * Represents center text-align.
     */
    export const center: BaseTextAlignment = null;

    /**
     * Represents right text-align.
     */
    export const right: BaseTextAlignment = null;
}

/**
 * Orientation indicates a direction of a layout that can exist in a horizontal or vertical state.
 */
export module Orientation {
    /**
     * Layout should be horizontally oriented.
     */
    export const horizontal: BaseOrientation = null;
    /**
     * Layout should be vertically oriented.
     */
    export const vertical: BaseOrientation = null;
}

/**
 * Orientation of a device.
 */
export module DeviceOrientation {
    /**
     * Portrait orientation.
     */
    export const portrait: string = null;
    /**
     * Landscape orientation.
     */
    export const landscape: string = null;
    /**
     * Orientation cannot be determined.
     */
    export const unknown: string = null;
}

/**
 * HorizontalAlignment indicates where an element should be displayed on the horizontal axis relative to the allocated layout slot of the parent element.
 */
export module HorizontalAlignment {
    /**
     * An element should be left aligned.
     */
    export const left: BaseHorizontalAlignment = null;

    /**
     * An element should be center aligned.
     */
    export const center: BaseHorizontalAlignment = null;

    /**
     * An element should be right aligned.
     */
    export const right: BaseHorizontalAlignment = null;

    /**
     * An element should be stretched to fill all the available size.
     */
    export const stretch: BaseHorizontalAlignment = null;
}

/**
 * VerticalAlignment indicates where an element should be displayed on the horizontal axis relative to the allocated layout slot of the parent element.
 */
export module VerticalAlignment {
    /**
     * An element should be top aligned.
     */
    export const top: BaseVerticalAlignment = null;

    /**
     * An element should be center aligned.
     */
    export const center: BaseVerticalAlignment = null;

    /**
     * Same as center. An element should be aligned in the middle.
     */
    export const middle: BaseVerticalAlignment = null;

    /**
     * An element should be bottom aligned.
     */
    export const bottom: BaseVerticalAlignment = null;

    /**
     * An element should be stretched to fill all the available size.
     */
    export const stretch: BaseVerticalAlignment = null;
}

/**
 * Describes how content is resized to fill its allocated space.
 */
export module Stretch {
    /**
     * The image preserves its original size.
     */
    export const none: BaseStretch = null;

    /**
     * The image is resized to fill in the destination dimensions while it preserves its native aspect ratio.
     * If the aspect ratio of the destination rectangle differs from the image, the image is clipped to fill
     * in the destination.
     */
    export const aspectFill: BaseStretch = null;

    /**
     * The image is resized to fit the destination dimensions while it preserves
     * its native aspect ratio.
     */
    export const aspectFit: BaseStretch = null;

    /**
     * The image is resized to fill the destination dimensions. The aspect ratio is not preserved.
     */
    export const fill: BaseStretch = null;
}

/**
 * Represents the visibility mode of a view.
 */
export module Visibility {
    /**
     * The view is visible.
     */
    export const visible: BaseVisibility = null;

    /**
     * The view is not visible and won't take place in the layout.
     */
    export const collapse: BaseVisibility = null;

    /**
     * The view is not visible but will take place in the layout.
     */
    export const hidden: BaseVisibility = null;
}

/**
 * A flag enum that represents common font attributes.
 */
export module FontAttributes {
    /**
     * Denotes that text should be drawn in a normal style.
     */
    export const Normal: number = null;

    /**
     * Denotes that text should be drawn in a bold weight.
     */
    export const Bold: number = null;

    /**
     * Denotes that text should be drawn in a italic style.
     */
    export const Italic: number = null;
}

/**
 * Describes the type of a device
 */
export module DeviceType {
    /**
     * Indicates a smart-phone device.
     */
    export const Phone: string = null;

    /**
     * Indicates a tablet device.
     */
    export const Tablet: string = null;
}

/**
 * Represents an enumeration specifying when the text property of an EditableTextBase will be updated.
 */
export module UpdateTextTrigger {
    /**
     * The text property will be udpaded when the widget loses focus.
     */
    export const focusLost: BaseUpdateTrigger = null;

    /**
     * The text property will be udpaded on every single character typed by the user.
     */
    export const textChanged: BaseUpdateTrigger = null;
}

/**
 * Specifies common accuracy values.
 */
export module Accuracy {
    /**
     * The default accuracy. About 300 meters.
     */
    export const any: number = null;

    /**
     * High accuracy. About 3 meters.
     */
    export const high: number = null;
}

/**
 * Specifies the Dock position of a child element that is inside a DockLayout.
 */
export module Dock {
    /**
     * A child element that is positioned on the left side of the DockLayout.
     */
    export const left: BaseDock = null;

    /**
     * A child element that is positioned on the top side of the DockLayout.
     */
    export const top: BaseDock = null;

    /**
     * A child element that is positioned on the right side of the DockLayout.
     */
    export const right: BaseDock = null;

    /**
     * A child element that is positioned on the bottom side of the DockLayout.
     */
    export const bottom: BaseDock = null;
}

/**
 * Represents the auto-capitalization style for a text input.
 */
export module AutocapitalizationType {
    /**
     * Do not capitalize any text automatically.
     */
    export const none: BaseAutocapitalizationType = null;

    /**
     * Capitalize the first letter of each word automatically.
     */
    export const words: BaseAutocapitalizationType = null;

    /**
     * Capitalize the first letter of each sentence automatically.
     */
    export const sentences: BaseAutocapitalizationType = null;

    /**
     * Capitalize all characters automatically.
     */
    export const allCharacters: BaseAutocapitalizationType = null;
}

/**
 * Defines the recognized image formats.
 */
export module ImageFormat {
    /**
     * The W3C Portable Network Graphics (PNG) image format.
     */
    export const png: string = null;

    /**
     * The Joint Photographic Experts Group (JPEG) image format.
     */
    export const jpeg: string = null;

    /**
     * The Joint Photographic Experts Group (JPEG) image format.
     */
    export const jpg: string = null;
}

/**
 * Specifies NavigationBar visibility mode.
 */
export module NavigationBarVisibility {
    /**
     * NavigationBar will be visible if there if frame backstack canGoBack is true or if the page Action Bar is not empty.
     */
    export const auto: string = null;

    /**
     * NavigationBar will be hidden.
     */
    export const never: string = null;

    /**
     * NavigationBar will be visible.
     */
    export const always: string = null;
}

/**
 * Specifies the visibility of the application bar icon
 */
export module AndroidActionBarIconVisibility {
    export const auto: string = null;
    export const never: string = null;
    export const always: string = null;
}

/**
 * Specifies android MenuItem position.
 */
export module AndroidActionItemPosition {
    /**
     * Always show this item as a button in an Action Bar.
     */
    export const actionBar: string = null;

    /**
     * Show this item as a button in an Action Bar if the system decides there is room for it.
     */
    export const actionBarIfRoom: string = null;

    /**
     * Never show this item as a button in an Action Bar.
     */
    export const popup: string = null;
}

/**
 * Specifies different font styles.
 */
export module FontStyle {
    /**
     * Normal font style.
     */
    export const normal: BaseFontStyle = null;

    /**
     * Italic font style.
     */
    export const italic: BaseFontStyle = null;
}

/**
 * Specifies different text decorations.
 */
export module TextDecoration {
    /**
     * No decoration.
     */
    export const none: BaseTextDecoration = null;

    /**
     * Text decoration underline.
     */
    export const underline: BaseTextDecoration = null;

    /**
     * Text decoration line-through.
     */
    export const lineThrough: BaseTextDecoration = null;
}

/**
 * Specifies different text transforms.
 */
export module TextTransform {
    /**
     * No transform.
     */
    export const none: BaseTextTransform = null;

    /**
     * Text transform capitalize.
     */
    export const capitalize: BaseTextTransform = null;

    /**
     * Text transform uppercase.
     */
    export const uppercase: BaseTextTransform = null;

    /**
     * Text transform lowercase.
     */
    export const lowercase: BaseTextTransform = null;
}

/**
 * Specifies different white spaces.
 */
export module WhiteSpace {
    /**
     * Normal wrap.
     */
    export const normal: BaseWhiteSpace = null;

    /**
     * No wrap.
     */
    export const nowrap: BaseWhiteSpace = null;
}

/**
 * Specifies different font weights.
 */
export module FontWeight {
    /**
     * Thin font weight. CSS font-weight 100.
     */
    export const thin: BaseFontWeight = null;

    /**
     * Extra-light / Ultra-light font weight. CSS font-weight 200.
     */
    export const extraLight: BaseFontWeight = null;

    /**
     * Light font weight. CSS font-weight 300.
     */
    export const light: BaseFontWeight = null;

    /**
     * Normal font weight. CSS font-weight 400.
     */
    export const normal: BaseFontWeight = null;

    /**
     * Medium font weight. CSS font-weight 500.
     */
    export const medium: BaseFontWeight = null;

    /**
     * Semi-bold / Demi-bold font weight. CSS font-weight 600.
     */
    export const semiBold: BaseFontWeight = null;

    /**
     * Bold font weight. CSS font-weight 700.
     */
    export const bold: BaseFontWeight = null;

    /**
     * Extra-bold / Ultra-bold font weight. CSS font-weight 800.
     */
    export const extraBold: BaseFontWeight = null;

    /**
     * Black font weight. CSS font-weight 900.
     */
    export const black: BaseFontWeight = null;
}

/**
 * Specifies background repeat.
 */
export module BackgroundRepeat {
    export const repeat: BaseBackgroundRepeat = null;
    export const repeatX: BaseBackgroundRepeat = null;
    export const repeatY: BaseBackgroundRepeat = null;
    export const noRepeat: BaseBackgroundRepeat = null;
}

/**
 * Specifies android MenuItem position.
 */
export module IOSActionItemPosition {
    /**
     * Show this item at the left of the navigation bar.
     */
    export const left: string = null;

    /**
     * Show this item at the right of the action bar.
     */
    export const right: string = null;
}

/**
 * Represents an animation curve type.
 */
export module AnimationCurve {

    /**
     * Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1))
     */
    export const ease: string = null;

    /**
     * An ease-in curve causes the animation to begin slowly, and then speed up as it progresses.
     */
    export const easeIn: string = null;

    /**
     * An ease-out curve causes the animation to begin quickly, and then slow down as it completes.
     */
    export const easeOut: string = null;

    /**
     * An ease-in ease-out curve causes the animation to begin slowly, accelerate through the middle of its duration, and then slow again before completing.
     */
    export const easeInOut: string = null;

    /**
     * A linear animation curve causes an animation to occur evenly over its duration.
     */
    export const linear: string = null;

    /**
     * A spring animation curve causes an animation to produce a spring (bounce) effect.
     */
    export const spring: string = null;

    /**
     * A custom cubic bezier function defined by its two control points. Possible values are numeric values from 0 to 1
     */
    export function cubicBezier(x1: number, y1: number, x2: number, y2: number): animationModule.CubicBezierAnimationCurve {
        return new animationModule.CubicBezierAnimationCurve(
            null,null,null,null,
        )
    }
}

/**
 * Specifies the types of the status bar style.
 */
export module StatusBarStyle {
    /**
     * The light style of the status bar - light background with dark letters.
     */
    export const light: string = null;

    /**
     * The dark style of the status bar - dark background with light letters.
     */
    export const dark: string = null;
}