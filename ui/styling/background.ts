import {LinearGradient} from "./gradient";
import {BackgroundRepeat} from "./style-properties";
import {Color, View} from "../core/view";

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

export module ios {
    export function createBackgroundUIColor(view: View, callback: (uiColor: any /* UIColor */) => void, flip?: boolean): void {}
}

export module ad {
    export function onBackgroundOrBorderPropertyChanged(v: View) {}
}
