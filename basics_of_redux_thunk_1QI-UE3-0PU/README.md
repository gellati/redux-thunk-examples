# Redux-thunk in get request

The project exemplifies the use of `redux-thunk` in a get request.

Install the dependencies:

    npm i

Usage:

    npm run start

Now open a browser in `http://localhost:8080/`.

Based on this [tutorial](https://www.youtube.com/watch?v=1QI-UE3-0PU). Very illustrative pictures, but he tutorial does not show the reducers or the general usage of Redux. [This posting](https://stackoverflow.com/questions/47126005/react-redux-why-does-mapstatetoprops-make-my-store-state-of-an-array-disappea) helped get the reducer finally right. Also mapStateToProps [should return an object](https://react-redux.js.org/using-react-redux/connect-mapstate), not an array.
