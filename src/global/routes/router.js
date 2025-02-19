import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: < DefaultLayout />,
        children: [
            {
                index: true,
                element: <h1>Homepage </h1>
            },
            {
                path:'spices',
                element: <h1>Apparea</h1>,
                children: [
                    {
                        index:true,
                        element: <h1>page1</h1>,
                        //loader: loader
                    },
                    {
                        path:':spiceSlug',
                        element: <h1>page1</h1>,
                        //loader: loader
                        
                    }
                ]
            },
            {
                path:'spicology',
                element: <h1>UnderConstruction</h1>,
            },
        ]
    }
]);

export default router;