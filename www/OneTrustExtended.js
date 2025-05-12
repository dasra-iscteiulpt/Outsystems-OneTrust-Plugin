var exec = require("cordova/exec");
const pluginName = "OneTrustExtended";

var exports = {
	//UI Methods
	showBannerUI: () => {
		exec(null, null, pluginName, "showBannerUI");
	},
	showPreferenceCenterUI: () => {
		exec(null, null, pluginName, "showPreferenceCenterUI");
	},
	 //Boolean banner show methods
    	shouldShowBanner: (success, error) => {
      		exec(success, error, pluginName, 'shouldShowBanner')
    	},
};

module.exports = exports;
