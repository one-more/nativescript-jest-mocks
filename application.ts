/**
 * String value used when hooking to launch event.
 */
import {EventData, NavigationEntry, NavigationTransition, Observable, View} from "./ui/core/view";

export const launchEvent: string = '';

/**
 * String value used when hooking to displayed event.
 */
export const displayedEvent: string = '';

/**
 * String value used when hooking to uncaughtError event.
 */
export const uncaughtErrorEvent: string = '';

/**
 * String value used when hooking to discardedError event.
 */
export const discardedErrorEvent: string = '';

/**
 * String value used when hooking to suspend event.
 */
export const suspendEvent: string = '';

/**
 * String value used when hooking to resume event.
 */
export const resumeEvent: string = '';

/**
 * String value used when hooking to exit event.
 */
export const exitEvent: string = '';

/**
 * String value used when hooking to lowMemory event.
 */
export const lowMemoryEvent: string = '';

/**
 * String value used when hooking to orientationChanged event.
 */
export const orientationChangedEvent: string = '';

/**
 * Event data containing information for the application events.
 */
export interface ApplicationEventData extends EventData {
    /**
     * Gets the native iOS event arguments. Valid only when running on iOS.
     */
    ios?: any;

    /**
     * Gets the native Android event arguments. Valid only when running on Android.
     */
    android?: any;

    /**
     * The name of the event.
     */
    eventName: string;

    /**
     * The instance that has raised the event.
     */
    object: any;
}

/**
 * Event data containing information for launch event.
 */
export interface LaunchEventData extends ApplicationEventData {
    /**
     * The root view for this Window on iOS or Activity for Android.
     * If not set a new Frame will be created as a root view in order to maintain backwards compatibility.
     */
    root?: View;

    savedInstanceState?: any /* android.os.Bundle */;
}

/**
 * Event data containing information for orientation changed event.
 */
export interface OrientationChangedEventData extends ApplicationEventData {
    /**
     * New orientation value.
     */
    newValue: "portrait" | "landscape" | "unknown";
}

/**
 * Event data containing information about unhandled application errors.
 */
export interface UnhandledErrorEventData extends ApplicationEventData {
    ios?: NativeScriptError;
    android?: NativeScriptError;
    error: NativeScriptError;
}

/**
 * Event data containing information about discarded application errors.
 */
export interface DiscardedErrorEventData extends ApplicationEventData {
    error: NativeScriptError;
}

/**
 * Event data containing information about application css change.
 */
export interface CssChangedEventData extends EventData {
    cssFile?: string;
    cssText?: string;
}

/**
 * Get main entry specified when calling start function.
 */
export function getMainEntry(): NavigationEntry {
    return new class implements NavigationEntry {
        animated: boolean;
        backstackVisible: boolean;
        bindingContext: any;
        clearHistory: boolean;
        context: any;
        create: () => View;
        moduleName: string;
        transition: NavigationTransition;
        transitionAndroid: NavigationTransition;
        transitioniOS: NavigationTransition;
    }
}

/**
 * Get current application root view.
 */
export function getRootView(): View {
    return new class extends View {
        _moduleName: string;
    }
}

/**
 * Get application level static resources.
 */
export function getResources(): any {}

/**
 * Set application level static resources.
 */
export function setResources(res: any): void;

/**
 * Sets application level static resources.
 */
export function setResources(resources: any) {}

/**
 * Sets css file name for the application.
 */
export function setCssFileName(cssFile: string): void {}

/**
 * Gets css file name for the application.
 */
export function getCssFileName(): string {
    return ''
}

/**
 * Loads immediately the app.css.
 * By default the app.css file is loaded shortly after "loaded".
 * For the Android snapshot the CSS can be parsed during the snapshot generation,
 * as the CSS does not depend on runtime APIs, and loadAppCss will be called explicitly.
 */
export function loadAppCss() {}

export function addCss(cssText: string): void {}

/**
 * Removes listener for the specified event name.
 */
export function off(eventNames: string, callback?: any, thisArg?: any) {}

/**
 * @deprecated use application.run() instead.
 *
 * Call this method to start the application. Important: All code after this method call will not be executed!
 */
export function start(entry?: NavigationEntry | string) {}

/**
 * Call this method to run the application. Important: All code after this method call will not be executed!
 * Compared to start this method won't create Frame as root view.
 */
export function run(entry?: NavigationEntry | string) {}

/**
 * Call this method to change the root view of your application. Important: Your application must already be running.
 * This method won't create Frame as root view.
 */
export function _resetRootView(entry?: NavigationEntry | string) {}

/**
 * Notifies all the registered listeners for the event provided in the data.eventName.
 * @param data The data associated with the event.
 */
export function notify(data: any): void {}

/**
 * Checks whether a listener is registered for the specified event name.
 * @param eventName The name of the event to check for.
 */
export function hasListeners(eventName: string): boolean {
    return false
}

/**
 * This event is raised on application launchEvent.
 */
export function on(event: "launch", callback: (args: LaunchEventData) => void, thisArg?: any) {}

/**
 * This is the Android-specific application object instance.
 * Encapsulates methods and properties specific to the Android platform.
 * Will be undefined when TargetOS is iOS.
 */
export let android: AndroidApplication;

/**
 * This is the iOS-specific application object instance.
 * Encapsulates methods and properties specific to the iOS platform.
 * Will be undefined when TargetOS is Android.
 */
export let ios: iOSApplication;

/**
 * Data for the Android activity events.
 */
export interface AndroidActivityEventData {
    /**
     * The activity.
     */
    activity: any /* android.support.v7.app.AppCompatActivity */;

    /**
     * The name of the event.
     */
    eventName: string;

    /**
     * The instance that has raised the event.
     */
    object: any;
}

/**
 * Data for the Android activity events with bundle.
 */
export interface AndroidActivityBundleEventData extends AndroidActivityEventData {
    /**
     * The bundle.
     */
    bundle: any /* android.os.Bundle */;
}

/**
 * Data for the Android activity onRequestPermissions callback
 */
export interface AndroidActivityRequestPermissionsEventData extends AndroidActivityEventData {
    /**
     * The request code.
     */
    requestCode: number;

    /**
     * The Permissions.
     */
    permissions: Array<string>;

    /**
     * The Granted.
     */
    grantResults: Array<number>;
}

/**
 * Data for the Android activity result event.
 */
export interface AndroidActivityResultEventData extends AndroidActivityEventData {
    /**
     * The request code.
     */
    requestCode: number;

    /**
     * The result code.
     */
    resultCode: number;

    /**
     * The intent.
     */
    intent: any /* android.content.Intent */;
}

/**
 * Data for the Android activity newIntent event.
 */
export interface AndroidActivityNewIntentEventData extends AndroidActivityEventData {
    /**
     * The intent.
     */
    intent: any /* android.content.Intent */;
}

/**
 * Data for the Android activity back pressed event.
 */
export interface AndroidActivityBackPressedEventData extends AndroidActivityEventData {
    /**
     * In the event handler, set this value to true if you want to cancel the back navigation and do something else instead.
     */
    cancel: boolean;
}

/**
 * The abstraction of an Android-specific application object.
 */
export class AndroidApplication extends Observable {
    /**
     * The [android Application](http://developer.android.com/reference/android/app/Application.html) object instance provided to the init of the module.
     */
    nativeApp: any /* android.app.Application */;

    /**
     * The application's [android Context](http://developer.android.com/reference/android/content/Context.html) object instance.
     */
    context: any /* android.content.Context */;

    /**
     * The currently active (loaded) [android Activity](http://developer.android.com/reference/android/app/Activity.html). This property is automatically updated upon Activity events.
     */
    foregroundActivity: any /* android.support.v7.app.AppCompatActivity */;

    /**
     * @deprecated use startActivity, foregroundActivity or context instead
     */
    currentContext: any /* android.content.Context */;

    /**
     * The main (start) Activity for the application.
     */
    startActivity: any /* android.support.v7.app.AppCompatActivity */;

    /**
     * The name of the application package.
     */
    packageName: string = '';

    /**
     * True if the main application activity is not running (suspended), false otherwise.
     */
    paused: boolean;

    /**
     * Initialized the android-specific application object with the native android.app.Application instance.
     * This is useful when creating custom application types.
     * @param nativeApp - the android.app.Application instance that started the app.
     */
    init: (nativeApp) => void;

    /**
     * A basic method signature to hook an event listener (shortcut alias to the addEventListener method).
     * @param eventNames - String corresponding to events (e.g. "propertyChange"). Optionally could be used more events separated by `,` (e.g. "propertyChange", "change").
     * @param callback - Callback function which will be executed when event is raised.
     * @param thisArg - An optional parameter which will be used as `this` context for callback execution.
     */
    on(eventNames: string, callback: (data: AndroidActivityEventData) => void, thisArg?: any) {}

    /**
     * String value used when hooking to activityCreated event.
     */
    public static activityCreatedEvent: string = '';

    /**
     * String value used when hooking to activityDestroyed event.
     */
    public static activityDestroyedEvent: string = '';

    /**
     * String value used when hooking to activityStarted event.
     */
    public static activityStartedEvent: string = '';

    /**
     * String value used when hooking to activityPaused event.
     */
    public static activityPausedEvent: string = '';

    /**
     * String value used when hooking to activityResumed event.
     */
    public static activityResumedEvent: string = '';

    /**
     * String value used when hooking to activityStopped event.
     */
    public static activityStoppedEvent: string = '';

    /**
     * String value used when hooking to saveActivityState event.
     */
    public static saveActivityStateEvent: string = '';

    /**
     * String value used when hooking to activityResult event.
     */
    public static activityResultEvent: string = '';

    /**
     * String value used when hooking to activityBackPressed event.
     */
    public static activityBackPressedEvent: string = '';

    /**
     * String value used when hooking to activityNewIntent event.
     */
    public static activityNewIntentEvent: string = '';

    /**
     * String value used when hooking to requestPermissions event.
     */
    public static activityRequestPermissionsEvent: string = '';

    /**
     * Unregister a previously registered BroadcastReceiver.
     * For more information, please visit 'http://developer.android.com/reference/android/content/Context.html#unregisterReceiver(android.content.BroadcastReceiver)'
     * @param intentFilter A string containing the intent filter with which the receiver was originally registered.
     */
    unregisterBroadcastReceiver(intentFilter: string): void {}
}

/* tslint:disable */
/**
 * The abstraction of an iOS-specific application object.
 */
export interface iOSApplication {
    /* tslint:enable */
    /**
     * The root view controller for the application.
     */
    rootController: any /* UIViewController */;

    /* tslint:enable */
    /**
     * The key window.
     */
    window: any /* UIWindow */;

    /**
     * The [UIApplication](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplication_Class/index.html).
     */
    nativeApp: any /* UIApplication */;

    /**
     * The [UIApplicationDelegate](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIApplicationDelegate_Protocol/index.html) class.
     */
    delegate: any /* typeof UIApplicationDelegate */;

    /**
     * Adds an observer to the default notification center for the specified notification.
     * For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'
     * @param notificationName A string containing the name of the notification.
     * @param onReceiveCallback A callback function that will be called each time the observer receives a notification.
     */
    addNotificationObserver(notificationName: string, onReceiveCallback: (notification: any /* NSNotification */) => void): any;

    /**
     * Removes the observer for the specified notification from the default notification center.
     * For more information, please visit 'https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSNotificationCenter_Class/#//apple_ref/occ/instm/NSNotificationCenter/addObserver:selector:name:object:'
     * @param observer The observer that was returned from the addNotificationObserver method.
     * @param notificationName A string containing the name of the notification.
     * @param onReceiveCallback A callback function that will be called each time the observer receives a notification.
     */
    removeNotificationObserver(observer: any, notificationName: string): void;
}

/* tslint:disable */
export interface RootViewControllerImpl {
    contentController: any;
}

export function getNativeApplication(): any {}

/**
 * Indicates if the application is allready launched. See also the `application.on("launch", handler)` event.
 */
export function hasLaunched(): boolean {
    return false
}

export interface LoadAppCSSEventData extends EventData {
    cssFile: string;
}