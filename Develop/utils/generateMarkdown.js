const licenseOptions = [{
  lic: "MIT",
  badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  url: "https://choosealicense.com/licenses/mit/"
},
{
  lic: "Apache",
  badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  url: "https://choosealicense.com/licenses/apache-2.0/",
},
{
  lic: "GPL v3",
  badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  url: "https://choosealicense.com/licenses/gpl-3.0/",
}];


function generateMarkdown(data) {
  let badge;
  let url;
  licenseOptions.forEach((i) => {

    if (data.license === i.lic) {
      badge = i.badge;
      url = i.url;
    };

  });

  const title = data.title;
  const titleDash = title.replace(/\s/g, "-");
  const lic = data.license;
  const licDash = lic.replace(/\s/g, "-");

  return `
  ${badge}
  # ${title}
  ${data.description}
**View deployed app at -** ${data.deployedURL}
![${title} screen shot](${data.screenShot})
## Table of Contents
- [Installation](#Installation-instructions)
- [Usage](#How-to-use-${titleDash})
- [Contribute](#How-to-contribute-to-${titleDash})
- [Testing](#For-testing)
- [Questions](#${titleDash}-was-developed-by:)
- [Credits](#Acknowledgments-and-Credits)
- [License](#${titleDash}-is-licensed-under-${licDash})
## Installation instructions
${data.installation}
## How to use ${title}
${data.usage}
## How to contribute to ${title}
${data.contribute}
## For testing
${data.testing}
## ${title} was developed by:
- ${data.name}
Please reach out with questions at:
  - ${data.email}
Find more of ${data.name}'s work at:
  - https://github.com/${data.github}
## Acknowledgments and Credits
${data.credits}
## ${title} is licensed under ${data.license}
[Click here for more information on the ${data.license} license.](${url})
`;
}

module.exports = generateMarkdown;