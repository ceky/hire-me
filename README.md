### Installation guide

1. Install the dependencies
   `npm install`

2. Run the project locally
   `npm run dev`

And open the page on http://localhost:3000/

3. Build the project for production use
   `npm run build`

### Delpoyment

The application has been deployed on the following url [https://famly-checkin.surge.sh/](https://famly-checkin.surge.sh/)

If routing doesn't work in production, in the /dist folder try `cp index.html 200.html`

---

### Design decisions

I used [Vite](https://vitejs.dev/) to build the application initially. This gave me a dev server with hot module replacement. Also it created the package.json with a React dependency.

The application is build with React 17 and is using hooks.

In order to connect to the server to get the data and make the checkin and checkout operations I used `axios`. Also the token is stored in `.env` file, which was added in the .gitignore as well to keep it private.

For fetching the initial list of children I createad a custom react hook. And for checking in and out a child I used `async / await`.

We have 3 components:

1. `Children` - is where we make use of the custom hook created to fetch the children. Based on that list it creates a `Child` component. Here we also include the `Pagination` component and we are updated when the page changes, so that we know to rerender the list of children, based on the page index.

2. `Child` - is where we receive the `child` property as props and we destructure it to use only the properties we're interested in. This component is the one that is controlling the checkin and checkout actions.

3. `Paginatiom` - We build the pagination here and when the page changes we update the start and the end index that we are then passing to the `Children` component to update accordingly.
