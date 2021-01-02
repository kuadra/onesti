import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
      }

      return (
         <section id="about">
            <div className="row">
               <h2>Su di noi</h2>
               <p>
                  Accompagniamo le PMI e non nel mondo del digitale, gestiamo progetti e 
                  campagne pubblicitarie di ogni tipo e per ogni obbiettivo.
                  Siamo un gruppo di giovani talenti laureati con esperienza. Ognuno di 
                  noi ha acquistato un backgroud in grandi aziende su diversi campi, 
                  oggi siamo stufi di impegnarci per grandi player e vogliamo mettere 
                  in campo i nostri talenti per te!
               </p>
               <div className="skills-container">
                  <div className="skill">
                     <h3>Strategia</h3>
                     <p>
                        Sviluppiamo la migliore strategia in base ai tuoi obbiettivi.
                        Non improvvisiamo, non abbiamo la bacchetta magica, ma osserviamo,
                        analizziamo e creiamo una strategia ad hoc per raggiungere i tuoi
                        obbiettivi sia online che offline. Giochiamo in attacco,
                        a noi piace fare goal!
                     </p>
                  </div>
                  <div className="skill">
                     <h3>Social Media Marketing</h3>
                     <p>
                        Gestiamo e valorizziamo la tua fanbase. Non siamo d’accordo con chi
                        dice che i social per le PMI sono superflui. Grazie all’abilità dei
                        nostri gestori toccherai con mano il valore ottenibile dai social media.
                        Profilazione, targetizzazione geografica ed engagment,
                        qui, sono le nostre armi!
                     </p>
                  </div>
                  <div className="skill">
                     <h3>Search Marketing</h3>
                     <p>
                        Fatti trovare da tutti i tuoi possibili clienti, ci sono tanti strumenti,
                        da Google alle app meno conosciute siamo in grado di offrirti una
                        panoramicha delle possibilità e scegliere le migliori per te,
                        ci piace raggiungere le vette più alte di visibilità e rimanerci!
                     </p>
                  </div>
                  <div className="skill">
                     <h3>Creazione Siti Web e App</h3>
                     <p>
                        un servizio per chi vuole sfruttare in profondità il digitale in tutti i
                        suoi aspetti. Dal sito web vetrina per fare brand identity e comunicazione,
                        ad e-commerce performanti per vendere online, passando per app. web per seguire
                        i tuoi clienti in ogni momento e sistemi di gestione dei tuoi clienti.
                        L’agenzia degli Onesti ti trasforma!
                     </p>
                  </div>
                  <div className="skill">
                     <h3>
                        Creazione advertising personalizzata e gestione campagne pubblicitarie
                     </h3>
                     <p>
                        La nostra expertise ci permette di offrire ogni tipo di creatività pubblicitaria
                        dalle grafiche ai video. Grafiche in stile guerilla marketing conquisteranno
                        i tuoi possibili clienti online e offline, produzioni video di valore avvaloreranno
                        il tuo marchio e daranno la giusta visibilità al tuo saper fare. Gestiamo campagne
                        online e offline coscienti dei parametri da attenzionare, in tempo reale e non,
                        facendoci trovare pronti ad aggiustare il tiro per raggiungere l’obbiettivo.
                     </p>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default About;
