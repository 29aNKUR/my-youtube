import { Provider } from "react-redux";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Head />
          <RouterProvider router={appRouter} />
        </div>
      </Provider>
    </>
  );
}

export default App;

{
  /**
Head
Body
  -Sidebar
    -MenuItems
  -MainContainer
  -ButtonsList
  -VideoContainer
    -VideoCard
*/
}