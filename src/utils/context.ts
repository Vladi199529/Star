import {createContext} from "react";
import {SWcontextValue} from "";

export const SWContext = createContext<SWContextValue>({
    page: 'Home',
    changePage: (page:string) => console.log(page),
});