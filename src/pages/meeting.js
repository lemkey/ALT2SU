import React from "react";
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import logo1 from '../assets/images/logo1.jpg'
import Footer from "../components/Footer";


function Button({children}) {
  return <button>{children}</button>;
}

const Meetings = () => (

  <Layout>

    <img src={logo1} width="1850rem" alt="logo" />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <p className="section-bio">
    <p className="text">
    <div>
    The location of the NYC groups has yet to be determined, we are looking at locations in Manhattan and Queens.
    </div>
    <br></br>
    <br></br>
    <div>
    In the meantime, please look at the offerings from The Wildflower Alliance, who have online meetings that anyone can attend.
    </div>
   
    <br></br>
    <br></br>
    <Link to="https://wildfloweralliance.org/online-support-groups/" target="_blank">
      <Button> Wildflower Alliance Groups Online</Button>
    </Link>
    {Location.pathname =='/meeting' !== <Footer />}
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