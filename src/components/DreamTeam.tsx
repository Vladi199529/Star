import {friends} from "../utils/constants.ts";
import Friend from "./Friend.tsx";

const DreamTeam = () => {
    return (
        <section className={`float-right w-1/2 mx-2 border border-base-color rounded-b-2xl grid grid-cols-3 gap-1`}>
            <h2 className={`col-span-3 text-center text-[2rem]`}>Dream team</h2>
            {friends.map((f, i) => <Friend picture={f} key={i} pos={i + 1} />)}
        </section>
    );
};

export default DreamTeam;