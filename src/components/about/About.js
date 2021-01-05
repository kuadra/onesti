import React, { Component } from "react";
import "./about.css";
const esempi = [
  "Strategie Push di Vendita per il Mercato Online",
  "Brand Identity, Logo e Comunicazione",
  "Creazione e Gestione Campagne Pubblicitarie e di Marketing ad Alto Impatto",
  "Gestione Social Network e contenuti (FB, Instagram, Youtube, LinkedIn, TikTok, Pintrest)",
  "Search Marketing Organico e a Pagamento (SEO-SEM) su ogni Motore di Ricerca (Google, Yahoo, Bing) e App. web (Google Maps, Waze)",
  "Creazione Siti Web, E-commerce e App.",
  "Gestione Siti Web: contenuti e strategia",
  "Gestione E-Commerce: tecnica online e logistica/strategica offline",
  "Video: Creazione Adv Video e Contenuti Video",
  "Consulenze Gestioni IN-store",
  "Creazione Nuove Opportunità: espansione su altri mercati o estero tramite digitale.",
];

class About extends Component {
  render() {
    let e = esempi.map((p) => <li className="item flex-item">{p}</li>);

    return (
      <section id="about">
        <div className="section-img">
          <img
            className="img-block-center"
            src="./images/onesti/sopra_su_di_noi.jpg"
          ></img>
        </div>
        <h2 className="section-title">Su di noi</h2>
        <p className="section-intro">
          Accompagniamo le PMI e non nel mondo del digitale, gestiamo progetti e
          campagne pubblicitarie di ogni tipo e per ogni obbiettivo. Siamo un
          gruppo di giovani talenti laureati con esperienza. Ognuno di noi ha
          acquistato un backgroud in grandi aziende su diversi campi, oggi siamo
          stufi di impegnarci per grandi player e vogliamo mettere in campo i
          nostri talenti per te!
        </p>
        <div className="row">
          <div className="skills-container">
            <div className="skill">
              <img src="./images/onesti/strategia.jpg"></img>
              <h3>Strategia</h3>
              <p>
                Sviluppiamo la migliore strategia in base ai tuoi obbiettivi.
                Non improvvisiamo, non abbiamo la bacchetta magica, ma
                osserviamo, analizziamo e creiamo una strategia ad hoc per
                raggiungere i tuoi obbiettivi sia online che offline. Giochiamo
                in attacco, a noi piace fare goal!
              </p>
            </div>
            <div className="skill">
              <img
                className="section-img"
                src="./images/onesti/social_m_marketing.jpg"
              ></img>
              <h3>Social Media Marketing</h3>
              <p>
                Gestiamo e valorizziamo la tua fanbase. Non siamo d’accordo con
                chi dice che i social per le PMI sono superflui. Grazie
                all’abilità dei nostri gestori toccherai con mano il valore
                ottenibile dai social media. Profilazione, targetizzazione
                geografica ed engagment, qui, sono le nostre armi!
              </p>
            </div>
            <div className="skill">
              <img
                className="section-img"
                src="./images/onesti/search_marketing.jpg"
              ></img>
              <h3>Search Marketing</h3>
              <p>
                Fatti trovare da tutti i tuoi possibili clienti, ci sono tanti
                strumenti, da Google alle app meno conosciute siamo in grado di
                offrirti una panoramicha delle possibilità e scegliere le
                migliori per te, ci piace raggiungere le vette più alte di
                visibilità e rimanerci!
              </p>
            </div>
            <div className="skill">
              <img
                className="section-img"
                src="./images/onesti/siti_web_app.jpg"
              ></img>
              <h3>Creazione Siti Web e App</h3>
              <p>
                un servizio per chi vuole sfruttare in profondità il digitale in
                tutti i suoi aspetti. Dal sito web vetrina per fare brand
                identity e comunicazione, ad e-commerce performanti per vendere
                online, passando per app. web per seguire i tuoi clienti in ogni
                momento e sistemi di gestione dei tuoi clienti. L’agenzia degli
                Onesti ti trasforma!
              </p>
            </div>
            <div className="skill">
              <img
                className="section-img"
                src="./images/onesti/adv_personalizzata.jpg"
              ></img>
              <h3>
                Creazione advertising personalizzata e gestione campagne
                pubblicitarie
              </h3>
              <p>
                La nostra expertise ci permette di offrire ogni tipo di
                creatività pubblicitaria dalle grafiche ai video. Grafiche in
                stile guerilla marketing conquisteranno i tuoi possibili clienti
                online e offline, produzioni video di valore avvaloreranno il
                tuo marchio e daranno la giusta visibilità al tuo saper fare.
                Gestiamo campagne online e offline coscienti dei parametri da
                attenzionare, in tempo reale e non, facendoci trovare pronti ad
                aggiustare il tiro per raggiungere l’obbiettivo.
              </p>
            </div>
          </div>
        </div>
        <div className="examples">
          <div className="row">
            <h3>Alcuni Esempi</h3>
            <ul className="container flex"> {e}</ul>
            <p className="section-intro">
              Siamo in grado di offrire una gestione multicanale che ci rende
              sicuramente i migliori partner per la tua azienda, Mettici alla
              prova e non te ne pentirai. Tanti servizi, tante competenze, un
              approccio umano e soprattutto ONESTO! Insieme per il successo!
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
