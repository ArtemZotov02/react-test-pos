import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Orders from "./pages/orders/Orders.tsx";
import { Fragment } from "react/jsx-runtime";
import NotFound from "./pages/404/NotFound.tsx";

const App = () => {
  const router = [
    {
      path: "/",
      Component: <Home/>,
    },
    {
      path: "/orders",
      Component: <Orders/>,
    },
  ];

  return (
      <Routes> 
        {router.map(({ path, Component }, key) => (
          <Fragment key={key}>
            <Route path={`/:lang${path}`} element={Component}  />
            <Route path={path} element={Component} />
          </Fragment>
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default App;


