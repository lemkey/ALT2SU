import React from "react";
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import logo2 from '../assets/images/logo2.png';
import ComingSoon from '../assets/images/ComingSoon.jpg';
import { MDBBtn } from 'mdb-react-ui-kit';


// function Button({children}) {
//   return <button>{children}</button>;
// }

const Meetings = () => (

  <Layout>

    <img src={logo2} className="image" alt="logo" />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p className="section-bio">
    <p className="text">
    <div>
    <img src={ComingSoon} alt="meeting update" />
    <br></br>
    <br></br>
    <h2><u><a href="https://us04web.zoom.us/j/74243703535?pwd=fEVcWIgX9NVJpYjRtCVLl4eJbvSSV5.1">Z00M LINK HERE!</a></u></h2>
    <br></br>
    <h2>or HERE: https://us04web.zoom.us/j/74243703535?pwd=fEVcWIgX9NVJpYjRtCVLl4eJbvSSV5.1</h2>
    </div>
    <br></br>
    <br></br>
    <div>
    Please also see the offerings from The Wildflower Alliance, who frequently have online meetings. Everyone is welcome.
    </div>
   
    <br></br>
    <br></br>
    <Link to="https://wildfloweralliance.org/online-support-groups/" target="_blank">
      <MDBBtn size='lg' color='danger'> Wildflower Alliance Groups Online</MDBBtn>
    </Link>
    </p>
    </p>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  
    </Layout>
)





export default Meetings;