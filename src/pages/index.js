import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';
import pic4 from '../assets/images/pic04.png';
import pic5 from '../assets/images/pic05.png';
import pic6 from '../assets/images/pic06.png';


import config from '../../config';
import App from './app';

const IndexPage = () => (
  <Layout>
    <App />
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-superpowers"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">What is Alternatives to Suicide?</h2>
            <p>
            Alternatives to Suicide NYC is a facilitated group discussion and peer support network led by people who have lived experience of suicidal thoughts and feelings. The aim of the group is to offer a non-clinical and mutually supportive space to talk about circumstances and feelings that lead to suicidal contemplation or planning. 
            The group does not claim to cure anyone. Instead of trying to "fix" people, Alternatives to Suicide builds a community where everyone can be met with compassion, sincerity, and real connection. 
            </p>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Core Values</h2>
            <p>
              <ol>
              <li>Each person is honored as the expert of their own experiences</li>
              <li>Attendance is voluntary and self-determined, nothing is recorded or tallied</li>
              <li>Ordinary, common language is used and clinical terminology is discouraged</li>
              <li>We are willing to sit with each other when we experience deep distress and explore thoughts and feelings related to that distress</li>
              <li>We avoid suggesting "solutions" to each other and outside intervention is forbidden unless someone is actively in danger</li>
              <li>The freedom to interpret one’s own experiences in any way is central</li>
              <li>The freedom to challenge social norms is present and openly explored</li>
              <li>We are welcome to talk about anything, not just thoughts of suicide</li>
              <li>There is no assumption of illness, including no assumption that suicidal thoughts are connected to mental illness</li>
              <li>The differences between suicide and self-injury or other ways of coping are acknowledged and respected</li>
              <li>We see this group as a way to confront racism, sexism, classism, homophobia, transphobia, and other forms of institutional discrimination</li>
              <li>We respond to each other with interested questions or personal statements about our own experiences that relate or resonate</li>
            </ol>
            </p>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Why do we need Alternatives to Suicide?</h2>
            <p>
            Many people battle silently with thoughts of suicide or plans to commit suicide. The types of support regarding this
            state of mind are insufficient. An Alternatives to Suicide group makes a concentrated effort to shift how we talk and listen to each other. Many people experiencing suicidal plans or thoughts have had painful 
            or coercive experiences when they try to communicate this to others. It is very difficult to get out of a hospital or structured program and feel alone and "uncured".
            This group provides an open forum to express those thoughts and receive empathic feedback within a facilitated 90 minute setting. 
            </p>
          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Alternatives to Suicide in NYC</h2>
          <p>
            Alternatives to Suicide groups have been meeting for over a decade in Western Massachusetts, Connecticut, Pennslyvania, Wisconsin and Washington. There are also several groups in Australia. 
            The facilitators of Alternatives to Suicide NYC attended a three day facilitator training workshop in the summer of 2022.
          </p>
          <section className="features">
            <article>
              <a href="/meeting" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Location</h3>
              <p>
                In person meetings and links to online groups.
              </p>
              <a href="/meeting" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/facilitators" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">About the Facilitators</h3>
              <p>
                Brief introduction to the facilitators of the group.
              </p>
              <a href="/facilitators" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/charter" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Alternatives to Suicide Charter</h3>
              <p>
                This charter was developed by the Wildflower Alliance and is used to guide all Alternatives to Suicide groups.
              </p>
              <a href="/charter" className="special">
                Learn more
              </a>
            </article>
          </section>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;