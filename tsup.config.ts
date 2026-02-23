import { defineConfig } from "tsup"

export default defineConfig({
  entry: [
		"src/components/Button/index.ts",
		"src/components/Title/index.ts"
	],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  external: ["react", "react-dom"]
})