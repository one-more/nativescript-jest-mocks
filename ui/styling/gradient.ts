import {Color, LengthPercentUnit} from "../core/view";

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