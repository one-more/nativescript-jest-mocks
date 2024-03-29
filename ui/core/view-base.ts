/**
 * Iterates through all child views (via visual tree) and executes a function.
 * @param view - Starting view (parent container).
 * @param callback - A function to execute on every child. If function returns false it breaks the iteration.
 */
import {Observable} from "../../data/observable";
import {
    AlignSelf,
    BindingOptions,
    DOMNode,
    FlexGrow,
    FlexShrink,
    FlexWrapBefore,
    Length,
    Order,
    Page,
    Style
} from "./view";
import {InheritedProperty, Property} from "./properties";

export function eachDescendant(view: ViewBase, callback: (child: ViewBase) => boolean) {}

/**
 * Gets an ancestor from a given type.
 * @param view - Starting view (child view).
 * @param criterion - The type of ancestor view we are looking for. Could be a string containing a class name or an actual type.
 * Returns an instance of a view (if found), otherwise undefined.
 */
export function getAncestor(view: ViewBase, criterion: string | Function): ViewBase {
    return new class extends ViewBase {
        _moduleName: string;
    }
}

export function isEventOrGesture(name: string, view: ViewBase): boolean {
    return false
}

/**
 * Gets a child view by id.
 * @param view - The parent (container) view of the view to look for.
 * @param id - The id of the view to look for.
 * Returns an instance of a view (if found), otherwise undefined.
 */
export function getViewById(view: ViewBase, id: string): ViewBase {
    return new class extends ViewBase {
        _moduleName: string;
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

export class Binding {
    constructor(target: ViewBase, options: BindingOptions) {}
    public bind(source: Object): void {}
    public unbind() {}
}

export const idProperty: Property<ViewBase, string> = null;
export const classNameProperty: Property<ViewBase, string> = null;
export const bindingContextProperty: InheritedProperty<ViewBase, any> = null;

/**
 * Converts string into boolean value.
 * Throws error if value is not 'true' or 'false'.
 */
export function booleanConverter(v: string): boolean {
    return false
}