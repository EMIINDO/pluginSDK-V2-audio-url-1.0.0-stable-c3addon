"use strict";

{
	globalThis.C3.Plugins.ValerypopoffAudioFromUrl.Acts =
	{
		SetURL(url)
		{
			function _maybemakeurl( path, url )
			{
				// Skip filenames starting with the underscore
				if( path[0] == "_"	)
					return path;				

				var path_arr = path.split("/")
				var filename = path_arr[ path_arr.length-1 ];

				if( url[ url.length-1 ] != "/" )
					url += "/";

				//console.log( "url: " + url )
				//console.log( "filename: " + filename )

				return url + filename;
			}

			//alert("Test property = " + this._testProperty);

			var audioFiles = this._runtime.GetAssetManager()._audioFiles;

			for( var key of audioFiles.keys() )
			{
				var audio = audioFiles.get( key );

				for( var i=0; i<audio.formats.length; i++ )
					audio.formats[i].fullName = _maybemakeurl( audio.formats[i].fullName, url )

			}


		}
	};
}


