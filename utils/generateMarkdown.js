// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const mitLicense = "MIT";
  const apacheLicense = "Apache License 2.0";
  const unlicense = "The Unlicense";
  switch (license) {
    case mitLicense:
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]`;
      break;
    case apacheLicense:
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)]`;
      break;
    case unlicense:
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-red.svg)]`;
    default:
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const mitLicense = "MIT";
  const apacheLicense = "Apache License 2.0";
  const unlicense = "The Unlicense";
  switch (license) {
    case mitLicense:
      return `(https://opensource.org/licenses/MIT)`;
      break;
    case apacheLicense:
      return `(https://opensource.org/licenses/Apache-2.0)`;
      break;
    case unlicense:
      return `(https://opensource.org/licenses/Unlicense)`;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
  // const mitLicense = "MIT";
  // const apacheLicense = "Apache License 2.0";
  // const unlicense = "The Unlicense";
  // switch (license) {
  //   case apacheLicense:
  //     return `Apache License Version 2.0, January 2004 http://www.apache.org/licenses/`;
  //     break;
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
 
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.credits}
 
  ## License
  ${data.license}
  ${renderLicenseLink(data.license)}
 
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Uploaded demo watch here,
  https://youtu.be/vOVuK-NbLZs
`;
};

module.exports = generateMarkdown;