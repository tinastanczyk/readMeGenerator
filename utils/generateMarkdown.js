// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = [
    {
      name: "MIT",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    },
    {
      name: "GNU",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    },
    {
      name: "Apache",
      badge:
        "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    },
  ];
  //  checks if license input matches badges array and returns the badge
  for (const index of badges) {
    if (license === index.name) {
      return index.badge;
    }
  }
}

// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = [
    {
      name: "MIT",
      link: "https://opensource.org/licenses/MIT",
    },
    {
      name: "GNU",
      link: "https://www.gnu.org/licenses/gpl-3.0",
    },
    {
      name: "Apache",
      link: "https://opensource.org/licenses/Apache-2.0",
    },
  ];
  //  checks if license input matches badges array and returns the badge
  for (const index of licenseLinks) {
    if (license === index.name) {
      return index.link;
    }
  }
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, user) {
  const licenseText = [
    {
      name: "MIT",
      text: `Copyright 2022 ${user}

  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  
  `,
    },
    {
      name: "GNU",
      text: `Copyright (C) 2022  ${user}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`,
    },
    {
      name: "Apache",
      text: `Copyright 2022 ${user}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`,
    },
  ];
  //  checks if license input matches badges array and returns the badge
  for (const index of licenseText) {
    if (license === index.name) {
      return index.text;
    }
  }
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle} ${data.license} ${renderLicenseBadge(
    data.license
  )}
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage

  ![image](${data.usage})
  
  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license, data.user)}

  ${renderLicenseLink(data.license)}

  ## Badges
  ${data.badges}

  ## Features
  ${data.features}

  ## How to Contribute
  ${data.contributions}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me here if you have further questions: \n
  Email - ${data.email} \n
  Github - https://github.com/${data.github} \n

`;
}
// setting module.exports to the function generateMarkDown so it can be accessed by index.js
module.exports = generateMarkdown;
