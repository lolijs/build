'use strict';
! function() {
	//请确保modules第一个被赋值
	var modules = {"common/areacode":"0.0.2","common/pointerevents":"0.0.4","common/router":"0.0.13","common/switchbutton":"0.0.5","common/touchguesture":"0.0.4","common/touchslider":"0.0.9","common/zipcode":"0.0.2","site/home":"0.0.47","site/loan":"0.0.22","site/loan-detail":"0.0.33","site/user":"0.0.28","site/user-bank":"0.0.10","site/user-drawcash":"0.0.9","site/user-investment":"0.0.13","site/user-message":"0.0.10","site/user-recharge":"0.0.13","site/user-record":"0.0.10","site/user-redpack":"0.0.13","site/user-score":"0.0.13","site/user-transfer":"0.0.9","site-common/autobid":"0.0.13","site-common/bank":"0.0.16","site-common/caiwu":"0.0.6","site-common/constants":"0.0.4","site-common/index":"0.0.74","site-common/login":"0.0.32","site-common/pages":"0.0.13","site-common/popups":"0.0.2","site-common/profile":"0.0.10","site-common/profile-avatar":"0.0.13","site-common/profile-basic":"0.0.10","site-common/profile-pauth":"0.0.14","site-common/profile-security":"0.0.12","site-common/profile-social":"0.0.7","site-common/project":"0.0.23","site-common/recharge":"0.0.19","site-common/svgicos":"0.0.14","site-common/transfer":"0.0.13","site-common/util":"0.0.52"},
		//请确保srcRoot第二个被赋值
		srcRoot = 'dev/',
		//请确保productRoot第三个被赋值
		productRoot = 'dist/',
		//请确保siteVersion第四个被赋值
		siteVersion = "1.0.123",
		//请确保debug第五个被赋值
		debug = false,
		cfg = {
			baseUrl: '/mweb/' + srcRoot
		};
	if (!debug) {
		for (var n in modules) {
			modules[n] = '/mweb/' + productRoot + n + '/' + modules[n];
		}
		cfg.paths = modules;
	}
	require.config(cfg);
	//用于外部访问的基本信息
	require.data = {
		siteVersion: siteVersion,
		debug: debug
	};
	//若需要从外部获得模块路径请使用require.toUrl('family/name')
}();