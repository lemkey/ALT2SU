import React from "react";
import Layout from '../components/Layout';

import logo2 from '../assets/images/logo2.png';
import pic12 from '../assets/images/pic12.png';
import pic07 from '../assets/images/pic07.png';
import Viola from '../assets/images/Viola_Celestial.jpg';

const Facilitators = () => (

  <Layout>
    <>
    <img src={logo2} className="image" alt="logo" />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p className="section-bio">
    <p className="text">
    <img src={Viola} className="bio-image" alt="Viola flowers"/>
    <br></br>
    <br></br>
    <br></br>
    <h1>NEESA SUNAR:</h1>
    <br></br>
    Neesa Sunar is a telehealth therapist, abolitionist social worker, and peer support advocate. She writes essays and poetry, and has been published in Mad In America, 
    Psyche, The Mighty, and many other publications. She is also a classical violist, violin/viola educator, and singer/songwriter with guitar.
    </p>
    </p>

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <p className="section-bio">
    <p className="text">
    <img className="bio-image" src={pic07} width="300rem" alt="polaroid" />
    <br></br>
    <br></br>
    <br></br>
    <h1>ALEXANDER BORKOWSKI:</h1>
    <br></br>

    Alexander Borkowski is a former Peace Corps Volunteer in Peru, who worked with homeless and incarcerated youth as a mentor, coach and teacher. 
    He was a sports coach with Americorps in Los Angeles, and worked for the Public Defenders Office in New Orleans.
    </p>
    </p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <p className="section-bio">
    <p className="text">
    <img src={pic12} className="bio-image" alt="abandoned stone building"/>
    <br></br>
    <br></br>
    <br></br>
    <h1>ERIN LEMKEY:</h1>
    <br></br>
  
    Erin Lemkey has lived experience with suicidality and mania and has helped build community spaces with other mutual aid networks 
    such as the Icarus Project. She has worked as a video editor and as a counselor in a residential house. She  thought she knew how to make a 
    simple website, and then it took a month to make this one! 
    </p>
    </p>
   </>
    </Layout>
)





export default Facilitators;