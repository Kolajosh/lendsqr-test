# Lendsqr Assessment

This is an implementation of an assessment to demonstrate my React Typescript and scss skills.

The design was gotten from here:
https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-0&t=Nx39FoUiR5rXGYKF-1

The task is to create a page which lists all the users from a JSON file or Mock API of 500 records, and read each user details on demand.
It should look like this:

![Login](https://i.postimg.cc/k4FRRD6Z/image.png)
![UsersPage](https://i.postimg.cc/QtbVxPvZ/image.png)
![User Detail](https://i.postimg.cc/05VrTTpp/image.png)

## Styling

A key criteria for this exercise is how accurately I replicated the designs.
I accessed the Figma file with all the information I needed at https://www.figma.com/design/ZKILoCoIoy1IESdBpq3GNC/Lendsqr-Frontend-Engineering-Assessment?node-id=5530-0&t=Nx39FoUiR5rXGYKF-1

I used SCSS in React to accomplish this exercise.

## Functionality

The functionality was implemented using React and TypeScript.

The areas that are implemented are:

- Login:

  - Clicking the login button navigates to the `/users` route.
  - There were no backend functionality provided, so email and password authentication were not functional
  - Login Validation was only done on the frontend (You need to input just a valid email)

- Users listing:
  - 500 records of users were fetched from a JSON Api service.
  - I used this Json-generator (https://app.json-generator.com/) to create my list
  - You would need to create yours also if you want to run this locally on your PC
  - Once you have created yours, generate your API Key and store it in the env file together with the baseurl
  - You can filter through users on the user table
  - If your filters returned an empty list, you can reset your filter.
- Pagination:

  - Pagination was implemented.
  - Only the set amount of record to show per page was visible, this was achieved by slicing the array of users per the set amount of users to be displayed on the table.
  - I also implemented pages navigation on the table.

- User Details
  - For a selected/single user, when the `View Details` button is clicked, a new page is navigated to `/users/:id` that reveals more information about that user.

Other notes:

- In order to generate your own JSON record to run the app locally
  - Visit https://app.json-generator.com/ and create an account
  - You will come across a screen divided in two section. On the left section, copy and paste the Format foun on this link https://docs.google.com/document/d/1QsDrPnNQR5GptDU5Vo1v2DFzyTITMVaeL6bDCeXWFHw/edit?usp=sharing
  - After that you click on "Update" to see the generated data on the right screen section.
  - Once you have confirmed that everything runs smoothly you will have to generate your API Key by clicking
    on the dropdown menu on the navbar at the extreme top right.
  - Once it has been done, you will have to copy the key and paste it in your .env file
  - Then click on "Get Data" and copy your url and paste it also in your .env file.
  - You are good to go!

Experiencing any issues feel free to reach out to me at kjosh344@gmail.com

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
