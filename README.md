# Vite + React Template

Just a basic template for use with Vite/React + React Router DOM and Styled Components.

This template was originally created from scratch, with following commands:

```
$ npm create vite@latest project-name -- --template react
$ npm cd project-name
$ npm install
$ npm install react-router-dom
$ npm install --save styled-components
```

And then I created some basic components, pages and layout to suggest a basic file structure to start the project, something like:

```
src
├── components
│   ├── Component1
│   |   ├── index.jsx
│   |   └── Component1.css
│   └── Component2
│       ├── index.jsx
│       └── Component2.css
├── pages
│   ├── Page1
│   |   ├── index.jsx
│   |   └── Page1.css
│   ├── Page2
│   |   ├── index.jsx
│   |   └── Page2.css
│   └── Layout
│       ├── Layout.jsx
│       ├── Header.jsx
│       └── Footer.jsx
├── main.jsx
└── main.css
```

I like to separate the Layout and components used on layout on `src/pages/Layout`

That's it. I think it's a good start when I need to use **react-router-dom**.

Comments and suggestions are welcome. 😊

---

## Development setup
```bash
# clone this repo

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

## Release History
- 0.0.0
  - First commit.
  - Using `src/pages/Layout/Layout.jsx` isntead of `App.jsx` on `index.jsx`.
  - Layout components are at same level of Layout (like Header or Footer)

## Meta
Tarcisio Cavalcante Uchoa - Front-End Developer

[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/cisoxp)
&nbsp;
[![Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tcavalcante)

Distributed under MIT License. See `` LICENSE`` for more information.