import { Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";


export const routerRoutes = (
  <>
    <Route
      path="/"
      element={
        <Layout>
          <Dashboard />
        </Layout>
      }
    />
  </>
);
