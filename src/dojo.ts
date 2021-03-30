(() => {
	const { pathname, search } = window.location;
	const distPath = pathname.substring(0, pathname.lastIndexOf('/'));
	const localeUrlParamRegex = /locale=([\w-]+)/;
	const dojoLocale = search.match(localeUrlParamRegex) ? RegExp.$1 : undefined;
	const config = {
		async: true,
		locale: dojoLocale, // unset this if we move to modules 
		packages: [
            {
                name: "Components",
                location: `${distPath}/node_modules/@esri/configurable-app-components`
            }
		]
	};

	window['esriConfig'] = { locale: dojoLocale }
	window['dojoConfig'] = config;
})();