import Member from "./Member";
import "./Member.css";
function Members() {
  const a = [
    {
      id: 0,
      name: "Adriano l’Onesto Furbo",
      descr:
        "Laureato con master in Management e Marketing ha fatto i primi passi nel food e travel network digitale più grande d’Italia, ha sviluppato strategie commerciali per grandi marchi di successo online e off line. Oggi mette in campo a sua capacità gestionale e commerciale per te!",
    },
    {
      id: 1,
      name: "Stefano l’Onesto Nerd",
      descr:
        "A lui piacciono le cose semplici, tipo i sistemi informatici. Ha iniziato a programmare siti web in cameretta mentre guardava Ken il guerriero, diventato collaboratore e consulente per agenzie digitali tra le più grandi sul mercato, oggi è quì pronto a giocare nella nostra squadra per te!",
    },
    {
      id: 2,
      name: "Fabio l’Onesto Simpatico",
      descr:
        "Se lo conosci non te lo dimentichi, come i suoi post sui social. Laureato con master in nuovi media, ha una personalità travolgente che ha convinto tanti ad affidargli l’immagine sui social. E’ stato social media manager per aziende e personalità importanti (da vip a politici) oggi è qui per innovare la tua comunicazione.",
    },
    {
      id: 3,
      name: "Giuliano l’Onesto Saggio",
      descr:
        "Ingegnere dell’immagine e del suono, esperto grafico e video creator inizia i suoi primi passi come regista, collaboratore RAI e altre grandi aziende, l’abbiamo con noi e adesso è a vostra disposizione per valorizzare il vostro lavoro.",
    },
  ];

  return (
    <section id="members" className="members-container">
      <div className="row">
        <div className="members-container">
          {a.map((member) => (
            <Member key={member.id} name={member.name} descr={member.descr} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
