import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["dist/**"],
	solid: true,
	tailwindcss: true,
	typescript: {
		tsconfigPath: "tsconfig.eslint.json",
	},
});
