# Weather List - with React, TypeScript and Redux

Build a weather app, displaying the current weather conditions of Australia’s major capital cities. Notes:
- Display the name of the city, current temperature and conditions, in a user-friendly responsive UI.
- Weather data is supplied in the attached json file (for convenience).
- Detailed information on the data supplied can be found here: [Open Weather Map](https://openweathermap.org/current)

### Tech Specs

- Bootstrapped with Create React App.
- TypeScript static type-checking
- Use of state management with Redux
- React styling methodology with inline CSS & processor SCSS
- Basic unit testing
- Avoid using UI frameworks (e.g. Bootstrap, Material UI etc)

---

## Installation

1. Clone the repository:
```bash
# SSH
git clone git@github.com:mr-ado/react-ts-redux-weather-list.git
# or SFTP
git clone https://github.com/mr-ado/react-ts-redux-weather-list.git
```

2. Install local dependencies with yarm;
```bash
cd react-ts-redux-weather-list
yarn install
```

That's it, this project should now be ready to develop or build.

---

## Development

1. Create a feature branch for your updates:
```bash
git flow feature start <name-of-feature>
```
This will create a feature branch from development.

2. Run the app in the development mode. 
```bash
yarn start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. <br />
The page will reload if you make edits. You will also see any lint errors in the console.

3. Launche the test runner in the interactive watch mode.
```bash
yarn test
```
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

4. Builds the app for production to the `build` folder.
```bash
yarn build
```
It correctly bundles React in production mode and optimizes the build for the best performance. <br/>
The build is minified and the filenames include the hashes. Your app is ready to be deployed! <br/>
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

5. When development has been completed and tested; merge the feature branch into development by running:
```bash
git flow feature finish <name-of-feature>
```

6. When you are ready to deploy; create a release branch by running:
```bash
git flow release start <version-number>
```

---

## Deployment

TBC

---

## Resources

TBC
