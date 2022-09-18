let cartas = [];
for (var i = 0; i <= 54; i++) {
  cartas[i] = "/cartas/" + (i) + ".jpg";
}

function CardRepository(props) {
  return (
      <img src={cartas[props.n]} alt={props.n} />
  );
}

export default CardRepository;
