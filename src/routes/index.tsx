import { Route } from "react-router-dom";
import Layout from "../components/Layout";
import { EXPENSE, REVENUE, SUSCRIPTION } from "./constants";
import RevenueScreen from "../modules/revenue/screens";
import ExpenseScreen from "../modules/expenses/screens";
import SuscriptionScreen from "../modules/suscriptions/screens";
import DashboardScreen from "../modules/dashboard/screens";

export const routerRoutes = (
  <>
    <Route
      path="/"
      element={
        <Layout>
          <DashboardScreen />
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
    <Route
      path={EXPENSE}
      element={
        <Layout>
          <ExpenseScreen />
        </Layout>
      }
    />
    <Route
      path={SUSCRIPTION}
      element={
        <Layout>
          <SuscriptionScreen />
        </Layout>
      }
    />
  </>
);
