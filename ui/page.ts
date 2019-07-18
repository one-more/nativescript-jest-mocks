/**
 * Defines the data for the page navigation events.
 */
import {EventData} from "../data/observable";
import {ActionBar, Color, ContentView, CssProperty, KeyframeAnimationInfo, Style} from "./core/view";
import {Frame} from "./frame";
import {Property} from "./core/properties";

export interface NavigatedData extends EventData {
    /**
     * The navigation context (optional, may be undefined) passed to the page navigation events method.
     */
    context: any;

    /**
     * Represents if a navigation is forward or backward.
     */
    isBackNavigation: boolean;
}

export module knownCollections {
    export const actionItems: string = null;
}

/**
 * Represents a logical unit for navigation (inside Frame).
 */
export class Page extends ContentView {
    /**
     * String value used when hooking to navigatingTo event.
     */
    public static navigatingToEvent: string;

    /**
     * String value used when hooking to navigatedTo event.
     */
    public static navigatedToEvent: string;

    /**
     * String value used when hooking to navigatingFrom event.
     */
    public static navigatingFromEvent: string;

    /**
     * String value used when hooking to navigatedFrom event.
     */
    public static navigatedFromEvent: string;

    /**
     * Gets or sets whether page background spans under status bar.
     */
    public backgroundSpanUnderStatusBar: boolean;

    /**
     * Gets or sets the style of the status bar.
     */
    public statusBarStyle: "light" | "dark";

    /**
     * Gets or sets the color of the status bar in Android.
     */
    public androidStatusBarBackground: Color;

    /**
     * Used to hide the Navigation Bar in iOS and the Action Bar in Android.
     */
    public actionBarHidden: boolean;

    /**
     * Used to control if swipe back navigation in iOS is enabled. This property is iOS specific. Default value: true
     */
    public enableSwipeBackNavigation: boolean;

    /**
     * Returns a CSS keyframe animation with the specified name, if it exists.
     */
    public getKeyframeAnimationWithName(animationName: string): KeyframeAnimationInfo {
        return new KeyframeAnimationInfo()
    }

    /**
     * A property that is used to pass a data from another page (while navigate to).
     */
    public navigationContext: any;

    /**
     * Gets the Frame object controlling this instance.
     */
    public frame: Frame;

    /**
     * Gets the ActionBar for this page.
     */
    public actionBar: ActionBar;

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    public on(eventNames: string, callback: (data: EventData) => void, thisArg?: any): void {}

}

/**
 * Dependency property that specify if page background should span under status bar.
 */
export const backgroundSpanUnderStatusBarProperty: Property<Page, boolean> = null;

/**
 * Dependency property used to hide the Navigation Bar in iOS and the Action Bar in Android.
 */
export const actionBarHiddenProperty: Property<Page, boolean> = null;

/**
 * Dependency property used to control if swipe back navigation in iOS is enabled.
 * This property is iOS specific. Default value: true
 */
export const enableSwipeBackNavigationProperty: Property<Page, boolean> = null;

/**
 * Property backing statusBarStyle.
 */
export const statusBarStyleProperty: CssProperty<Style, "light" | "dark"> = null;

/**
 * Property backing androidStatusBarBackground.
 */
export const androidStatusBarBackgroundProperty: CssProperty<Style, Color> = null;