(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{241:function(e,t,a){"use strict";a.r(t);var o=a(0),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("File storage and bandwidth costs! We do not have the capacity or funding to host your game data and updates for you. You will need to purchase a web hosting plan of your choice in order to distribute your game updates to your players.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("Use FTP or your file transfer program of choice to upload the contents in your update folder to your web host.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you are using FileZilla you need to make sure you are using binary uploads. Go to "),a("code",[e._v("Edit > Settings > File transfer settings > ASCII/Binary")]),e._v(". "),a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/ff040970742cd777a2c5a0b546fd7231.png",target:"_blank",rel:"noopener noreferrer"}},[e._v("Set it to always binary"),a("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("After you have uploaded your update to your web host open up your web browser of choice and browse to the update.json file to make sure it's online, if you are able to view your update.json file in your web browser then you are ready to proceed.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("The following advanced configuration options are completely optional. If you don't know exactly why you'd want to use these then ignore them! Both of these options requires that your webhost can serve php pages and execute php scripts.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("The downside to this script is that checking for updates will take a bit longer, so this should be used for convenience during development. When you launch your game you should use the static update.json files because they will be quicker and less demanding on your server.")]),e._v(" "),e._m(14),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/1c6fa0679887918ed6d54b6609afd1ca.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Here"),a("OutboundLink")],1)]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.ascensiongamedev.com/resources/filehost/972d4c5a35cc8a7c4930029b41b30360.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download Here"),a("OutboundLink")],1)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"auto-updater"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-updater"}},[this._v("#")]),this._v(" Auto Updater")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Static site hosts like Amazon S3 and Github pages will work well, but a webhost with the ability to run php is preferred for "),t("a",{attrs:{href:"#advancedconfiguration"}},[this._v("faster updates and other benefits")]),this._v(" that you might want to learn about later on.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"creating"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#creating"}},[this._v("#")]),this._v(" Creating")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Creating an update is as simple as opening your editor and clicking the "),t("code",[this._v("Tools > Package Update")]),this._v(" button. You will be prompted to select an empty folder, and after some processing the update files will appear within.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://www.ascensiongamedev.com/resources/filehost/04a7eded08d3e90c55ca21e8e5fabedd.png",alt:"Package"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"uploading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uploading"}},[this._v("#")]),this._v(" Uploading")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuring"}},[this._v("#")]),this._v(" Configuring")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Copy the url of that file into "),t("code",[this._v("Client and Editor/resources/config.json")]),this._v(" for the "),t("code",[this._v("UpdateUrl")]),this._v(" field.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You are able to change the graphics and fonts on the update screen, those can be found in the "),t("code",[this._v("Client and Editor/Resources/Updater")]),this._v(" directory.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"future-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#future-updates"}},[this._v("#")]),this._v(" Future Updates")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To package updates going forward use the "),t("code",[this._v("Tools > Package Update")]),this._v(" button within the editor and upload the new update to your webhost overwriting any existing files. Any new graphics or Intersect versions will be included and distributed to your players the next time they launch their game..")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"advanced-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#advanced-configuration"}},[this._v("#")]),this._v(" Advanced Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"dynamically-generate-metadata-optional-beta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamically-generate-metadata-optional-beta"}},[this._v("#")]),this._v(" Dynamically Generate Metadata  (Optional, Beta)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Instead of using the "),t("code",[this._v("Editor -> Tools -> Package Update")]),this._v(" function to generate your update.json metadata for you, you can instead use this "),t("code",[this._v("update.php")]),this._v(" script. The script will scan your webhost for files and automatically generate the update configuration on the fly. This is useful if you want to allow others on your team to drag -> drop assets or updates onto your webserver without needing to use the editor to package a massive update for each small change.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After placing your script into your update folder on your webhost modify your "),t("code",[this._v("UpdateUrl")]),this._v(" in the "),t("code",[this._v("Client and Editor/Resources/Config.json")]),this._v(" file to point to "),t("code",[this._v("update.php")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"streaming-downloads-optional-beta"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#streaming-downloads-optional-beta"}},[this._v("#")]),this._v(" Streaming Downloads  (Optional, Beta)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Instead of having the client open up hundreds or thousands of HTTP file downloads from your web server you can have your client request a list of files all at once and then have them send back in a single connection through a continuous stream. If you are using the "),t("code",[this._v("update.php")]),this._v(" script above simply place this "),t("code",[this._v("stream.php")]),this._v(" script into your update folder as well and you'll be good to go.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you want to use this script with static update.json files you will need to modify your "),t("code",[this._v("update.json")]),this._v(" file to include the following line below the "),t("code",[this._v("TrustCache")]),this._v(" line.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("'StreamingUrl': 'https://<path to stream.php>',")])])}],!1,null,null,null);t.default=s.exports}}]);