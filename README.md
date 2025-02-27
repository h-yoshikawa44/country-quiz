<!-- Please update value in the {}  -->

<h1 align="center">Country quiz</h1>

<div align="center">
   Solution for a challenge from Devchallenges.io.
</div>

<div align="center">
  <h3>
    <a href="http://ch-country-quiz.vercel.app/">
      Demo
    </a>
  </h3>
</div>

*The site is now closed, but this assignment was originally posted at `https://legacy.devchallenges.io/solutions/DgZ6ich7Qg4s9mZo7rnZ`.  
（My assignment submission page at the time: `https://legacy.devchallenges.io/challenges/Bu3G2irnaXmfwQ8sZkw8`.）

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How To Use](#how-to-use)
- [learned/improved](#learnedimproved)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![overview - Top](/screenshots/top.png)
![overview - Question](/screenshots/question.png)
![overview - Solution](/screenshots/solution.png)
![overview - Results](/screenshots/results.png)

First, choose a region.
You will be asked 10 quizzes about the countries belonging to the region you selected.

There are two types of quizzes as follows
- Questions about capital cities
- Questions about the name of the country from its flag

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->
Base
- [Node.js](https://nodejs.org/)：22.13.1
- [TypeScript](https://www.typescriptlang.org/)：5.7.3
- [React](https://reactjs.org/)：19.0.0
- [Next.js](https://nextjs.org/)：15.1.7

Other major libraries
- [postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
- [emotion](https://emotion.sh/)
- [@emotion-icons](https://github.com/emotion-icons/emotion-icons)
- [ky-universal](https://github.com/sindresorhus/ky-universal)
- [polished](https://polished.js.org/)

※Regarding the REST COUNTRIES API, the assignment guide said it was https://restcountries.eu/, but I heard that it has become a subscription API, so I used the open source version, https://restcountries.com/.

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a DevChallenges challenge. The challenge was to build an application to complete the given user stories.

- [x] User story: I can see at least 2 types of questions: a city is the capital of.. or a flag belong to country..
- [x] User story: I can see select an answer
- [x] User story: I can see if my answer is correct or incorrect
- [x] User story: When I answer correctly, I can move on to the next question
- [x] User story: When I answer incorrectly, I can see my results and try again
- [x] User story: I can try again

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](https://www.npmjs.com/)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone git@github.com:h-yoshikawa44/country-quiz.git
or
git clone https://github.com/h-yoshikawa44/country-quiz.git

# Install dependencies
npm install

# Run the app
npm run dev
```

## learned/improved
- How to use ReturnType to get the function's return type.
- How to combine useContext and custom hooks.
- Basic usage of the REST COUNTRIES API.

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

- [TypeScriptで関数の返り値を型に変換する(ReturnTypeを使う)](https://tech-1natsu.hatenablog.com/entry/2018/12/09/004338)
- [useContextとuseStateで状態をグローバルに共有する](https://js-challenge.dev/posts/implements-modal-using-custom-hook/)
- [React Hooks: 子コンポーネントから親の状態をレンダー時に変えたら叱られた ー Warning: Cannot update a component while rendering a different component](https://qiita.com/FumioNonaka/items/3fe39911e3f2479128e8)

## Contact

- Website: [h-yoshikawa44.com](https://h-yoshikawa44.com)
- GitHub: [@h-yoshikawa44](https://github.com/h-yoshikawa44)
- X: [@yoshi44_lion](https://x.com/yoshi44_lion)
