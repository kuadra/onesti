import React, { Component } from 'react';
import './examples.css';

const esempi =
  [
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

class Examples extends Component {


  render() {
    return (
      <section id="examples">
        <div className="row">
          <h1>Alcuni Esempi</h1>
          <div id="examples-wrapper">
            {
              esempi.map(p =>
                <div className="examples-item">
                  {p}
                </div>
              )
            }
          </div>
          <p>
            Siamo in grado di offrire una gestione multicanale che ci rende sicuramente i migliori partner per la tua azienda,
            Mettici alla prova e non te ne pentirai.
            Tanti servizi, tante competenze, un approccio umano e soprattutto ONESTO!
            Insieme per il successo!
            </p>
        </div>
      </section>
    )
  }
}

export default Examples;
