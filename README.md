# FastyBird web-ui theme library

[![Latest stable](https://badgen.net/npm/v/@fastybird/web-ui-theme?cache=300&style=flast-square)](https://www.npmjs.com/package/@fastybird/web-ui-theme)
[![Downloads total](https://badgen.net/npm/dt/@fastybird/web-ui-theme?cache=300&style=flast-square)](https://www.npmjs.com/package/@fastybird/web-ui-theme)
[![Licence](https://badgen.net/npm/license/@fastybird/web-ui-theme?cache=300&style=flast-square)](https://github.com/FastyBird/web-ui-theme/blob/master/LICENSE.md)
![Types](https://badgen.net/npm/types/@fastybird/web-ui-theme?cache=300&style=flast-square)

## What is FastyBird web-ui theme library?

This library is a collection of [Vue](https://vuejs.org) framework components used for [FastyBird](https://www.fastybird.com) web application user interfaces.

## Installation

The best way to install **@fastybird/web-ui-theme** is using [Yarn](https://yarnpkg.com/):

```sh
yarn add @fastybird/web-ui-theme
```

or if you prefer npm:

```sh
npm install @fastybird/web-ui-theme
```

## Setup in your application

Register Vue plugin:

```js
import Vue from 'vue'
import FastyBirdWebUI from '@fastybird/web-ui-theme'

Vue.use(FastyBirdWebUI)
```

## Usage

In you component you could use registered visual, form and layouts components:

```vue
<template>
    <div>
        Your fancy content here

        <fb-ui-button
          href="/new/page"
          variant="primary"
          size="md"
        >
            Click here
        </fb-ui-button>
    </div>
</template>
```

## Typescript setup

Add the types to your `"types"` array in **tsconfig.json**.

```json
{
  "compilerOptions": {
    "types": [
      "@fastybird/web-ui-theme"
    ]
  }
}
```

#### Some constants:

Defined sizes are:

- small: 5px
- normal: 10px
- medium: 15px
- large: 30px

***
Homepage [https://www.fastybird.com](https://www.fastybird.com) and repository [https://github.com/FastyBird/web-ui-theme](https://github.com/FastyBird/web-ui-theme).
