import React, { Component, Suspense } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Navigate,
  useHistory,
  useLocation,
  Routes,
} from "react-router-dom";
import "./scss/style.scss";
import { store, persistor } from "./store/index";
import { Provider, useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute";
import { PersistGate } from "redux-persist/integration/react";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Register = React.lazy(() => import("./views/pages/register/Register"));
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Suspense fallback={loading}>
            <Routes>
              <Route path="/login" name="Login Page" element={<Login />} />
              <Route
                exact
                path="/register"
                name="Register Page"
                element={<Register />}
              />

              <Route path="*" name="Home" element={<DefaultLayout />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

export default App;
