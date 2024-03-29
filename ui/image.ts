/**
 * Represents a class that provides functionality for loading and streching image(s).
 */
import {Color, Length, Style, View} from "./core/view";
import {ImageSource} from "../image-source";
import {InheritedCssProperty, Property} from "./core/properties";

export class Image extends View {
    /**
     * Gets the native [android widget](http://developer.android.com/reference/android/widget/ImageView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* android.widget.ImageView */;

    /**
     * Gets the native iOS [UIImageView](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIImageView_Class/) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UIImageView */;

    /**
     * Gets or sets the image source of the image.
     */
    imageSource: ImageSource;

    /**
     * Gets or sets the source of the Image. This can be either an URL string or a native image instance.
     */
    src: any;

    /**
     * Gets a value indicating if the image is currently loading.
     */
    readonly isLoading: boolean;

    /**
     * Gets or sets the image stretch mode.
     */
    stretch: Stretch;

    /**
     * Gets or sets the loading strategy for images on the local file system:
     * - **sync** - blocks the UI if necessary to display immediately, good for small icons.
     * - **async** *(default)* - will load in the background, may appear with short delay, good for large images.
     * When loading images from web they are always loaded **async** no matter of loadMode value.
     */
    loadMode: "sync" | "async";

    /**
     * A color used to tint template images.
     */
    tintColor: Color;

    /**
     * Gets or sets the desired decode height of the image.
     * This property is Android specific.
     */
    decodeHeight: Length;

    /**
     * Gets or sets the desired decode width of the image.
     * This property is Android specific.
     */
    decodeWidth: Length;
}

export type Stretch = "none" | "aspectFill" | "aspectFit" | "fill";

export const imageSourceProperty: Property<Image, ImageSource> = null;
export const srcProperty: Property<Image, any> = null;
export const isLoadingProperty: Property<Image, string> = null;
export const loadMode: Property<Image, "sync" | "async"> = null;
export const stretchProperty: Property<Image, Stretch> = null;
export const tintColorProperty: InheritedCssProperty<Style, Color> = null;
export const decodeHeightProperty: Property<Image, Length> = null;
export const decodeWidthProperty: Property<Image, Length> = null;