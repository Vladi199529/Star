import {starWarsInfo} from "../utils/constants.ts";

const StarWars = () => {
    return (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;