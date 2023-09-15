import Header from "./component/Header"
import Dropdown from "./component/Dropdownmenu";
import Home from "./pages/Home";
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MonthlyPricing from './pages/MonthlyPricing';
import YearlyPricing from './pages/YearlyPricing';


import Inbox from './routes/pages/Inbox';
import Contacts from './routes/pages/Contacts';
import Agents from './routes/pages/Agents';
import Dashboard from './routes/pages/Dashboard';
import Settings from './routes/pages/Settings';
import Logout from './routes/pages/Logout';

import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";
// import SignUp from "./components/SignUp";
// import SignIn from "./components/SignIn";
// import MonthlyPricing from "./components/MonthlyPricing";
// import YearlyPricing from "./components/YearlyPricing";
const router = createBrowserRouter([
  {
    path: "/",
    element:< Home />
  },
  {
    path: "/SignUp",
    element: < SignUp />,
  },
  {
    path: "/SignIn",
    element: < SignIn />,
  },
  {
    path: "/MonthlyPricing",
    element: < MonthlyPricing />,
  },
 
  {
    path: "/YearlyPricing",
    element: < YearlyPricing />,
  },
  {
    path: "/Inbox",
    element: < Inbox />,
  },
  {
    path: "/Contacts",
    element: < Contacts />,
  },
  {
    path: "/Agents",
    element: < Agents />,
  },
 
  {
    path: "/Dashboard",
    element: < Dashboard />,
  },
  {
    path: "/Settings",
    element: < Settings />,
  },
 
  {
    path: "/Logout",
    element: < Logout />,
  }
 

 
]);

function Apps() {
  return (
    <RouterProvider router={router} />
  );
}

export default Apps;
