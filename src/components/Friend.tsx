
interface Props{
    picture: string,
    pos: number,
}

const Friend = ({picture, pos}: Props) => {
    let styles = '';
    if(pos === 7) {
        styles = 'rounded-bl-2xl';
    }
    if(pos === 9) {
        styles = 'rounded-br-2xl';
    }
    return (
        <img className={`${styles}`} src={picture} alt="Friend"/>
    );
};

export default Friend;