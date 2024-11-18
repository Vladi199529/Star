const Footer = () => {
    return (
        <footer className={`h-24 bg-grey-color clear-both rounded-b-2xl grid grid-cols-8 items-center`}>
            <div className={`col-start-3 bg-red-color border-black border-2 rounded-[5px] px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}>
                <p className={`text-center`}>Send me an <span className={`text-black uppercase`}>email</span></p>
            </div>
        </footer>
    );
};

export default Footer;

//"m-0"
// "text-dark text-uppercase"