export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'es',
		dir: 'public'
	},
	experimentalCodeSplitting: true,
	experimentalDynamicImport: true
};
