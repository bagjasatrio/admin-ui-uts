import GoalsPage from "./Pages/goals";
import BalancePage from "./Pages/balance";
import DashboardPage from "./Pages/dashboard";
import ErrorRoute from "./Pages/errorRoute";
import ForgotPassword from "./Pages/ForgotPassword";
import SignInPage from "./Pages/SignIn";
import SignUpPage from "./Pages/SignUp";

import { createBrowserRouter, RouterProvider } from "react-router-dom";



const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage/>,
      errorElement: <ErrorRoute/>,
    },
     
    {
      path: "/login",
      element: <SignInPage/>
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    },
    {
      path: "/balance",
      element: <BalancePage/>
    },
    {
      path: "/goals",
      element: <GoalsPage/>
    },
    {
      path: "/logout",
      element: <SignInPage/>
    }

  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;