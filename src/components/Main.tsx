import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import StarWars from "./StarWars.tsx";
import Contact from "./Contact.tsx";
import {Route, Routes} from "react-router-dom";
import {navItems} from "../utils/constants.ts";

const Main = () => {


    return(
        <Routes>
           <Route path={'/'} element={<Home />}/>
            <Route path={`/${navItems[0]}`} element={<Home/>}/>
           <Route path={`/${navItems[1]}`} element={<AboutMe/>}/>
           <Route path={`/${navItems[2]}`} element={<StarWars/>}/>
           <Route path={`/${navItems[3]}`} element={<Contact/>}/>
        </Routes>
    )

}

export default Main;