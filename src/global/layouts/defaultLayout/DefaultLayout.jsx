import { Outlet } from "react-router";
import { SiteFooter, SiteHeader } from "../../../features/nav";

import * as style from './default-layout.module.css'

const DefaultLayout= () => {
    return(
        <div className={style['default-layout']}>
            <SiteHeader />
            <Outlet />
            <SiteFooter />
        </div>
    )
}

export default DefaultLayout;