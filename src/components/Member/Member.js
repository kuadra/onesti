import './Member.css';


function Member(props) {
    let imgSrc = "https://robohash.org/" + props.name + ".png";
    return (
        <div class="member">
            <img className="member-img" src={imgSrc}></img>
            <div class="member-text">
                <p>{props.name}</p>
                <p>{props.descr}</p>
            </div>
        </div>
    )
}

export default Member;