import { Outlet, Route } from "react-router-dom";
import Layout from "../components/Layout";


export const routerRoutes = (
  <>
    <Route element={<Outlet />}>
      <Route
        path="/"
        element={
            <Layout>
            </Layout>
        }
      />

    </Route>
  </>
);
