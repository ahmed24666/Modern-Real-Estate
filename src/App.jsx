import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import './app.scss'
import Properties from "./Component/Properties/Properties";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Nav/>
        <Outlet />
        <Footer/>
      </div>
    )
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/properties/:id",
          element: <Home/>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
