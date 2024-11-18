import {createContext} from "react";
import {SWContextValue} from "./types";

export const SWContext = createContext<SWContextValue>({
    page: 'Home',
    changePage: (page: string) => console.log(page),
});