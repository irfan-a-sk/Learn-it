import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
<<<<<<< HEAD


const router = createBrowserRouter(
  createRoutesFromElements(
<Route exact path="/" element={<App/>}>
      
      <Route exact path="home" element={<Home />} />
         <Route exact path="service" element={<Service />} />
         <Route exact path="community" element={<Community />} />
         <Route exact path="about" element={<About />} />
         <Route exact path="contact" element={<Contact />} />
      
    </Route>
=======
import Error from "./pages/Error";
import Sign from "./pages/Sign";
import Login from "./pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}/>
        <Route exact path="signup" element={<Sign />} />
        <Route exact path="login" element={<Login />} />
      <Route exact path="service" element={<Service />} />
      <Route exact path="community" element={<Community />} />
      <Route exact path="about" element={<About />} />
      <Route exact path="contact" element={<Contact />} />
>>>>>>> 8f77fbefe98f355e827d8627e429571ac04fb978

      <Route path="*" element={<Error />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
