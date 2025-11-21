import './App.css'
import { useEffect } from "react";
import Router from "./routes/router";
import * as app from "./app.imports"

const App = () => {
  const [isLoaded, setIsLoaded] = app.useState<boolean>(false);
  const [dependencyManager] = app.useState<app.DependencyManager>(
    new app.DependencyManager()
  );

  useEffect(() => {
    app.httpClientModuleInitialize(dependencyManager);
    app.revenueModuleInitialize(dependencyManager);
    app.expenseModuleInitialize(dependencyManager);
    app.suscriptionModuleInitialize(dependencyManager);
    setIsLoaded(true);
  }, []);

  return (
      isLoaded && (
        <app.DependenciesContextProvider dependencyManager={dependencyManager}>
          <Router />
        </app.DependenciesContextProvider>
      )
  );
};

export default App;