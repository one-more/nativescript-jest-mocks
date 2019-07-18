/**
 *  A layout that lets you specify exact locations (left/top coordinates) of its children.
 */
import {LayoutBase} from "./layout-base";
import {Length, View} from "../core/view";
import {Property} from "../core/properties";

export class AbsoluteLayout extends LayoutBase {
    /**
     * Gets the value of the Left property from a given View.
     */
    static getLeft(view: View): Length {
        return 0
    }

    /**
     * Sets the value of the Left property from a given View.
     */
    static setLeft(view: View, value: Length): void {}

    /**
     * Gets the value of the Top property from a given View.
     */
    static getTop(view: View): Length {
        return 0
    }

    /**
     * Sets the value of the Top property from a given View.
     */
    static setTop(view: View, value: Length): void {}
}

/**
 * Represents the observable property backing the left property.
 */
export const leftProperty: Property<View, Length> = null;

/**
 * Represents the observable property backing the top property.
 */
export const topProperty: Property<View, Length> = null;