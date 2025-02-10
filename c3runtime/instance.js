"use strict";

{
    globalThis.C3.Plugins.ValerypopoffAudioFromUrl.Instance = class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();

            // Initialise object properties
            /*
            this._testProperty = 0;
        	
            if (properties)		// note properties may be null in some cases
            {
                this._testProperty = properties[0];
            }
            */

            this.highjack = function () {
                //console.log("highjack")

                function GetMediaFileUrl(a) {
                    //console.log("GetMediaFileUrl: " + a)

                    var path = a;
                    var was_underscore = false;
                    var was_link = false;

                    if (path[0] == "_") {
                        was_underscore = true;
                        path = path.substr(1, path.length);
                    }

                    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("www."))
                        was_link = true;


                    if (was_link && !was_underscore)
                        return a;

                    if (was_link && was_underscore)
                        return path;

                    return this._runtime.GetAssetManager()._HasLocalUrlBlob(a) ? this._runtime.GetAssetManager().GetLocalUrlAsBlobUrl(a) : this._runtime.GetAssetManager()._mediaSubfolder + a.toLowerCase()
                }

                this._runtime.GetAssetManager().GetMediaFileUrl = GetMediaFileUrl;
            }

            //var initalizer_timer = setInterval( ()=>
            //{
            //console.log("initalizer_timer")

            //if( !this._runtime.GetPluginManager().GetPluginByConstructorFunction(globalThis.C3.Plugins.Audio) )
            //	return;

            //if( !this._runtime.GetAssetManager() || !this._runtime.GetAssetManager().GetMediaFileUrl )
            //	return;

            //clearTimeout(initalizer_timer);

            this.highjack();

            //}, 10)
        }

        _release() {
            super._release();
        }

        _saveToJson() {
            return {
                // data to be saved for savegames
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}