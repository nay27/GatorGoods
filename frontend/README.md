Make sure you have npm installed, find instructions online for your specific OS.

Configure development environment:
`cd frontend`
`npm i`

To run in development:
`npm start`
open your browser to `localhost:8080`

TODO production config for webpack
TODO setup elixir to serve bundle.js

# So what is all this and how do I develop?
Assuming you already know the basics of react, to work on the about page just
add components to `/src/components/about` and then add those to `about/index.js`
to render them on the about page. I've configured everything so that if you make changes to these files and save, they should "recompile" and your web-browser should reload these changes.

### longer explanation of configuration
React is a very simple library to understand, it is the infrastructure that becomes confusing. At the root of everything, it inserts a single component (<App />) to a single DOM element. This element can be seen in `src/index.html` (this is just a template for development, will probably later replace with an elixir template) and is a div with the id `react-root`. Then, if you look at `src/index.js`, you'll see that ReactDOM inserts the component hierarchy at this div.

#### where it gets a little confusing
Javascript has gone through a lot of changes in recent years and browsers haven't been the fastest at adopting these changes. So, in order to use newer syntax and features, our code is preprocessed (kind of like compiling) by a library called Babel. Additionally, our code is "bundled" into a single javascript file (found at dist/bundle.js if you run `npm run build`), this is done by a library called Webpack. Webpack looks at all of the import statements used and links these into a single file and minifies it if the mode is set to production. You aren't intended to be able to understand the code in `dist/bundle.js`, it is generated automatically based on changes. 