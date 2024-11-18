import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.ts";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...']);


    async function fillPlanets(url:string) {
        const response = await fetch(url);
        const data: Array<{name: string}> = await response.json();
        const planets = data.map(item => item.name);
        setPlanets(planets);
        localStorage.setItem('planets', JSON.stringify({
            payload: planets,
            time: Date.now()
        }));
    }

    useEffect(() => {
        const planets = JSON.parse(localStorage.getItem('planets')!);
        if (planets && ((Date.now() - planets.time) < period_month)) {
            setPlanets(planets.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`);
        }
    }, [])

    return (
        <form className={`w-4/5 my-0 mx-auto rounded-[5px] bg-[#f2f2f2] p-5`} onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label className={`w-full text-red-color`}>First Name
                <input className={`border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`} type="text"
                       name="firstname" placeholder="Your first name..."/>
            </label>
            <label className={`w-full text-red-color`}>Last Name
                <input className={`border w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`} type="text"
                       name="lastname" placeholder="Your last name..."/>
            </label>
            <label className={`w-full text-red-color`}>Planet
                <select className={`border w-full text-black p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                        name="planet">{
                    planets.map(item => <option value={item} key={item}>{item}</option>)
                }
                </select>
            </label>
            <label className={`w-full text-red-color`}>Subject
                <textarea className={`border h-52 w-full p-3 border-[#ccc] rounded-[4px] mt-1.5 mb-4 resize-y`}
                          name="subject" placeholder="Write something..."/>
            </label>
            <button
                className={`bg-[#4CAF50] text-white py-3 px-5 border-none rounded-[4px] cursor-pointer hover:bg-[#45a049]`}
                type="submit">Submit
            </button>
        </form>
    )
}

export default Contact;