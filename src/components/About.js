import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var bio = this.props.data.bio;
         var skill1 = this.props.data.skill1;
         var skill2 = this.props.data.skill2;
         var skill3 = this.props.data.skill3;
      }

      return (
         <section id="about">
            <div className="row">
               <h2>Su di noi</h2>
               <p>{bio}</p>
               <div className="skills-container">
                  <div className="skill">
                     <h3>Ti facciamo il sito</h3>
                     <p>{skill1}</p>
                  </div>
                  <div className="skill">
                     <h3>Ti facciamo Istagram</h3>
                     <p>{skill2}</p>
                  </div>
                  <div className="skill">
                     <h3>Ti facciamo fa i soldi</h3>
                     <p>{skill3}</p>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
