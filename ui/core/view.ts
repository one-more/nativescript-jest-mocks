export interface AddChildFromBuilder {
    /**
     * Called for every child element declared in xml.
     * This method will add a child element (value) to current element.
     * @param name - Name of the element.
     * @param value - Value of the element.
     */
    _addChildFromBuilder(name: string, value: any): void;
}

export type TransformFunctionsInfo = {
    translate: Pair,
    rotate: number,
    scale: Pair,
}

export interface ShorthandPropertyOptions<P> {
    readonly name: string,
    readonly cssName: string;
    readonly converter: (value: string | P) => [CssProperty<any, any> | CssAnimationProperty<any, any>, any][],
    readonly getter: (this: Style) => string | P
}

export class ShorthandProperty<T extends Style, P> {
    constructor(options: ShorthandPropertyOptions<P>) {}

    public readonly name: string;
    public readonly cssName: string;

    public register(cls: typeof Style): void {}
}

export interface PropertyOptions<T, U> {
    readonly name: string;
    readonly defaultValue?: U;
    readonly affectsLayout?: boolean;
    readonly equalityComparer?: (x: U, y: U) => boolean;
    readonly valueChanged?: (target: T, oldValue: U, newValue: U) => void;
    readonly valueConverter?: (value: string) => U;
}

export interface CssPropertyOptions<T extends Style, U> extends PropertyOptions<T, U> {
    readonly cssName: string;
}

export class CssProperty<T extends Style, U> {
    constructor(options: CssPropertyOptions<T, U>) {}

    public readonly getDefault: symbol;
    public readonly setNative: symbol;
    public readonly name: string;
    public readonly cssName: string;
    public readonly cssLocalName: string;
    public readonly defaultValue: U;
    public register(cls: { prototype: T }): void {}
    public isSet(instance: T): boolean {
        return false
    }
}

export class InheritedCssProperty<T extends Style, U> extends CssProperty<T, U> {
    constructor(options: CssPropertyOptions<T, U>) {
        super(options)
    }
}

interface PropertyBagClass {
    new(): PropertyBag;
    prototype: PropertyBag;
}
interface PropertyBag {
    [property: string]: string;
}

export interface CssAnimationPropertyOptions<T, U> {
    readonly name: string;
    readonly cssName?: string;
    readonly defaultValue?: U;
    readonly equalityComparer?: (x: U, y: U) => boolean;
    readonly valueChanged?: (target: T, oldValue: U, newValue: U) => void;
    readonly valueConverter?: (value: string) => U;
}

export interface Size {
    /**
     * Represents the width of the size.
     */
    width: number;

    /**
     * Represents the height of the size.
     */
    height: number;
}

interface Animation extends EventTarget {
    currentTime: number | null;
    effect: AnimationEffect | null;
    readonly finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    readonly pending: boolean;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    readonly ready: Promise<Animation>;
    startTime: number | null;
    timeline: AnimationTimeline | null;
    cancel(): void;
    finish(): void;
    pause(): void;
    play(): void;
    reverse(): void;
    updatePlaybackRate(playbackRate: number): void;
    addEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    removeEventListener<K extends keyof AnimationEventMap>(type: K, listener: (this: Animation, ev: AnimationEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
}

class AnimationMock implements Animation {
    currentTime: number | null;
    effect: AnimationEffect | null;
    readonly finished: Promise<Animation>;
    id: string;
    oncancel: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    onfinish: ((this: Animation, ev: AnimationPlaybackEvent) => any) | null;
    readonly pending: boolean;
    readonly playState: AnimationPlayState;
    playbackRate: number;
    readonly ready: Promise<Animation>;
    startTime: number | null;
    timeline: AnimationTimeline | null;
    cancel(): void {}
    finish(): void {}
    pause(): void {}
    play(): void {}
    reverse(): void {}
    updatePlaybackRate(playbackRate: number): void {}
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void {}
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void {}
    dispatchEvent(event: Event): boolean {
        return false
    }
}

export interface Pair {
    x: number;
    y: number;
}

export interface Cancelable {
    cancel(): void;
}

export type AnimationPromise = Promise<void> & Cancelable;

export interface AnimationDefinition {
    /**
     * The view whose property is to be animated.
     */
    target?: View;

    /**
     * Animates the opacity of the view. Value should be a number between 0.0 and 1.0
     */
    opacity?: number;

    /**
     * Animates the backgroundColor of the view.
     */
    backgroundColor?: Color;

    /**
     * Animates the translate affine transform of the view.
     */
    translate?: Pair;

    /**
     * Animates the scale affine transform of the view.
     */
    scale?: Pair;

    /**
     * Animates the rotate affine transform of the view. Value should be a number specifying the rotation amount in degrees.
     */
    rotate?: number;

    /**
     * The length of the animation in milliseconds. The default duration is 300 milliseconds.
     */
    duration?: number;

    /**
     * The amount of time, in milliseconds, to delay starting the animation.
     */
    delay?: number;

    /**
     * Specifies how many times the animation should be played. Default is 1.
     * iOS animations support fractional iterations, i.e. 1.5.
     * To repeat an animation infinitely, use Number.POSITIVE_INFINITY
     */
    iterations?: number;

    /**
     * An optional animation curve. Possible values are contained in the [AnimationCurve enumeration](../modules/_ui_enums_.animationcurve.html).
     * Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.
     */
    curve?: any;
}

export interface GestureEventData extends EventData {
    /**
     * Gets the type of the gesture.
     */
    type: GestureTypes;
    /**
     * Gets the view which originates the gesture.
     */
    view: View;
    /**
     * Gets the underlying native iOS specific [UIGestureRecognizer](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIGestureRecognizer_Class/).
     */
    ios: any /* UIGestureRecognizer */;
    /**
     * Gets the underlying native android specific [gesture detector](http://developer.android.com/reference/android/view/GestureDetector.html).
     */
    android: any
}

export class GesturesObserver {
    /**
     * Creates an instance of GesturesObserver class.
     * @param target - The view for which the observer is created.
     * @param callback - A function that will be executed when a gesture is received.
     * @param context - default this argument for the callbacks.
     */
    constructor(target: View, callback: (args: GestureEventData) => void, context: any) {}

    /**
     * Registers a gesture observer to a view and gesture.
     * @param type - Type of the gesture.
     */
    observe(type: GestureTypes) {}

    /**
     * Disconnects the gesture observer.
     */
    disconnect() {}

    /**
     * Gesture type attached to the observer.
     */
    type: GestureTypes;

    /**
     * A function that will be executed when a gesture is received.
     */
    callback: (args: GestureEventData) => void;

    /**
     * A context which will be used as `this` in callback execution.
     */
    context: any;

    /**
     * An internal Android specific method used to pass the motion event to the correct gesture observer.
     */
    androidOnTouchEvent: (motionEvent: any /* android.view.MotionEvent */) => void;
}

export enum GestureTypes {
    /**
     * Denotes tap (click) gesture.
     */
    tap,
    /**
     * Denotes double tap gesture.
     */
    doubleTap,
    /**
     * Denotes pinch gesture.
     */
    pinch,
    /**
     * Denotes pan gesture.
     */
    pan,
    /**
     * Denotes swipe gesture.
     */
    swipe,
    /**
     * Denotes rotation gesture.
     */
    rotation,
    /**
     * Denotes long press gesture.
     */
    longPress,
    /**
     * Denotes touch action.
     */
    touch
}

export interface BindingOptions {
    /**
     * The property name of the source object (typically the ViewModel) to bind to.
     */
    sourceProperty: string;
    /**
     * The property name of the target object (that is the Bindable instance) to bind the source property to.
     */
    targetProperty: string;
    /**
     * True to establish a two-way binding, false otherwise. A two-way binding will synchronize both the source and the target property values regardless of which one initiated the change.
     */
    twoWay?: boolean;
    /**
     * An expression used for calculations (convertions) based on the value of the property.
     */
    expression?: string;
}

export interface AddChildFromBuilder {
    /**
     * Called for every child element declared in xml.
     * This method will add a child element (value) to current element.
     * @param name - Name of the element.
     * @param value - Value of the element.
     */
    _addChildFromBuilder(name: string, value: any): void;
}

export interface KeyframeDeclaration {
    property: string;
    value: any;
}

export interface KeyframeInfo {
    duration: number;
    declarations: Array<KeyframeDeclaration>;
    curve?: any;
}

export class KeyframeAnimationInfo {

    /**
     * Return animation keyframes.
     */
    keyframes: Array<KeyframeInfo>;

    /**
     * The animation name.
     */
    name?: string;

    /**
     * The length of the animation in milliseconds. The default duration is 300 milliseconds.
     */
    duration?: number;

    /**
     * The amount of time, in milliseconds, to delay starting the animation.
     */
    delay?: number;

    /**
     * Specifies how many times the animation should be played. Default is 1.
     * iOS animations support fractional iterations, i.e. 1.5.
     * To repeat an animation infinitely, use Number.POSITIVE_INFINITY
     */
    iterations?: number;

    /**
     * An optional animation curve. Possible values are contained in the [AnimationCurve enumeration](../modules/_ui_enums_.animationcurve.html).
     * Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.
     */
    curve?: any;

    /**
     * Determines whether the animation values will be applied on the animated object after the animation finishes.
     */
    isForwards: boolean;

    /**
     * If true the animation will be played backwards.
     */
    isReverse?: boolean;
}

export interface ViewEntry {
    /**
     * The name of the module containing the View instance to load. Optional.
     */
    moduleName?: string;

    /**
     * A function used to create the View instance. Optional.
     */
    create?: () => View;
}

export module AndroidTransitionType {
    export const enter: string = '';
    export const exit: string = '';
    export const popEnter: string = '';
    export const popExit: string = '';
}

export class Transition {
    constructor(duration: number, nativeCurve: any) {}
    public getDuration(): number {
        return 0
    }
    public getCurve(): any {

    }
    public animateIOSTransition(containerView: any, fromView: any, toView: any, operation: any, completion: (finished: boolean) => void): void {}
    public createAndroidAnimator(transitionType: string): any {}
    public toString(): string {
        return ''
    }
}

export interface NavigationTransition {
    /**
     * Can be one of the built-in transitions:
     * - curl (same as curlUp) (iOS only)
     * - curlUp (iOS only)
     * - curlDown (iOS only)
     * - explode (Android Lollipop(21) and up only)
     * - fade
     * - flip (same as flipRight)
     * - flipRight
     * - flipLeft
     * - slide (same as slideLeft)
     * - slideLeft
     * - slideRight
     * - slideTop
     * - slideBottom
     */
    name?: string;

    /**
     * An user-defined instance of the "ui/transition".Transition class.
     */
    instance?: Transition;

    /**
     * The length of the transition in milliseconds. If you do not specify this, the default platform transition duration will be used.
     */
    duration?: number;

    /**
     * An optional transition animation curve. Possible values are contained in the [AnimationCurve enumeration](https://docs.nativescript.org/api-reference/modules/_ui_enums_.animationcurve.html).
     * Alternatively, you can pass an instance of type UIViewAnimationCurve for iOS or android.animation.TimeInterpolator for Android.
     */
    curve?: any;
}

export interface iOSFrame {
    /**
     * Gets the native [UINavigationController](https://developer.apple.com/library/prerelease/ios/documentation/UIKit/Reference/UINavigationController_Class/index.html) instance associated with this Frame.
     */
    controller: any /* UINavigationController */;

    /**
     * Gets or sets the visibility of navigationBar.
     * Use NavBarVisibility enumeration - auto, never, always
     */
    navBarVisibility: "auto" | "never" | "always";


}

export interface BackstackEntry {
    entry: NavigationEntry;
    resolvedPage: Page;


}

export interface IOSActionItemSettings {
    /**
     * Gets or sets the position of the action item in the action bar.
     *  1. left - items is shown at the left part of the navigation bar. This is the default value.
     *  2. right - items is shown at the right part of the navigation bar.
     * Note: Property not applicable to NavigationButton
     */
    position: "left" | "right";

    /**
     * Gets or sets a number representing the iOS system item to be displayed.
     * Use this property instead of ActionItem.icon if you want to diplsay a built-in iOS system icon.
     * Note: Property not applicable to NavigationButton
     * The value should be a number from the UIBarButtonSystemItem enumeration
     * (https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIBarButtonItem_Class/#//apple_ref/c/tdef/UIBarButtonSystemItem)
     *  0: Done
     *  1: Cancel
     *  2: Edit
     *  3: Save
     *  4: Add
     *  5: FlexibleSpace
     *  6: FixedSpace
     *  7: Compose
     *  8: Reply
     *  9: Action
     * 10: Organize
     * 11: Bookmarks
     * 12: Search
     * 13: Refresh
     * 14: Stop
     * 15: Camera
     * 16: Trash
     * 17: Play
     * 18: Pause
     * 19: Rewind
     * 20: FastForward
     * 21: Undo
     * 22: Redo
     * 23: PageCurl
     */
    systemIcon: number;
}

export interface AndroidActionItemSettings {
    /**
     * Gets or sets the position of the action item in the action bar.
     *  1. actionBar - item is shown in the action bar.
     *  2. actionBarIfRoom - item is shown in the action bar if there is room for it. Otherwise it is put in the popup menu.
     *  3. popup - item is shown in the popup menu.
     * Note: Property not applicable to NavigationButton
     */
    position: "actionBar" | "actionBarIfRoom" | "popup";

    /**
     * Gets or sets the name of the system drawable resource to be displayed.
     * Use this property instead of ActionItem.icon if you want to diplsay a built-in Android system icon.
     * The value should be a string such as 'ic_menu_search' if you want to display the built-in Android Menu Search icon for example.
     * For a full list of Android drawable names, please visit http://androiddrawables.com
     */
    systemIcon: string;
}

export interface AndroidActionBarSettings {

    /**
     * Gets or sets the action bar icon.
     */
    icon: string;

    /**
     * Gets or sets the visibility of the action bar icon.
     * The icon is visible by default in pre-lollipop (API level < 20) versions of android and is hidden in lollipop (API level >= 20)
     * The possible values are:
     *  1. auto - the default behavior. This is the default value.
     *  2. always - the icon is aways shown.
     *  3. never - the icon is aways hidden.
     */
    iconVisibility: string;
}

export class ActionItems {
    /**
     * Adds an item to the collection.
     * @param item - the item to be added
     */
    addItem(item: ActionItem): void {}

    /**
     * Removes an item to the collection.
     * @param item - The item to be removed.
     */
    removeItem(item: ActionItem): void {}

    /**
     * Gets an array of the current action items in the collection.
     */
    getItems(): Array<ActionItem> {
        return []
    }

    /**
     * Gets an item at a specified index.
     * @param index - The index.
     */
    getItemAt(index: number): ActionItem {
        return new ActionItem()
    }
}

export interface ShowModalOptions {
    /**
     * Any context you want to pass to the modally shown view. This same context will be available in the arguments of the shownModally event handler.
     */
    context: any;

    /**
     * A function that will be called when the view is closed. Any arguments provided when calling ShownModallyData.closeCallback will be available here.
     */
    closeCallback: Function;

    /**
     * An optional parameter specifying whether to show the modal view in full-screen mode.
     */
    fullscreen?: boolean;

    /**
     * An optional parameter specifying whether to show the modal view with animation.
     */
    animated?: boolean;

    /**
     * An optional parameter specifying whether to stretch the modal view when not in full-screen mode.
     */
    stretched?: boolean;

    /**
     * An optional parameter that specify options specific to iOS as an object.
     */
    ios?: {
        /**
         * The UIModalPresentationStyle to be used when showing the dialog in iOS .
         */
        presentationStyle: any /* UIModalPresentationStyle */
    }
    android?: {
        /**
         * An optional parameter specifying whether the modal view can be dismissed when not in full-screen mode.
         */
        cancelable?: boolean
    }
}

export class Observable {

    /**
     * Please note that should you be using the `new Observable({})` constructor, it is **obsolete** since v3.0,
     * and you have to migrate to the "data/observable" `fromObject({})` or the `fromObjectRecursive({})` functions.
     */
    constructor() {}

    /**
     * String value used when hooking to propertyChange event.
     */
    public static propertyChangeEvent: string;

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string, callback: (data: EventData) => void, thisArg?: any) {}

    /**
     * Adds one-time listener function for the event named `event`.
     * @param event Name of the event to attach to.
     * @param callback A function to be called when the specified event is raised.
     * @param thisArg An optional parameter which when set will be used as "this" in callback method call.
     */
    once(event: string, callback: (data: EventData) => void, thisArg?: any) {}

    /**
     * Shortcut alias to the removeEventListener method.
     */
    off(eventNames: string, callback?: any, thisArg?: any) {}

    /**
     * Adds a listener for the specified event name.
     * @param eventNames Comma delimited names of the events to attach the listener to.
     * @param callback A function to be called when some of the specified event(s) is raised.
     * @param thisArg An optional parameter which when set will be used as "this" in callback method call.
     */
    addEventListener(eventNames: string, callback: (data: EventData) => void, thisArg?: any) {}

    /**
     * Removes listener(s) for the specified event name.
     * @param eventNames Comma delimited names of the events the specified listener is associated with.
     * @param callback An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed.
     * @param thisArg An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener.
     */
    removeEventListener(eventNames: string, callback?: any, thisArg?: any) {}

    /**
     * Updates the specified property with the provided value.
     */
    set(name: string, value: any): void {}

    /**
     * Gets the value of the specified property.
     */
    get(name: string): any {}

    /**
     * Notifies all the registered listeners for the event provided in the data.eventName.
     * @param data The data associated with the event.
     */
    notify<T extends EventData>(data: T): void {}

    /**
     * Notifies all the registered listeners for the property change event.
     */
    notifyPropertyChange(propertyName: string, value: any, oldValue?: any): void {}

    /**
     * Checks whether a listener is registered for the specified event name.
     * @param eventName The name of the event to check for.
     */
    hasListeners(eventName: string): boolean {
        return false
    }
}

export interface AndroidFrame extends Observable {
    /**
     * Gets the native [android ViewGroup](http://developer.android.com/reference/android/view/ViewGroup.html) instance that represents the root layout part of the Frame.
     */
    rootViewGroup: any /* android.view.ViewGroup */;

    /**
     * Gets the native [android Activity](http://developer.android.com/reference/android/app/Activity.html) instance associated with this Frame. In case of nested Frame objects, this property points to the activity of the root Frame.
     */
    activity: any /* android.support.v7.app.AppCompatActivity */;

    /**
     * Gets the current (foreground) activity for the application. This property will recursively traverse all existing Frame objects and check for own Activity property.
     */
    currentActivity: any /* android.support.v7.app.AppCompatActivity */;

    /**
     * Gets the actionBar property of the currentActivity.
     */
    actionBar: any /* android.app.ActionBar */;

    /**
     * Determines whether the Activity associated with this Frame will display an action bar or not.
     */
    showActionBar: boolean;

    /**
     * @deprecated this property is not used internally
     *
     * Gets or sets whether the page UI will be cached when navigating away from the page.
     */
    cachePagesOnNavigate: boolean;

    /**
     * Finds the native android.support.v4.app.Fragment instance created for the specified Page.
     * @param page The Page instance to search for.
     */
    fragmentForPage(entry: BackstackEntry): any;
}

export abstract class ViewBase extends Observable {
    // Dynamic properties.
    left: Length;
    top: Length;
    effectiveLeft: number;
    effectiveTop: number;
    dock: "left" | "top" | "right" | "bottom";
    row: number;
    col: number;
    rowSpan: number;
    colSpan: number;
    domNode: DOMNode;

    order: Order;
    flexGrow: FlexGrow;
    flexShrink: FlexShrink;
    flexWrapBefore: FlexWrapBefore;
    alignSelf: AlignSelf;

    /**
     * @private
     * Module name when the view is a module root. Otherwise, it is undefined.
     */
    _moduleName?: string;



    /**
     * @deprecated use showModal with ShowModalOptions instead
     *
     * Shows the View contained in moduleName as a modal view.
     * @param moduleName - The name of the module to load starting from the application root.
     * @param context - Any context you want to pass to the modally shown view.
     * This same context will be available in the arguments of the shownModally event handler.
     * @param closeCallback - A function that will be called when the view is closed.
     * Any arguments provided when calling ShownModallyData.closeCallback will be available here.
     * @param fullscreen - An optional parameter specifying whether to show the modal view in full-screen mode.
     * @param animated - An optional parameter specifying whether to show the modal view with animation.
     * @param stretched - An optional parameter specifying whether to stretch the modal view when not in full-screen mode.
     */
    showModal(moduleName: string, context: any, closeCallback: Function, fullscreen?: boolean, animated?: boolean, stretched?: boolean): ViewBase;

    /**
     * @deprecated use showModal with ShowModalOptions instead
     *
     * Shows the view passed as parameter as a modal view.
     * @param view - View instance to be shown modally.
     * @param context - Any context you want to pass to the modally shown view. This same context will be available in the arguments of the shownModally event handler.
     * @param closeCallback - A function that will be called when the view is closed. Any arguments provided when calling ShownModallyData.closeCallback will be available here.
     * @param fullscreen - An optional parameter specifying whether to show the modal view in full-screen mode.
     * @param animated - An optional parameter specifying whether to show the modal view with animation.
     * @param stretched - An optional parameter specifying whether to stretch the modal view when not in full-screen mode.
     */
    showModal(view: ViewBase, context: any, closeCallback: Function, fullscreen?: boolean, animated?: boolean, stretched?: boolean): ViewBase;

    /**
     * Shows the View contained in moduleName as a modal view.
     * @param moduleName - The name of the module to load starting from the application root.
     * @param modalOptions - A ShowModalOptions instance
     */
    showModal(moduleName: string, modalOptions: ShowModalOptions): ViewBase;

    /**
     * Shows the view passed as parameter as a modal view.
     * @param view - View instance to be shown modally.
     * @param modalOptions - A ShowModalOptions instance
     */
    showModal(view: ViewBase, modalOptions: ShowModalOptions): ViewBase;

    /**
     * @deprecated use showModal method with arguments
     */
    showModal(): ViewBase {
        return new class extends ViewBase {
            _moduleName: string;
        }
    }

    /**
     * Closes the current modal view that this page is showing.
     * @param context - Any context you want to pass back to the host when closing the modal view.
     */
    closeModal(context?: any): void {}

    public effectiveMinWidth: number;
    public effectiveMinHeight: number;
    public effectiveWidth: number;
    public effectiveHeight: number;
    public effectiveMarginTop: number;
    public effectiveMarginRight: number;
    public effectiveMarginBottom: number;
    public effectiveMarginLeft: number;
    public effectivePaddingTop: number;
    public effectivePaddingRight: number;
    public effectivePaddingBottom: number;
    public effectivePaddingLeft: number;
    public effectiveBorderTopWidth: number;
    public effectiveBorderRightWidth: number;
    public effectiveBorderBottomWidth: number;
    public effectiveBorderLeftWidth: number;

    /**
     * String value used when hooking to loaded event.
     */
    public static loadedEvent: string;

    /**
     * String value used when hooking to unloaded event.
     */
    public static unloadedEvent: string;

    public ios: any;
    public android: any;

    /**
     * returns the native UIViewController.
     */
    public viewController: any;

    /**
     * read-only. If you want to set out-of-band the nativeView use the setNativeView method.
     */
    public nativeViewProtected: any;
    public nativeView: any;
    public bindingContext: any;

    /**
     * Gets the name of the constructor function for this instance. E.g. for a Button class this will return "Button".
     */
    public typeName: string;

    /**
     * Gets the parent view. This property is read-only.
     */
    public readonly parent: ViewBase;

    /**
     * Gets the template parent or the native parent. Sets the template parent.
     */
    public parentNode: ViewBase;

    /**
     * Gets or sets the id for this view.
     */
    public id: string;

    /**
     * Gets or sets the CSS class name for this view.
     */
    public className: string;

    /**
     * Gets owner page. This is a read-only property.
     */
    public readonly page: Page;

    /**
     * Gets the style object associated to this view.
     */
    public readonly style: Style;

    /**
     * Returns true if visibility is set to 'collapse'.
     * Readonly property
     */
    public isCollapsed: boolean;
    public readonly isLoaded: boolean;

    /**
     * Returns the child view with the specified id.
     */
    public getViewById<T extends ViewBase>(id: string): T {
        return null
    }

    /**
     * Load view.
     * @param view to load.
     */
    public loadView(view: ViewBase): void {}

    /**
     * Unload view.
     * @param view to unload.
     */
    public unloadView(view: ViewBase): void {}

    public onLoaded(): void {}
    public onUnloaded(): void {}
    public onResumeNativeUpdates(): void {}

    public bind(options: BindingOptions, source?: Object): void {}
    public unbind(property: string): void {}

    /**
     * Invalidates the layout of the view and triggers a new layout pass.
     */
    public requestLayout(): void {}

    /**
     * Iterates over children of type ViewBase.
     * @param callback Called for each child of type ViewBase. Iteration stops if this method returns falsy value.
     */
    public eachChild(callback: (child: ViewBase) => boolean): void {}

    public _addView(view: ViewBase, atIndex?: number): void {}
    /**
     * Method is intended to be overridden by inheritors and used as "protected"
     */
    public _addViewCore(view: ViewBase, atIndex?: number): void {}

    public _removeView(view: ViewBase): void {}
    /**
     * Method is intended to be overridden by inheritors and used as "protected"
     */
    public _removeViewCore(view: ViewBase): void {}
    public _parentChanged(oldParent: ViewBase): void {}
    /**
     * Method is intended to be overridden by inheritors and used as "protected"
     */
    public _dialogClosed(): void {}
    /**
     * Method is intended to be overridden by inheritors and used as "protected"
     */
    public _onRootViewReset(): void {}

    _domId: number;

    _cssState: any /* "ui/styling/style-scope" */;
    /**
     * @private
     * Notifies each child's css state for change, recursively.
     * Either the style scope, className or id properties were changed.
     */
    _onCssStateChange(): void {}

    public cssClasses: Set<string>;
    public cssPseudoClasses: Set<string>;

    public _goToVisualState(state: string): void {}
    /**
     * @deprecated
     *
     * This used to be the way to set attribute values in early {N} versions.
     * Now attributes are expected to be set as plain properties on the view instances.
     */
    public _applyXmlAttribute(attribute, value): boolean {
        return false
    }
    public setInlineStyle(style: string): void {}

    _context: any /* android.content.Context */;

    /**
     * Setups the UI for ViewBase and all its children recursively.
     * This method should *not* be overridden by derived views.
     */
    _setupUI(context: any /* android.content.Context */, atIndex?: number): void {}

    /**
     * Tears down the UI for ViewBase and all its children recursively.
     * This method should *not* be overridden by derived views.
     */
    _tearDownUI(force?: boolean): void {}

    /**
     * Creates a native view.
     * Returns either android.view.View or UIView.
     */
    createNativeView(): Object {
        return {}
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {}

    /**
     * Clean up references to the native view.
     */
    disposeNativeView(): void {}

    /**
     * Resets properties/listeners set to the native view.
     */
    resetNativeView(): void {}

    /**
     * Set the nativeView field performing extra checks and updates to the native properties on the new view.
     * Use in cases where the createNativeView is not suitable.
     * As an example use in item controls where the native parent view will create the native views for child items.
     */
    setNativeView(view: any): void {}

    _isAddedToNativeVisualTree: boolean;

    /**
     * Performs the core logic of adding a child view to the native visual tree. Returns true if the view's native representation has been successfully added, false otherwise.
     */
    _addViewToNativeVisualTree(view: ViewBase, atIndex?: number): boolean {
        return false
    }
    _removeViewFromNativeVisualTree(view: ViewBase): void {}
    _childIndexToNativeChildIndex(index?: number): number {
        return 0
    }

    /**
     * @protected
     * @unstable
     * A widget can call this method to add a matching css pseudo class.
     */
    public addPseudoClass(name: string): void {}

    /**
     * @protected
     * @unstable
     * A widget can call this method to discard matching css pseudo class.
     */
    public deletePseudoClass(name: string): void {}

    /**
     * @unstable
     * Ensures a dom-node for this view.
     */
    public ensureDomNode() {}
}

export class ActionItem extends ViewBase {
    /**
     * Gets or sets the text of the action item.
     */
    text: string;

    /**
     * Gets or sets the icon of the action item.
     */
    icon: string;

    /**
     * Gets or sets the custom action view of the action item.
     */
    actionView: View;

    /**
     * Gets or sets the visibility of the action item.
     */
    visibility: string;

    /**
     * Gets the action bar that contains the action item.
     */
    actionBar: ActionBar;

    /**
     * Raised when a tap event occurs.
     */
    on(event: "tap", callback: (args: EventData) => void) {}



    /**
     * Gets the iOS specific options of the action item.
     */
    ios: IOSActionItemSettings;

    /**
     * Gets the Android specific options of the action item.
     */
    android: AndroidActionItemSettings;
}

export class NavigationButton extends ActionItem {

}

export abstract class View extends ViewBase {
    /**
     * String value used when hooking to layoutChanged event.
     */
    public static layoutChangedEvent: string;
    /**
     * String value used when hooking to showingModally event.
     */
    public static showingModallyEvent: string;

    /**
     * String value used when hooking to shownModally event.
     */
    public static shownModallyEvent: string;

    /**
     * Gets the android-specific native instance that lies behind this proxy. Will be available if running on an Android platform.
     */
    public android: any;

    /**
     * Gets the ios-specific native instance that lies behind this proxy. Will be available if running on an iOS platform.
     */
    public ios: any;

    /**
     * Gets or sets the binding context of this instance. This object is used as a source for each Binding that does not have a source object specified.
     */
    bindingContext: any;

    /**
     * Gets or sets the border color of the view.
     */
    borderColor: string | Color;

    /**
     * Gets or sets the top border color of the view.
     */
    borderTopColor: Color;

    /**
     * Gets or sets the right border color of the view.
     */
    borderRightColor: Color;

    /**
     * Gets or sets the bottom border color of the view.
     */
    borderBottomColor: Color;

    /**
     * Gets or sets the left border color of the view.
     */
    borderLeftColor: Color;

    /**
     * Gets or sets the border width of the view.
     */
    borderWidth: string | Length;

    /**
     * Gets or sets the top border width of the view.
     */
    borderTopWidth: Length;

    /**
     * Gets or sets the right border width of the view.
     */
    borderRightWidth: Length;

    /**
     * Gets or sets the bottom border width of the view.
     */
    borderBottomWidth: Length;

    /**
     * Gets or sets the left border width of the view.
     */
    borderLeftWidth: Length;

    /**
     * Gets or sets the border radius of the view.
     */
    borderRadius: string | Length;

    /**
     * Gets or sets the top left border radius of the view.
     */
    borderTopLeftRadius: Length;

    /**
     * Gets or sets the top right border radius of the view.
     */
    borderTopRightRadius: Length;

    /**
     * Gets or sets the bottom right border radius of the view.
     */
    borderBottomRightRadius: Length;

    /**
     * Gets or sets the bottom left border radius of the view.
     */
    borderBottomLeftRadius: Length;

    /**
     * Gets or sets the color of the view.
     */
    color: Color;

    /**
     * Gets or sets the elevation of the android view.
     */
    androidElevation: number;

    /**
     * Gets or sets the dynamic elevation offset of the android view.
     */
    androidDynamicElevationOffset: number;

    /**
     * Gets or sets the background style property.
     */
    background: string;

    /**
     * Gets or sets the background color of the view.
     */
    backgroundColor: string | Color;

    /**
     * Gets or sets the background image of the view.
     */
    backgroundImage: string | LinearGradient;

    /**
     * Gets or sets the minimum width the view may grow to.
     */
    minWidth: Length;

    /**
     * Gets or sets the minimum height the view may grow to.
     */
    minHeight: Length;

    /**
     * Gets or sets the desired width of the view.
     */
    width: PercentLength;

    /**
     * Gets or sets the desired height of the view.
     */
    height: PercentLength;

    /**
     * Gets or sets margin style property.
     */
    margin: string | PercentLength;

    /**
     * Specifies extra space on the left side of this view.
     */
    marginLeft: PercentLength;

    /**
     * Specifies extra space on the top side of this view.
     */
    marginTop: PercentLength;

    /**
     * Specifies extra space on the right side of this view.
     */
    marginRight: PercentLength;

    /**
     * Specifies extra space on the bottom side of this view.
     */
    marginBottom: PercentLength;

    /**
     * Gets or sets the alignment of this view within its parent along the Horizontal axis.
     */
    horizontalAlignment: HorizontalAlignment;

    /**
     * Gets or sets the alignment of this view within its parent along the Vertical axis.
     */
    verticalAlignment: VerticalAlignment;

    /**
     * Gets or sets the visibility of the view.
     */
    visibility: Visibility;

    /**
     * Gets or sets the opacity style property.
     */
    opacity: number;

    /**
     * Gets or sets the rotate affine transform of the view.
     */
    rotate: number;

    /**
     * Gets or sets the translateX affine transform of the view in device independent pixels.
     */
    translateX: dip;

    /**
     * Gets or sets the translateY affine transform of the view in device independent pixels.
     */
    translateY: dip;

    /**
     * Gets or sets the scaleX affine transform of the view.
     */
    scaleX: number;

    /**
     * Gets or sets the scaleY affine transform of the view.
     */
    scaleY: number;

    //END Style property shortcuts

    /**
     * Gets or sets the automation text of the view.
     */
    automationText: string;

    /**
     * Gets or sets the X component of the origin point around which the view will be transformed. The deafault value is 0.5 representing the center of the view.
     */
    originX: number;

    /**
     * Gets or sets the Y component of the origin point around which the view will be transformed. The deafault value is 0.5 representing the center of the view.
     */
    originY: number;

    /**
     * Gets or sets a value indicating whether the the view is enabled. This affects the appearance of the view.
     */
    isEnabled: boolean;

    /**
     * Gets or sets a value indicating whether the user can interact with the view. This does not affect the appearance of the view.
     */
    isUserInteractionEnabled: boolean;

    /**
     * Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: false
     */
    iosOverflowSafeArea: boolean;

    /**
     * Enables or disables the iosOverflowSafeArea property for all children. This property is iOS specific. Default value: true
     */
    iosOverflowSafeAreaEnabled: boolean;

    /**
     * Gets is layout is valid. This is a read-only property.
     */
    isLayoutValid: boolean;

    /**
     * Gets the CSS fully qualified type name.
     * Using this as element type should allow for PascalCase and kebap-case selectors, when fully qualified, to match the element.
     */
    cssType: string;

    cssClasses: Set<string>;
    cssPseudoClasses: Set<string>;

    /**
     * This is called to find out how big a view should be. The parent supplies constraint information in the width and height parameters.
     * The actual measurement work of a view is performed in onMeasure(int, int), called by this method. Therefore, only onMeasure(int, int) can and must be overridden by subclasses.
     * @param widthMeasureSpec    Horizontal space requirements as imposed by the parent
     * @param heightMeasureSpec    Vertical space requirements as imposed by the parent
     */
    public measure(widthMeasureSpec: number, heightMeasureSpec: number): void {}

    /**
     * Assign a size and position to a view and all of its descendants
     * This is the second phase of the layout mechanism. (The first is measuring). In this phase, each parent calls layout on all of its children to position them. This is typically done using the child measurements that were stored in the measure pass().
     * Derived classes should not override this method. Derived classes with children should override onLayout. In that method, they should call layout on each of their children.
     * @param l Left position, relative to parent
     * @param t Top position, relative to parent
     * @param r Right position, relative to parent
     * @param b Bottom position, relative to parent
     */
    public layout(left: number, top: number, right: number, bottom: number, setFrame?: boolean): void {}

    /**
     * Returns the raw width component.
     */
    public getMeasuredWidth(): number {
        return 0
    }

    /**
     * Returns the raw height component.
     */
    public getMeasuredHeight(): number {
        return 0
    }

    public getMeasuredState(): number {
        return 0
    }

    /**
     * Measure the view and its content to determine the measured width and the measured height. This method is invoked by measure(int, int) and should be overriden by subclasses to provide accurate and efficient measurement of their contents.
     * When overriding this method, you must call setMeasuredDimension(int, int) to store the measured width and height of this view. Failure to do so will trigger an exception, thrown by measure(int, int).
     * @param widthMeasureSpec    horizontal space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec.
     * @param heightMeasureSpec    vertical space requirements as imposed by the parent. The requirements are encoded with View.MeasureSpec.
     */
    public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {}

    /**
     * Called from layout when this view should assign a size and position to each of its children. Derived classes with children should override this method and call layout on each of their children.
     * @param left      Left position, relative to parent
     * @param top       Top position, relative to parent
     * @param right     Right position, relative to parent
     * @param bottom    Bottom position, relative to parent
     */
    public onLayout(left: number, top: number, right: number, bottom: number): void {}

    /**
     * This method must be called by onMeasure(int, int) to store the measured width and measured height. Failing to do so will trigger an exception at measurement time.
     * @param measuredWidth        The measured width of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL.
     * @param measuredHeight    The measured height of this view. May be a complex bit mask as defined by MEASURED_SIZE_MASK and MEASURED_STATE_TOO_SMALL.
     */
    public setMeasuredDimension(measuredWidth: number, measuredHeight: number): void {}

    /**
     * Called from onLayout when native view position is about to be changed.
     * @param left      Left position, relative to parent
     * @param top       Top position, relative to parent
     * @param right     Right position, relative to parent
     * @param bottom    Bottom position, relative to parent
     */
    public layoutNativeView(left: number, top: number, right: number, bottom: number): void {}

    /**
     * Measure a child by taking into account its margins and a given measureSpecs.
     * @param parent            This parameter is not used. You can pass null.
     * @param child             The view to be measured.
     * @param measuredWidth     The measured width that the parent layout specifies for this view.
     * @param measuredHeight    The measured height that the parent layout specifies for this view.
     */
    public static measureChild(parent: View, child: View, widthMeasureSpec: number, heightMeasureSpec: number): { measuredWidth: number; measuredHeight: number } {
        return {
            measuredWidth: 0,
            measuredHeight: 0
        }
    }

    /**
     * Layout a child by taking into account its margins, horizontal and vertical alignments and a given bounds.
     * @param parent    This parameter is not used. You can pass null.
     * @param left      Left position, relative to parent
     * @param top       Top position, relative to parent
     * @param right     Right position, relative to parent
     * @param bottom    Bottom position, relative to parent
     */
    public static layoutChild(parent: View, child: View, left: number, top: number, right: number, bottom: number): void {}

    /**
     * Utility to reconcile a desired size and state, with constraints imposed
     * by a MeasureSpec.  Will take the desired size, unless a different size
     * is imposed by the constraints.  The returned value is a compound integer,
     * with the resolved size in the {@link #MEASURED_SIZE_MASK} bits and
     * optionally the bit {@link #MEASURED_STATE_TOO_SMALL} set if the resulting
     * size is smaller than the size the view wants to be.
     */
    public static resolveSizeAndState(size: number, specSize: number, specMode: number, childMeasuredState: number): number {
        return 0
    }

    public static combineMeasuredStates(curState: number, newState): number {
        return 0
    }

    /**
     * Tries to focus the view.
     * Returns a value indicating whether this view or one of its descendants actually took focus.
     */
    public focus(): boolean {
        return false
    }

    public getGestureObservers(type: GestureTypes): Array<GesturesObserver> {
        return  []
    }

    /**
     * @deprecated use on() instead
     *
     * @param type - Type of the gesture.
     * @param callback - A function that will be executed when gesture is received.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    observe(type: GestureTypes, callback: (args: GestureEventData) => void, thisArg?: any) {}

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change") or you can use gesture types.
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string | GestureTypes, callback: (args: EventData) => void, thisArg?: any) {}

    /**
     * Removes listener(s) for the specified event name.
     * @param eventNames Comma delimited names of the events or gesture types the specified listener is associated with.
     * @param callback An optional parameter pointing to a specific listener. If not defined, all listeners for the event names will be removed.
     * @param thisArg An optional parameter which when set will be used to refine search of the correct callback which will be removed as event listener.
     */
    off(eventNames: string | GestureTypes, callback?: (args: EventData) => void, thisArg?: any) {}

    /**
     * Returns the current modal view that this page is showing (is parent of), if any.
     */
    modal: View;

    /**
     * Animates one or more properties of the view based on the supplied options.
     */
    public animate(options: AnimationDefinition): AnimationPromise {
        return {
            ...Promise.resolve(),
            cancel(): void {
            }
        }
    }

    /**
     * Creates an Animation object based on the supplied options.
     */
    public createAnimation(options: AnimationDefinition): Animation {
        return new AnimationMock()
    }

    /**
     * Returns the iOS safe area insets of this view.
     */
    public getSafeAreaInsets(): { left, top, right, bottom } {
        return {
            left: 0, top: 0, right: 0, bottom: 0
        }
    }

    /**
     * Returns the location of this view in the window coordinate system.
     */
    public getLocationInWindow(): Point {
        return {
            v: 0,
            h: 0
        }
    }

    /**
     * Returns the location of this view in the screen coordinate system.
     */
    public getLocationOnScreen(): Point {
        return {
            v: 0,
            h: 0
        }
    }

    /**
     * Returns the location of this view in the otherView's coordinate system.
     */
    public getLocationRelativeTo(otherView: View): Point {
        return {
            v: 0,
            h: 0
        }
    }

    /**
     * Returns the actual size of the view in device-independent pixels.
     */
    public getActualSize(): Size {
        return {
            width: 0,
            height: 0
        }
    }

    /**
     * Derived classes can override this method to handle Android back button press.
     */
    onBackPressed(): boolean {
        return false
    }

    /**
     * @private
     * A valid css string which will be applied for all nested UI components (based on css rules).
     */
    css: string;

    /**
     * @private
     * Adds a new values to current css.
     * @param cssString - A valid css which will be added to current css.
     */
    addCss(cssString: string): void {}

    /**
     * @private
     * Adds the content of the file to the current css.
     * @param cssFileName - A valid file name (from the application root) which contains a valid css.
     */
    addCssFile(cssFileName: string): void {}

    /**
     * @private
     * Changes the current css to the content of the file.
     * @param cssFileName - A valid file name (from the application root) which contains a valid css.
     */
    changeCssFile(cssFileName: string): void {}

    // Lifecycle events
    _getNativeViewsCount(): number {
        return 0
    }

    /**
     * __Obsolete:__ There is a new property system that does not rely on _getValue.
     */
    _getValue(property: any): never {
        while (true) {}
    }

    /**
     * __Obsolete:__ There is a new property system that does not rely on _setValue.
     */
    _setValue(property: any, value: any): never {
        while (true) {}
    }
}

export class Frame extends View {
    /**
     * @deprecated
     *
     * String value used when hooking to androidOptionSelected event (prefix `android` states that this event is available only in Android).
     */
    public static androidOptionSelectedEvent: string;

    /**
     * Navigates to the previous entry (if any) in the back stack.
     * @param to The backstack entry to navigate back to.
     */
    goBack(to?: BackstackEntry) {}

    /**
     * Checks whether the goBack operation is available.
     */
    canGoBack(): boolean {
        return false
    }

    /**
     * Navigates to a Page instance as described by the module name.
     * This method will require the module and will check for a Page property in the exports of the module.
     * @param pageModuleName The name of the module to require starting from the application root.
     * For example if you want to navigate to page called "myPage.js" in a folder called "subFolder" and your root folder is "app" you can call navigate method like this:
     * const frames = require("ui/frame");
     * frames.topmost().navigate("app/subFolder/myPage");
     */
    navigate(pageModuleName: string) {}

    /**
     * Used to control the visibility the Navigation Bar in iOS and the Action Bar in Android.
     */
    public actionBarVisibility: "auto" | "never" | "always";

    /**
     * Gets the back stack of this instance.
     */
    backStack: Array<BackstackEntry>;

    /**
     * Gets the Page instance the Frame is currently navigated to.
     */
    currentPage: Page;

    /**
     * Gets the NavigationEntry instance the Frame is currently navigated to.
     */
    currentEntry: NavigationEntry;

    /**
     * Gets or sets if navigation transitions should be animated.
     */
    animated: boolean;

    /**
     * Gets or sets the default navigation transition for this frame.
     */
    transition: NavigationTransition;

    /**
     * Gets or sets if navigation transitions should be animated globally.
     */
    static defaultAnimatedNavigation: boolean;

    /**
     * Gets or sets the default NavigationTransition for all frames across the app.
     */
    static defaultTransition: NavigationTransition;

    /**
     * Gets the AndroidFrame object that represents the Android-specific APIs for this Frame. Valid when running on Android OS.
     */
    android: AndroidFrame;

    /**
     * Gets the iOSFrame object that represents the iOS-specific APIs for this Frame. Valid when running on iOS.
     */
    ios: iOSFrame;



    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string, callback: (args: EventData) => void, thisArg?: any) {}
}

export class ActionBar extends View {

    /**
     * Gets or sets the action bar title.
     */
    title: string;

    /**
     * Gets or sets the title view. When set - replaces the title with a custom view.
     */
    titleView: View;

    /**
     * Gets or sets the navigation button (a.k.a. the back button).
     */
    navigationButton: NavigationButton;

    /**
     * Removes the shadow/border at the bottom of the ActionBar and removes translucency on iOS.
     * Default false.
     */
    flat: boolean;

    /**
     * Gets the collection of action items.
     */
    actionItems: ActionItems;

    /**
     * Gets the android specific options of the action bar.
     */
    android: AndroidActionBarSettings;

    /**
     * Gets the native iOS [UINavigationBar](https://developer.apple.com/documentation/uikit/uinavigationbar) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UITabBarController */;

    /**
     * Gets or set the UIImageRenderingMode of the action bar icons in iOS. Defaults to "alwaysOriginal"
     * Valid values are:
     *  - automatic
     *  - alwaysOriginal
     *  - alwaysTemplate
     */
    iosIconRenderingMode: "automatic" | "alwaysOriginal" | "alwaysTemplate";

    /**
     * Updates the action bar.
     */
    update() {}


}

export class ContainerView extends View {
    /**
     * Instruct container view to expand beyond the safe area. This property is iOS specific. Default value: true
     */
    public iosOverflowSafeArea: boolean;
}

export class CustomLayoutView extends ContainerView {

}

export class LayoutBase extends CustomLayoutView {
    /**
     * Returns the number of children in this Layout.
     */
    getChildrenCount(): number {
        return 0
    }

    /**
     * Returns the view at the specified position.
     * @param index The position at which to get the child from.
     */
    getChildAt(index: number): View {
        return new class extends View {
            _moduleName: string;
        }
    }

    /**
     * Returns the position of the child view
     * @param child The child view that we are looking for.
     */
    getChildIndex(child: View): number {
        return 0
    }

    /**
     * Adds the view to children array.
     * @param view The view to be added to the end of the children array.
     */
    addChild(view: View): void {}

    /**
     * Inserts the view to children array at the specified index.
     * @param view The view to be added to the end of the children array.
     * @param atIndex The insertion index.
     */
    insertChild(child: View, atIndex: number): void {}

    /**
     * Removes the specified view from the children array.
     * @param view The view to remove from the children array.
     */
    removeChild(view: View): void {}

    /**
     * Removes all views in this layout.
     */
    removeChildren(): void {}

    /**
     * INTERNAL. Used by the layout system.
     */
    _registerLayoutChild(child: View): void {}

    /**
     * INTERNAL. Used by the layout system.
     */
    _unregisterLayoutChild(child: View): void {}

    /**
     * Calls the callback for each child that should be laid out.
     * @param callback The callback
     */
    eachLayoutChild(callback: (child: View, isLast: boolean) => void): void {}

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
     * Gets or sets a value indicating whether to clip the content of this layout.
     */
    clipToBounds: boolean;

    /**
     * Gets or sets a value indicating whether touch event should pass through to a parent view of the
     * layout container in case an interactive child view did not handle it.
     * Default value of this property is false. This does not affect the appearance of the view.
     */
    isPassThroughParentEnabled: boolean;
}

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

export interface NavigationEntry extends ViewEntry {
    /**
     * An object passed to the onNavigatedTo callback of the Page. Typically this is used to pass some data among pages. Optional.
     */
    context?: any;

    /**
     * An object to become the binding context of the page navigating to. Optional.
     */
    bindingContext?: any;

    /**
     * True to navigate to the new Page using animated transitions, false otherwise.
     */
    animated?: boolean;

    /**
     * Specifies an optional navigation transition for all platforms. If not specified, the default platform transition will be used.
     */
    transition?: NavigationTransition;

    /**
     * Specifies an optional navigation transition for iOS. If not specified, the default platform transition will be used.
     */
    transitioniOS?: NavigationTransition;

    /**
     * Specifies an optional navigation transition for Android. If not specified, the default platform transition will be used.
     */
    transitionAndroid?: NavigationTransition;

    /**
     * True to record the navigation in the backstack, false otherwise.
     * If the parameter is set to false then the Page will be displayed but once navigated from it will not be able to be navigated back to.
     */
    backstackVisible?: boolean;

    /**
     * True to clear the navigation history, false otherwise. Very useful when navigating away from login pages.
     */
    clearHistory?: boolean;
}

export class ContentView extends View implements AddChildFromBuilder {
    /**
     * Gets or sets the single child of the view.
     */
    content: View;



    _addChildFromBuilder(name: string, value: any): void{}

    layoutView: View;
}

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

export type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type JustifyContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
export type AlignItems = "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
export type AlignContent = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "stretch";

/**
 * A flex order integer.
 */
export type Order = number;

/**
 * A flex-grow number. Negative values are invalid.
 */
export type FlexGrow = number;

/**
 * A flex-shrink number. Negative values are invalid.
 */
export type FlexShrink = number;

/**
 * A flex-wrap-before value. True, false or their string presentations "true" or "false".
 */
export type FlexWrapBefore = boolean;

export type AlignSelf = "auto" | AlignItems;

export class FlexboxLayout extends LayoutBase {
    public flexDirection: FlexDirection;
    public flexWrap: FlexWrap;
    public justifyContent: JustifyContent;
    public alignItems: AlignItems;
    public alignContent: AlignContent;

    public static setOrder(view: View, order: number) {}
    public static getOrder(view: View): number {
        return 0
    }

    public static setFlexGrow(view: View, grow: number) {}
    public static getFlexGrow(view: View) {}

    public static setFlexShrink(view: View, shrink: number) {}
    public static getFlexShrink(view: View): number {
        return 0
    }

    public static setAlignSelf(view: View, align: AlignSelf) {}
    public static getAlignSelf(view: View): AlignSelf {
        return "auto"
    }

    public static setFlexWrapBefore(view: View, wrap: boolean) {}
    public static getFlexWrapBefore(view: View): boolean {
        return false
    }
}

export interface CSSComputedStyleProperty {
    name: string;
    value: string;
}

export declare function getNodeById(id: number): DOMNode;
export declare class DOMNode {
    nodeId: any;
    nodeType: any;
    nodeName: any;
    localName: any;
    nodeValue: string;
    attributes: string[];
    viewRef: WeakRef<ViewBase>;
    constructor(view: ViewBase);
    loadAttributes(): void;
    readonly children: DOMNode[];
    onChildAdded(childView: ViewBase): void;
    onChildRemoved(view: ViewBase): void;
    attributeModified(name: string, value: any): void;
    attributeRemoved(name: string): void;
    getComputedProperties(): CSSComputedStyleProperty[];
    dispose(): void;
    toJSON(): string;
}

export type WhiteSpace = "initial" | "normal" | "nowrap";
export type TextAlignment = "initial" | "left" | "center" | "right";
export type TextTransform = "initial" | "none" | "capitalize" | "uppercase" | "lowercase";
export type TextDecoration = "none" | "underline" | "line-through" | "underline line-through";


export type FontWeight = "100" | "200" | "300" | "normal" | "400" | "500" | "600" | "bold" | "700" | "800" | "900";
export namespace FontWeight {
    export const THIN = "100";
    export const EXTRA_LIGHT = "200";
    export const LIGHT = "300";
    export const NORMAL = "normal";
    export const MEDIUM = "500";
    export const SEMI_BOLD = "600";
    export const BOLD = "bold";
    export const EXTRA_BOLD = "800";
    export const BLACK = "900";
    export function isValid(value: any): boolean {
        return false
    }
    export function parse(value: string): FontWeight {
        return BOLD
    }
}

export type FontStyle = "normal" | "italic";
export namespace FontStyle {
    export const NORMAL = "normal";
    export const ITALIC = "italic";
    export function isValid(value: any): boolean {
        return false
    }
    export function parse(value: string): FontStyle {
        return NORMAL
    }
}

export class LinearGradient {
    public angle: number;
    public colorStops: ColorStop[];

    public static parse(value: LinearGradient): LinearGradient {
        return new LinearGradient()
    }

    public static equals(first: LinearGradient, second: LinearGradient): boolean {
        return false
    }
}

export interface ColorStop {
    color: Color;
    offset?: LengthPercentUnit;
}

export class Color {
    constructor(knownColor: string) {}

    /**
     * Gets the Alpha component (in the [0, 255] range) of this color. This is a read-only property.
     */
    public a: number;

    /**
     * Gets the Red component (in the [0, 255] range) of this color. This is a read-only property.
     */
    public r: number;

    /**
     * Gets the Green component (in the [0, 255] range) of this color. This is a read-only property.
     */
    public g: number;

    /**
     * Gets the Blue component (in the [0, 255] range) of this color. This is a read-only property.
     */
    public b: number;

    /**
     * Gets the Hexadecimal string representation of this color. This is a read-only property.
     */
    public hex: string;

    /**
     * Gets the Argb Number representation of this color where each 8 bits represent a single color component. This is a read-only property.
     */
    public argb: number;

    /**
     * Gets the known name of this instance. Defined only if it has been constructed from a known color name - e.g. "red". This is a read-only property.
     */
    public name: string;

    /**
     * Gets the android-specific integer value representation. Same as the Argb one. This is a read-only property.
     */
    android: number;

    /**
     * Gets the iOS-specific UIColor value representation. This is a read-only property.
     */
    ios: any /* UIColor */;

    /**
     * Specifies whether this Color is equal to the Color parameter.
     * @param value The Color to test.
     */
    public equals(value: Color): boolean {
        return false
    }

    /**
     * Compares two Color instances.
     * @param value1 A Color to compare.
     * @param value2 A Color to compare.
     */
    public static equals(value1: Color, value2: Color): boolean {
        return false
    }

    /**
     * Validates if a value can be converted to color.
     * @param value Input string.
     */
    public static isValid(value: any): boolean {
        return false
    }
}

export class Background {
    public static default: Background;
    public color: Color;
    public image: string | LinearGradient;
    public repeat: BackgroundRepeat;
    public position: string;
    public size: string;
    public borderTopColor: Color;
    public borderRightColor: Color;
    public borderBottomColor: Color;
    public borderLeftColor: Color;
    public borderTopWidth: number;
    public borderRightWidth: number;
    public borderBottomWidth: number;
    public borderLeftWidth: number;
    public borderTopLeftRadius: number;
    public borderTopRightRadius: number;
    public borderBottomRightRadius: number;
    public borderBottomLeftRadius: number;
    public clipPath: string;

    public withColor(value: Color): Background {
        return this
    }
    public withImage(value: string | LinearGradient): Background {
        return this
    }
    public withRepeat(value: BackgroundRepeat): Background {
        return this
    }
    public withPosition(value: string): Background {
        return this
    }
    public withSize(value: string): Background {
        return this
    }
    public withBorderTopColor(value: Color): Background {
        return this
    }
    public withBorderRightColor(value: Color): Background {
        return this
    }
    public withBorderBottomColor(value: Color): Background {
        return this
    }
    public withBorderLeftColor(value: Color): Background {
        return this
    }
    public withBorderTopWidth(value: number): Background {
        return this
    }
    public withBorderRightWidth(value: number): Background {
        return this
    }
    public withBorderBottomWidth(value: number): Background {
        return this
    }
    public withBorderLeftWidth(value: number): Background {
        return this
    }
    public withBorderTopLeftRadius(value: number): Background {
        return this
    }
    public withBorderTopRightRadius(value: number): Background {
        return this
    }
    public withBorderBottomRightRadius(value: number): Background {
        return this
    }
    public withBorderBottomLeftRadius(value: number): Background {
        return this
    }
    public withClipPath(value: string): Background {
        return this
    }

    public isEmpty(): boolean {
        return false
    }

    public static equals(value1: Background, value2: Background): boolean {
        return false
    }

    public hasBorderColor(): boolean {
        return false
    }
    public hasBorderWidth(): boolean {
        return false
    }
    public hasBorderRadius(): boolean {
        return false
    }
    public hasUniformBorderColor(): boolean {
        return false
    }
    public hasUniformBorderWidth(): boolean {
        return false
    }
    public hasUniformBorderRadius(): boolean {
        return false
    }
    public hasUniformBorder(): boolean {
        return false
    }
    public getUniformBorderColor(): Color {
        return new Color("")
    }
    public getUniformBorderWidth(): number {
        return 0
    }
    public getUniformBorderRadius(): number {
        return 0
    }
}

export class Font {
    public static default: Font;

    public fontFamily: string;
    public fontStyle: FontStyle;
    public fontWeight: FontWeight;
    public fontSize: number;

    public isBold: boolean;
    public isItalic: boolean;

    constructor(family: string, size: number, style: FontStyle, weight: FontWeight) {}

    public getAndroidTypeface(): any /* android.graphics.Typeface */ {}
    public getUIFont(defaultFont: any /* UIFont */): any /* UIFont */ {}

    public withFontFamily(family: string): Font {
        return this
    }
    public withFontStyle(style: string): Font {
        return this
    }
    public withFontWeight(weight: string): Font {
        return this
    }
    public withFontSize(size: number): Font {
        return this
    }

    public static equals(value1: Font, value2: Font): boolean {
        return false
    }
}

export interface EventData {
    /**
     * The name of the event.
     */
    eventName: string;
    /**
     * The Observable instance that has raised the event.
     */
    object: Observable;
}

export class Style extends Observable {
    public fontInternal: Font;
    public backgroundInternal: Background;

    public rotate: number;
    public scaleX: number;
    public scaleY: number;
    public translateX: dip;
    public translateY: dip;

    public clipPath: string;
    public color: Color;
    public tintColor: Color;
    public placeholderColor: Color;

    public background: string;
    public backgroundColor: Color;
    public backgroundImage: string | LinearGradient;
    public backgroundRepeat: BackgroundRepeat;
    public backgroundSize: string;
    public backgroundPosition: string;

    public borderColor: string | Color;
    public borderTopColor: Color;
    public borderRightColor: Color;
    public borderBottomColor: Color;
    public borderLeftColor: Color;
    public borderWidth: string | Length;
    public borderTopWidth: Length;
    public borderRightWidth: Length;
    public borderBottomWidth: Length;
    public borderLeftWidth: Length;
    public borderRadius: string | Length;
    public borderTopLeftRadius: Length;
    public borderTopRightRadius: Length;
    public borderBottomRightRadius: Length;
    public borderBottomLeftRadius: Length;

    public fontSize: number;
    public fontFamily: string;
    public fontStyle: FontStyle;
    public fontWeight: FontWeight;
    public font: string;

    public androidElevation: number;
    public androidDynamicElevationOffset: number;
    public zIndex: number;
    public opacity: number;
    public visibility: Visibility;

    public letterSpacing: number;
    public lineHeight: number;
    public textAlignment: TextAlignment;
    public textDecoration: TextDecoration;
    public textTransform: TextTransform;
    public whiteSpace: WhiteSpace;

    public minWidth: Length;
    public minHeight: Length;
    public width: PercentLength;
    public height: PercentLength;
    public margin: string | PercentLength;
    public marginLeft: PercentLength;
    public marginTop: PercentLength;
    public marginRight: PercentLength;
    public marginBottom: PercentLength;
    public padding: string | Length;
    public paddingLeft: Length;
    public paddingTop: Length;
    public paddingRight: Length;
    public paddingBottom: Length;
    public horizontalAlignment: HorizontalAlignment;
    public verticalAlignment: VerticalAlignment;

    // TabView-specific props
    public tabTextFontSize: number;
    public tabTextColor: Color;
    public tabBackgroundColor: Color;
    public selectedTabTextColor: Color;
    public androidSelectedTabHighlightColor: Color;

    // ListView-specific props
    public separatorColor: Color;

    //SegmentedBar-specific props
    public selectedBackgroundColor: Color;

    // Page-specific props
    public statusBarStyle: "light" | "dark";
    public androidStatusBarBackground: Color;

    constructor(ownerView: ViewBase | WeakRef<ViewBase>) {
        super()
    }
    public viewRef: WeakRef<ViewBase>;

    /**
     * @deprecated use `viewRef` instead.
     *
     * The `ViewBase` object associated with the Style!
     */
    public view: ViewBase;

    //flexbox layout properties
    public flexDirection: FlexDirection;
    public flexWrap: FlexWrap;
    public justifyContent: JustifyContent;
    public alignItems: AlignItems;
    public alignContent: AlignContent;
    public order: Order;
    public flexGrow: FlexGrow;
    public flexShrink: FlexShrink;
    public flexWrapBefore: FlexWrapBefore;
    public alignSelf: AlignSelf;

    /**
     * The property bag is a simple class that is paired with the Style class.
     * Setting regular css properties on the PropertyBag should simply preserve their values.
     * Setting shorthand css properties on the PropertyBag should decompose the provided value, and set each of the shorthand composite properties.
     * The shorthand properties are defined as non-enumerable so it should be safe to for-in the keys that are set in the bag.
     */
    public readonly PropertyBag: PropertyBagClass;
}

export class CssAnimationProperty<T extends Style, U> {
    constructor(options: CssAnimationPropertyOptions<T, U>) {}

    public readonly getDefault: symbol;
    public readonly setNative: symbol;

    public readonly name: string;
    public readonly cssName: string;
    public readonly cssLocalName: string;

    readonly keyframe: string;

    public readonly defaultValue: U;

    public register(cls: { prototype: T }): void {}
    public isSet(instance: T): boolean {
        return false
    }

    /**
     * @private
     */
    public _initDefaultNativeValue(target: T): void {}
    /**
     * @private
     */
    public _valueConverter?: (value: string) => any;
    /**
     * @private
     */
    public static _getByCssName(name: string): CssAnimationProperty<any, any> {
        return new CssAnimationProperty<any, any>({
            name: ''
        })
    }
    /**
     * @private
     */
    public static _getPropertyNames(): string[] {
        return []
    }
}

/**
 * Denotes a length number that is in device independent pixel units.
 */
export type dip = number;

/**
 * Denotes a length number that is in physical device pixels.
 */
export type px = number;

/**
 * Denotes a normalized percent number.
 * 0% is represented as 0
 * 50% is represented as 0.5
 * 100% is represented as 1
 */
export type percent = number;

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
        rotate: 0,
        translate: null,
        scale: null,
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
export const borderTopColorProperty: CssProperty<Style, Color> = null;
export const borderRightColorProperty: CssProperty<Style, Color> = null;
export const borderBottomColorProperty: CssProperty<Style, Color> = null;
export const borderLeftColorProperty: CssProperty<Style, Color> = null;

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