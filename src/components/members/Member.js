function Member(props) {
  let imgSrc = "https://robohash.org/" + props.name + ".png";
  return (
    <div className="member">
      <img
        className="member-img"
        alt="Contact Administration"
        src={imgSrc}
      ></img>
      <h5>{props.name}</h5>
      <p>{props.descr}</p>
    </div>
  );
}

export default Member;
