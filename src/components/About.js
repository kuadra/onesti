import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var bio = this.props.data.bio;
         var strategia = this.props.data.strategia;
         var social_media_marketing = this.props.data.social_media_marketing;
         var search_marketing = this.props.data.search_marketing;
         var creazione_siti_web_e_app = this.props.data.creazione_siti_web_e_app;
         var creazione_advertising = this.props.data.creazione_advertising;
      }

      return (
         <section id="about">
            <div className="row">
               <h2>Su di noi</h2>
               <p>{bio}</p>
               <div className="skills-container">
                  <div className="skill">
                     <h3>Ti facciamo il sito</h3>
                     <p>{strategia}</p>
                  </div>
                  <div className="skill">
                     <h3>Social Media Marketing</h3>
                     <p>{social_media_marketing}</p>
                  </div>
                  <div className="skill">
                     <h3>Search Marketing</h3>
                     <p>{search_marketing}</p>
                  </div>
                  <div className="skill">
                     <h3>Creazione Siti Web e App</h3>
                     <p>{creazione_siti_web_e_app}</p>
                  </div>
                  <div className="skill">
                     <h3>Creazione Advertising Personalizzata e Gestione campagne pubblicitarie </h3>
                     <p>{creazione_advertising}</p>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
