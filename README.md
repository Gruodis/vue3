# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Tailwind and Prettier

To begin, create a new Vue 3 project. Run the following command in your terminal to install and execute create-vue, the official Vue project scaffolding tool for building vite-powered projects:
```sh
npm init vue@latest
```

You should receive a prompt with a list of optional features. Name the project vue-tailwindcss and choose No for the rest of the options.
```sh
√ Project name: ... vue-tailwindcss

√ Add TypeScript? ... No / Yes

√ Add JSX Support? ... No / Yes

√ Add Vue Router for Single Page Application development? ... No / Yes

√ Add Pinia for state management? ... No / Yes

√ Add Vitest for Unit Testing? ... No / Yes

√ Add an End-to-End Testing Solution? » No

√ Add ESLint for code quality? ... No / Yes

√ Add Prettier for code formatting? ... No / Yes
```

Now, navigate to the project folder using cd vue-tailwindcss and run npm install to install the project’s open source dependencies from npm.

Execute npm run dev to start the application in a development environment.

This command should start the app on the localhost server:
blog-vue-tailwind-localhost

Navigate to the indicated local URL to view the app:
blog-vue-tailwind-you-did-it

## Now it’s time to set up Tailwind CSS in the Vue app.

How to set up Tailwind with Vue

To begin, run the following command in the terminal:
```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
This command installs Tailwind CSS and its peer dependencies (autoprefixer and postcss) via npm.

Next, generate your tailwind.config.js and postcss.config.js files by running the command below. You’ll use these files to configure and customize Tailwind:
```sh
npx tailwindcss init -p
```
This command should create tailwind.config.js at the project root with these details:
```sh
module.exports = {
content: [],
theme: {
     extend: {},
},
plugins: [],
}
```

You also created postcss.config.js and configured the tailwindcss and autoprefixer plugins:

```sh
module.exports = {
plugins: {
     tailwindcss: {},
     autoprefixer: {},
    },
}
```

In tailwind.config.js, modify the content array to include all the paths to your pages and components. This will configure Tailwind to remove unused CSS classes from the final output, reducing the file size.

Your tailwind.config.js file should now look like this:
```sh
module.exports = {
content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
theme: {
     extend: {},
},
plugins: [],
};
```

Next, create a new file named index.css in the src folder of the project and add the following:
```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You used the @tailwind directive to include Tailwind’s base, components, and utilities styles in your project. Later, when you build the project, Tailwind will automatically replace these directives with the styles you dictated to it.

Now, import index.css into our ./src/main.js file to start using it:
```sh
import './index.css'
```

Note that you should delete the line importing the assets/main.css file. This will prevent you from using vanilla CSS.

You can now start creating components using Tailwind.


## Prettier
```shell
 npm install prettier eslint eslint-plugin-vue eslint-config-prettier eslint-plugin-prettier --save-dev

```