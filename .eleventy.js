// 11ty config documentation https://www.11ty.dev/docs/config/

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	return {
		dir: {
			output: "docs",
		},
	};
};