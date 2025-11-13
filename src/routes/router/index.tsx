import { BrowserRouter, Routes } from "react-router-dom";
import { routerRoutes } from "..";

const Router = () => {
  return (
    <>
      <BrowserRouter basename="/">
          <Routes>{routerRoutes}</Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
