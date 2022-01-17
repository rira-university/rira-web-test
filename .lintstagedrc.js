const path = require('path')

// https://nextjs.org/docs/basic-features/eslint#lint-staged
const buildEslintCommand = (filenames) =>
  `next lint --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildPrettierCommand = (filenames) =>
  filenames.map((filename) => `prettier --write '${filename}'`)

const buildStylelintCommand = (filenames) =>
  filenames.map((filename) => `stylelint --fix '${filename}'`)

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{js,jsx,ts,tsx,json,css,scss,md}': [buildPrettierCommand],
  '*.{css,jsx,tsx}': [buildStylelintCommand],
}
