import React from "react";
// import Authorization from "../pages/Authorization";
import Home from "../pages/Home";
import Groups from "../components/Groups";
import Students from "../components/Students";
import Schedule from "../components/Schedule";
import Settings from "../components/Settings";
import Help from "../components/Help";

// const Home = React.lazy(()=>import("./../pages/Home"));

export const navbar = [
  {
    //
    // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
    path: "/home",
    element: <Home />,
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    path: "/groups",
    element: <Groups />,
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    path: "/users",
    element: <Students />,
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    path: "/table",
    element: <Schedule />,
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    path: "/settings",
    element: <Settings />,
    title: "Home",
    private: false,
    hidden: false,
  },
  {
    path: "/help",
    element: <Help />,
    title: "Home",
    private: false,
    hidden: false,
  },
  // {
  //     // element: <React.Suspense fallback={<React.Fragment><div><div>Loading...</div></div></React.Fragment>}><Home /></React.Suspense>,
  //     element: <Authorization/>,
  //     title: "Authorization",
  //     path: "/auth",
  //     private: false,
  //     hidden: false,
  //   },
];
// export {navbar}
