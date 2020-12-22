import React, { Component } from 'react';

class About extends Component {
   render() {

      if (this.props.data) {
         var name = this.props.data.name;
         var profilepic = "images/" + this.props.data.image;
         var bio = this.props.data.bio;
         var skill1 = this.props.data.skill1;
         var skill2 = this.props.data.skill2;
         var skill3 = this.props.data.skill3;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var email = this.props.data.email;
         var resumeDownload = this.props.data.resumedownload;
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
