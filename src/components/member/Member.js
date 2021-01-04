function Member(props) {
    let imgSrc = "https://robohash.org/" + props.name + ".png";
    return (
        <div className="member">
            <div className="member-img">
                <img src={imgSrc}></img>
            </div>
            <div class="member-text">
                <h5 className="member-name">{props.name}</h5>
                <hr></hr>
                <p className="member-descr">{props.descr}</p>
            </div>
        </div>
    )
}

export default Member;