# DrakonCG.com
 - speed-built SPA (Single Page Application) 
 - designed for reusability and proof of concept - a more manageable, customizable, scalable and alternative to a traditional blog

## Scripts
### - Initial Configuration
  run scripts `yarn && yarn dev`

### - Start Local Application
  run scripts `yarn dev`

### - Development Phase
  #### Run `yarn build` when
  - see changes in tsconfig.json / webpack.config.js
  - deploy to a production enviro

  #### Run `yarn` when
  - see changes in Package.json

  #### Run `yarn audit` and|or `yarn outdated` when
  - we want to check dependency vulnerabilities && integrity respectively

  #### Run `yarn cache clean` whenever 
  - we want to clear local packages cache

## Frameworks
1. **React.js** : flexible and performant web API framework

## Development/ Production Dependencies
1. **axios** : promised-based API requests in Node.js and the browser
2. **dotenv** : environment loading module
3. **sass**, **sass-loader**, **style-loader**, **css-loader** : Sassy CSS (Cascade Style Sheet) along with its loading-processing css in JavaScript
4. **react-router** & **react-router-dom** : on-demand client-side URL routing for faster and more dynamic user experiences
5. **react-lazy-load** : predictable way to defer content loading once visible in the viewport

## Possible Areas of Improvement
  - resolve `TODO:` annotations
  - implement Typescript, unit and integration tests early