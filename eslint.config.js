import { defineConfig } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
	{
		files: ["**/*.js"],
		plugins: {
			js,
		},
		extends: ["js/recommended"],
		rules: {
			"consistent-return": 2,
			"indent"           : [1, 4],
			"no-else-return"   : 1,
			"semi"             : [1, "always"],
			"space-unary-ops"  : 2
		}
	}
]);