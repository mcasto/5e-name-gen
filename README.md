<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
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
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

There are several fantasy name generators on NPM & Github, but none gave me exactly what I wanted in a format I could readily use in a project I'm developing.

I decided to build one of my own that's little more than a skin of the Markov-chain name generator code at the awesome [Donjon](https://donjon.bin.sh/code/name/) site.

I also pulled names data file from [Fantasy Content Generator](https://github.com/thomascgray/fantasy-content-generator). I like this generator a lot, but it has a pretty finite set of possible names it can generate. So, I used the names from this as a seed list for the Markov chains.

### Built With

* [Lodash](https://www.npmjs.com/package/lodash)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

`node i mcasto/5e-name-gen`

or

`yarn add mcasto/5e-name-gen`


## Notes

There are two functions exported by the module: nameGen and nameList.

`nameGen` returns a single name. `nameList` returns an array of names.

nameGen expects a payload object:
```
{
  race: ['', 'dragonborn', 'dwarf','elf','gnome','halfElf','halfOrc','halfling','human','tiefling],
  gender: ['','male','female'],
}

// Both settings default to ''. If race is '', the function will randomly select one. If gender is '', the function will randomly select on.

```

nameList expects a payload object:
```
{
  race: ['', 'dragonborn', 'dwarf','elf','gnome','halfElf','halfOrc','halfling','human','tiefling],
  gender: ['','male','female'],
  num: 10
}

// num defaults to 10 and, like the nameGen function, if race and gender are undefined or empty strings, they will be randomly selected.
```

## Usage
```
const {nameGen, nameList} = require('5e-name-gen');

console.log(nameGen({})); // generate a name with random race/gender
console.log(nameGen({ race: 'dwarf', gender: 'female' })); // generate a name for a female dwarf

console.log(nameList({})); // generate 10 names with random races/genders
console.log(nameList({race: 'elf', gender: 'male', num: 15})); // generate a list of 15 names for male elves
```

## Returns
```
nameGen returns an object of { race, gender, name }

nameList returns an array of { race, gender, name } objects
```
