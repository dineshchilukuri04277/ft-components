# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

How to make a repo as a npm package & install the package to use the components in it.

1) create a github account.
2) create the repository in the github with xyz name.
3) create the react application with xyz name.
4) push the react application into the github repo.
5) refer this link https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry 
6) create a Personal access token.
    a) click on profile icon => Settings => Developer Setting => Personal Acess token => Generate new token.
    b) save the access token securely for future use.
7) create a .npmrc file in the same folder where the react app is created.
8)  add //npm.pkg.github.com/:_authToken=PAT in the .npmrc file.
9) update project name (xyz) in the package.json to @owner/xyz.
10) add the below code in package.json.
 
 "repository": {
    "url": "git://github.com/owner/xyz.git"
  }

11) create .npmrc file in the recat application (xyz)
12) push all the changes into github
13 enter the command npm publish to push the repository as npm package.
    a) it will ask the below things
        > Username: USERNAME
        > Password: TOKEN
        > Email: PUBLIC-EMAIL-ADDRESS
project will be pushed as npm package into the github repository.

14) check the package will be available in the github repo.
15) if we want to install this package in another project as library we have to create the .npmrc file and include the below code

@owner:registry=https://npm.pkg.github.com

16) install the package by entering the command npm install package-name.

package will be installed and added to the node modules.

import the package and use it.







