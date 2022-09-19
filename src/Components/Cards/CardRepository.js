let cartas = [];
for (var i = 0; i <= 53; i++) {
  cartas[i] = "/cartas/" + (i+1) + ".jpg";
}

function CardRepository(props) {
  return (
      <img src={cartas[props.n]} alt={props.n} />
  );
}

export default CardRepository;
