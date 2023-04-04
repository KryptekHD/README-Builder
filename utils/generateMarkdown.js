// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  inquire
  .prompt({
    
      type: 'checkbox',
      message: 'chose the licenses you used ',
      name: 'licenses',
      choices: [
          'Apache License 2.0',
          'GNU General Public License v3.0',
          'MIT License',
          'BSD 2-Clause "Simplified" License',
          'BSD 3-Clause "New" or "Revised" License',
          'Boost Software License 1.0',
          'Creative Commons Zero v1.0 Universal',
          'Eclipse Public License 2.0',
          'GNU Affero General Public License v3.0',
          'GNU General Public License v2.0',
          'GNU Lesser General Public License v2.1',
          'Mozilla Public License 2.0',
          'The Unlicense']
  
  })
  .the((response)=>{
    return renderLicenseLink(response.license)

  })
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache 2.0 License'){
  return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GNU AGPL v3'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
