import Card from "./Card";

let cartas = [];
for (var i = 1; i <= 54; i++) {
  cartas[i] = "/cartas/" + i + ".jpg";
}

function CardRepository(props) {
  return (
    <Card>
      <img src={cartas[props.n]} alt={props.n} />
    </Card>
  );
}

export default CardRepository;
