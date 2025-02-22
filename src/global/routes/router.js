import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout/DefaultLayout";
import AppArea from "../layouts/AppArea/AppArea";


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
                element: <AppArea/>,
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
            {
                path:'upload',
                element: <AppArea/>,
                children: [
                    {
                        index:true,
                        element: <h1>page1</h1>,
                        //loader: getPlants
                    },
                ]
            }
        ]
    }
]);

export default router;