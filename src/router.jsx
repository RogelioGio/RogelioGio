import { createBrowserRouter } from "react-router-dom";
import Index from "./Index";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Index/>
    }
])