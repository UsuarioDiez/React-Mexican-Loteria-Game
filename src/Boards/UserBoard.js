

function UserBoard(props){
    const currentCard=props.currentCard;
    return <h1>Saludos desde otro componente, tienes la carta: {currentCard}</h1>
}

export default UserBoard;