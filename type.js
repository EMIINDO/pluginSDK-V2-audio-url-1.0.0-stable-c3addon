"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.ValerypopoffAudioFromUrl;

    PLUGIN_CLASS.Type = class ValerypopoffAudioFromUrlPluginType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}