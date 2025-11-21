import { Route } from "react-router-dom";
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import { REVENUE } from "./constants";
import RevenueScreen from "../modules/revenue/screens";


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
    <Route
      path={REVENUE}
      element={
        <Layout>
          <RevenueScreen />
        </Layout>
      }
    />
  </>
);
