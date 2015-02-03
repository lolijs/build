'use strict';
! function() {
	//请确保modules第一个被赋值
	var modules = {
			"common/areacode": "0.0.1",
			"common/pointerevents": "0.0.3",
			"common/router": "0.0.12",
			"common/switchbutton": "0.0.4",
			"common/touchguesture": "0.0.3",
			"common/touchslider": "0.0.8",
			"common/zipcode": "0.0.1",
			"site/home": "0.0.45",
			"site/loan": "0.0.21",
			"site/loan-detail": "0.0.32",
			"site/user": "0.0.27",
			"site/user-bank": "0.0.9",
			"site/user-drawcash": "0.0.8",
			"site/user-investment": "0.0.11",
			"site/user-message": "0.0.9",
			"site/user-recharge": "0.0.12",
			"site/user-record": "0.0.9",
			"site/user-redpack": "0.0.12",
			"site/user-score": "0.0.12",
			"site/user-transfer": "0.0.8",
			"site-common/autobid": "0.0.12",
			"site-common/bank": "0.0.15",
			"site-common/caiwu": "0.0.5",
			"site-common/constants": "0.0.3",
			"site-common/index": "0.0.73",
			"site-common/login": "0.0.31",
			"site-common/pages": "0.0.12",
			"site-common/popups": "0.0.1",
			"site-common/profile": "0.0.9",
			"site-common/profile-avatar": "0.0.12",
			"site-common/profile-basic": "0.0.9",
			"site-common/profile-pauth": "0.0.13",
			"site-common/profile-security": "0.0.11",
			"site-common/profile-social": "0.0.6",
			"site-common/project": "0.0.21",
			"site-common/recharge": "0.0.17",
			"site-common/svgicos": "0.0.13",
			"site-common/transfer": "0.0.12",
			"site-common/util": "0.0.50"
		},
		//请确保srcRoot第二个被赋值
		srcRoot = 'dev/',
		//请确保productRoot第三个被赋值
		productRoot = 'dist/',
		//请确保siteVersion第四个被赋值
		siteVersion = "1.0.121",
		//请确保debug第五个被赋值
		debug = false,
		prefix = seajs.data.dir.replace(/^[^:]+:\/\/[^\/]*|[^\/]+\/$/g, ''),
		reg = RegExp('^(?:' + seajs.data.dir + ')?(.+)$');
	seajs.config({
		siteVersion: siteVersion,
		debug: debug,
		toUrl: function(path) {
			var r = path.match(/^([^\/]+\/[^\/]+)(\/.+)?$/),
				s;
			if (r) {
				if (debug || !(r[1] in modules)) {
					s = prefix + srcRoot + path;
				} else {
					s = prefix + productRoot + r[1] + '/' + modules[r[1]];
					r[2] && (s += r[2]);
				}
				return s;
			}
		},
		map: [

			function(uri) {
				var r = uri.match(reg);
				if (r) {
					uri = seajs.data.toUrl(r[1]);
				}
				return uri;
			}
		]
	});
}();