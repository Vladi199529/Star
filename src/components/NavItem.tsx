interface Props{
    itemTitle: string
}

const NavItem = ({itemTitle}: Props) => {

    return (
        <li className={`bg-red-color border-black border-2 rounded-[5px] px-3 py-2 cursor-pointer hover:text-white hover:bg-red-500`}>
            <a href={`/${itemTitle}`}>{itemTitle}</a>`
        </li>
    );
};

export default NavItem;
