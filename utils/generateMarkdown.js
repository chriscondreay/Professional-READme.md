// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitLicense = "MIT";
  const apacheLicense = "Apache License 2.0";
  const unlicense = "The Unlicense"
  switch (license) {
    case mitLicense:
      return `[!License](https://img.shields.io/badge/License-MIT-blue.svg)]`;
      break;
    case apacheLicense:
      return `[!License](https://img.shields.io/badge/License-Apache%202.0-green.svg)]`;
      break;
    case unlicense:
      return `[!License](https://img.shields.io/badge/License-Unlicense-red.svg)]`
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
