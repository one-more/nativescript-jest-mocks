import {Observable} from "./data/observable";

export class ImageAsset extends Observable {
    constructor(asset: any) {
        super()
    }
    getImageAsync(callback: (image: any, error: any) => void) {}; //UIImage for iOS and android.graphics.Bitmap for Android
    ios: any; //PHAsset
    nativeImage: any; //UIImage for iOS and android.graphics.Bitmap for Android
    android: any;
    options: ImageAssetOptions;
}

export interface ImageAssetOptions {
    width?: number;
    height?: number;
    keepAspectRatio?: boolean;
    autoScaleFactor?: boolean;
}