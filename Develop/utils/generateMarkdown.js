// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![License: ${license}](https://img.shields.io/bodage/License-${String(license).replace('-', '_')}-success)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `[For more information about the License](https://opensource.org/licenses/${license})`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License`
  }
  return ''
}

function renderLicenseStuff(license) {
  if (license) {
    return `[License](#license)`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)

  [Usage](#usage)

  [Contributions](#contributions)

  [Testing](#testing)

  ${renderLicenseStuff(data.license)}

  [Contact](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributing}

  ## Testing
  ${data.test}

  ## GitHub Repository
  Link: ${data.github}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contact
  ${data.contact}
`;
}

module.exports = generateMarkdown;
