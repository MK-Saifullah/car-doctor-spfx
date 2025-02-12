import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Pages/Router/Routes/Routes";
import RouteChangeListener from "./RouteChangeListener";

function App() {
  return (
    <div className="mx-auto max-w-screen-lg">
      {/* <RouteChangeListener>
      </RouteChangeListener> */}
      
        <RouterProvider router={router}>
        <RouteChangeListener />
        </RouterProvider>
    </div>
  );
}

export default App;
