
<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DuuEyn/Sheet-duplicato">
    <img src="https://lh3.googleusercontent.com/yCF7mTvXRF_EhDf7Kun5_-LMYTbD2IL-stx_D97EzpACfhpGjY_Frx8NZw63rSn2dME0v8-Im49Mh16htvPAGmEOMhiTxDZzo6rB7MY" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Monthly-tracker-duplicator</h3>

  <p align="center">
    Creates a copy of a monthly tracker from an existing sheet template and inserts dates based on the month the user entered.
    <br />
    <a href="https://github.com/DuuEyn/Monthly-tracker-duplicator
"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/DuuEyn/Monthly-tracker-duplicator
">View Repo</a>
    ·
    <a href="https://github.com/DuuEyn/Monthly-tracker-duplicator
/issues">Report Bug</a>
    ·
    <a href="https://github.com/DuuEyn/Monthly-tracker-duplicator
/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This script is intended to automate the copying of a monthly tracker or log from a template. 
Dates are automatically added and extra rows are removed from the copy.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![GAS][gas.js]][gas-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started



### Prerequisites

* The script must be bound to a Google Sheets file. 
* There should be an existing template in the sheets file that the script can copy.
* The script assumes that the name of the spreadsheet file starts with [YYYY ...
* If needed, a specific year can be specified on this variable:
```sh
var newDate = new Date(`${newMonth} 1, ${newYear.slice(1,5)}`)
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/DuuEyn/Monthly-tracker-duplicator
   ```
2. Open the target Google Spreadsheet, click `Extensions` on the menu then click `Apps Script`
   ![Menu Screen Shot][menu-screenshot]
3. Copy the script in the `createNewTracker.gs` file and paste it in Apps Script
4. Click Save and refresh the target sheet.
   
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

In order to execute the script, the user just needs to click `Custom` on the menu bar and click `New Monthly Tracker`. The user would then have to enter a valid month.
The script will create a copy of the template and populate it with dates based on the month the user entered.

![Project Demo][project-demo]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ian Dewaine Diche - iddiche@gmail.com

Project Link: [https://github.com/DuuEyn/Monthly-tracker-duplicator](https://github.com/DuuEyn/Monthly-tracker-duplicator)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DuuEyn/Monthly-tracker-duplicator.svg?style=for-the-badge
[contributors-url]: https://github.com/DuuEyn/Monthly-tracker-duplicator/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DuuEyn/Monthly-tracker-duplicator.svg?style=for-the-badge
[forks-url]: https://github.com/DuuEyn/Monthly-tracker-duplicator/network/members
[stars-shield]: https://img.shields.io/github/stars/DuuEyn/Monthly-tracker-duplicator.svg?style=for-the-badge
[stars-url]: https://github.com/DuuEyn/Monthly-tracker-duplicator/stargazers
[issues-shield]: https://img.shields.io/github/issues/DuuEyn/Monthly-tracker-duplicator.svg?style=for-the-badge
[issues-url]: https://github.com/DuuEyn/Monthly-tracker-duplicator/issues
[license-shield]: https://img.shields.io/github/license/DuuEyn/Monthly-tracker-duplicator.svg?style=for-the-badge
[license-url]: https://github.com/DuuEyn/Monthly-tracker-duplicator/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ian-dewaine-diche-69406a2bb
[menu-screenshot]: resources/BoundScript.png
[project-demo]: resources/ScriptDemo.gif
[gas.js]: https://img.shields.io/badge/Google%20Apps%20Script-4A4A55?style=for-the-badge&logo=googleappsscript&logoColor=white
[gas-url]: https://www.google.com/script/start/
