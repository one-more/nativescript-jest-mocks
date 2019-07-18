export const isAndroid: boolean = false;

export const isIOS: boolean = false;

export const platformNames = {
    android: 'android',
    ios: 'ios'
};

export const Device = {
    manufacturer: "",
    model: "",
    os: "",
    osVersion: "",
    sdkVersion: "",
    deviceType: "",
    uuid: "",
    language: "en",
    region: "",
};

export const ScreenMetrics = {
    widthPixels: 0,
    heightPixels: 0,
    widthDIPs: 0,
    heightDIPs: 0,
    scale: 0,
};

export const screen = {
    mainScreen: ScreenMetrics
};

export const device = Device;