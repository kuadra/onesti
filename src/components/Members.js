import Member from "./Member/Member"
function Members() {
    const a = [
        {
            id: 0,
            name: "Adriano",
            descr: "Mi piacciono le cose semplici e i cani. Louis è un cane molto bello e credo si scriva così."
        },
        {
            id: 1,
            name: "Stefano",
            descr: "I <3 serena e le cose semplici"
        }
    ]

    return (
        <section id="members" className="members-container">{
            a.map((member) =>
                <Member key={member.id} name={member.name} descr={member.descr} />
            )}
        </section>);

}

export default Members;