import { Outlet } from "react-router-dom";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import s from './Layout.module.scss'
import backgroundIMG from "../../common/img/space_star_wallpaper_026.png";
import backgroundIMG2 from "../../common/img/bgImg.png";

const Layout = () => {
    const  mars = {backgroundImage: `url(${backgroundIMG2})`}
       const  space= {backgroundImage: `url(${backgroundIMG})`}

    return (
            <div className={s.layout}>
               <div className={s.bcg}> </div>
                    <div className={s.space} style={space}> </div>
                    <div className={s.mars} style={mars}> </div>
                <Nav/>
                <div className={s.container}>
                    <Outlet/>
                </div>
                <Footer/>
            </div>
    );
};


export default Layout;