const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })

// Configure Next for GitHub Pages project site under /hillshacks2026/
module.exports = withMDX({
	pageExtensions: ['js', 'mdx'],
	// basePath makes all internal routes served under this prefix
	basePath: '/hillshacks2026',
	// assetPrefix ensures static assets (images, css) are served from the prefix
	assetPrefix: '/hillshacks2026/',
	// export as static files with trailing slashes to work well on GitHub Pages
	trailingSlash: true,
})
