import { zayne } from "@zayne-labs/eslint-config";

export default zayne({
	ignores: ["dist/**"],
	solid: true,
	tailwindcssBetter: true,
	typescript: true,
});
