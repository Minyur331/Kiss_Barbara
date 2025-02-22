import { Outlet } from "react-router";

const AppArea = () => {

    return (
        <div className="container my-4 p-2 bg-light">
            < Outlet />
        </div>
    );
}

export default AppArea;