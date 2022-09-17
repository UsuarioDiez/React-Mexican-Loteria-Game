import Card from "./Card";

let cartas = [];
for (var i = 0; i <= 54; i++) {
  cartas[i] = "/cartas/" + (i) + ".jpg";
}

function CardRepository(props) {
  return (
    <Card>
      <img src={cartas[props.currentCard]} alt={props.currentCard} />
    </Card>
  );
}

export default CardRepository;
