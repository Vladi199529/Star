import Navigation from "./Navigation.tsx";

const Header = () => {
    return (
        <header className="bg-grey-color rounded-t-2xl">
            <Navigation/>
            <h1 className="text-center py-6 text-3xl">Luke Skywalker</h1>
        </header>
    );
};

export default Header;