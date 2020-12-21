import Member from "./Member/Member"

function Members() {
    const a = [
        {
            id: 0,
            name: "Adriano",
            descr: "mi piacciono i cani asdpasjdadijaoidja kjasknjdsa askods asdoknmkas kias iojasoèisd joiw uwq oi"
        },
        {
            id: 1,
            name: "Stefano",
            descr: "I <3 serena"
        }
    ]

    return (
        a.map((member) =>
            <Member key={member.id} name={member.name} descr={member.descr} />
        ));
}

export default Members;