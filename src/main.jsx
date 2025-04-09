import { createRoot } from "react-dom/client";
import { Fragment } from "react";
import Router from "./routes/Router.jsx";

createRoot(document.getElementById('root')).render(
    <Fragment>
        <Router/>
    </Fragment>
  );