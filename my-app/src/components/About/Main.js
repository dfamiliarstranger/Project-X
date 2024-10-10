import React from "react";

// Assets
import Uparrow from "../../assets/icons/up arrow.png"; 
import oneIcon from "../../assets/icons/Number One-Misc icon.png";
import TwoIcon from "../../assets/icons/Number Two-Misc icon.png";
import ThreeIcon from "../../assets/icons/Number Three-Misc icon.png";
import FourIcon from "../../assets/icons/Number Four-Misc icon.png";
import Dividerlight from "../../assets/icons/Dividers (1).png";

//Components
import Footer from "./Footer";

function Main(){
    return(
        <div>
            <h1 className="about-title pt-14 pl-5"> About </h1>

            {/* Header */}
            <section className="pl-5 flex flex-wrap gap-6">
                <div className="flex flex-wrap content-center gap-16 pt-16">
                <h2 className='about-captions pt-2'> Our mission </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content">
                At Project X, we are dedicated to empowering a new generation of tech talents through hands-on, real-world experience. We believe that great innovations stem from collaborative efforts across disciplines. 
                Our mission is simple: to gather budding tech talents and allow them to create viable business solutions through voluntary, passion-driven projects. We aim to help participants sharpen their skills, build scalable applications, 
                and eventually grow their ideas into impactful startups that can generate tech jobs and contribute to solving real-world challenges.
                </p>
            </section>

            {/* Our Vision*/}
            <section className="pl-5 flex flex-wrap gap-6">
                <div className="flex flex-wrap content-center gap-12 pt-28">
                <h2 className='about-captions pt-2'> Our vision </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4">
                We envision a future where tech professionals are not only skilled but equipped with the experience and knowledge necessary to create solutions that matter. 
                Project X aspires to be the launchpad for tech talents to create sustainable, scalable solutions, lead innovative startups, and foster collaborations that continue beyond the program.
                </p>
            </section>

            {/* Values*/}
            <section className="pl-5">
                <div className="flex flex-wrap content-center gap-12 pt-28">
                <h2 className='about-captions pt-2'> Our values </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                {/* Values */}
                <div className='grid pr-4 gap-3 pt-10'>
                   <div> 
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ oneIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>Collaboration</h2>
                      </div>
                      <p className='values-text pt-6'>We believe that teamwork drives innovation.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>

                   <div>
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ TwoIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>Growth</h2>
                      </div>
                      <p className='values-text pt-6'>We’re focused on helping participants grow their skills and confidence.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>

                   <div>
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ ThreeIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>Sustainability</h2>
                      </div>
                      <p className='values-text pt-6'>Our projects are designed to be scalable and sustainable in the real world.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>

                   <div>
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ FourIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>Community</h2>
                      </div>
                      <p className='values-text pt-6'>By joining Project X, you become part of a supportive tech community.</p>
                   </div>

                </div>
            </section>

            {/* The Journey */}
            <section className="pl-5">
                <div className="flex flex-wrap content-center gap-12 pt-28">
                <h2 className='about-captions pt-2 font-bold'> The journey beyond Project X </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4">
                Our goal is not just to help you complete a project during your time at Project X, but to equip you with the tools and experience necessary to scale your ideas beyond the program. 
                Many of our projects are designed with business potential in mind, meaning that you and your team can continue developing and scaling the solution into a real-world startup, creating tech jobs and making an impact.
                </p>
            </section>

            {/* Mentorship */}
            <section className="pl-5">
                <div className="flex flex-wrap content-center gap-12 pt-28">
                <h2 className='about-captions pt-2 font-bold'> Mentorship: Learn from the Best</h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4">
                At Project X, mentorship is a crucial part of the experience. 
                Our mentors are seasoned professionals with years of experience in the tech industry, 
                offering valuable insights and helping you navigate the challenges of building scalable tech solutions.
                </p>

                <div className='grid pr-4 gap-3 pt-10'>
                   <div> 
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ oneIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'>One-on-One Guidance</h2>
                      </div>
                      <p className='values-text pt-6'> Get personalized advice from experts in your field</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>

                   <div>
                      <div className='flex gap-5 flex-wrap pt-2'>
                         <img src={ TwoIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'> Workshops & Webinars</h2>
                      </div>
                      <p className='values-text pt-6'> Attend events to sharpen your skills and stay up to date with industry trends.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>

                   <div>
                      <div className='flex gap-3 flex-wrap pt-2'>
                         <img src={ ThreeIcon } alt='a number one icon'/>
                         <h2 className='values padding-top'> Networking Opportunities</h2>
                      </div>
                      <p className='values-text pt-6'>Connect with industry leaders and like-minded individuals.</p>
                      <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                   </div>
                </div>
            </section>

            <section className="pl-5">
                <div className="flex flex-wrap content-center gap-12 pt-28">
                <h2 className='about-captions pt-2 font-bold'> The process </h2>
                <img src={ Uparrow } alt="up arrow"/>
                </div>

                <p className="about-content pt-4">
                A Step-by-Step Guide to Getting Started with Project X
                </p>

              {/*Steps*/}
              <div className='grid pr-4 gap-3 pt-10'>
                <div>
                  <h6 className="steps">step 1</h6>
                  <h3 className="steps-header">Application</h3>
                  <p className="steps-text pt-5">
                    Complete the application form to let us know your skills, interests,
                    and which role you’d like to take on. We are seeking individuals with a passion for tech
                    and a desire to make a difference, whether you’re a project manager, designer, developer, or content creator.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>

                <div>
                  <h6 className="steps pt-3">step 2</h6>
                  <h3 className="steps-header">Team Formation</h3>
                  <p className="steps-text pt-5">
                  Once accepted, you’ll be placed into a team that consists of various roles such as developers, designers, content creators, and project managers. 
                  Each team will be assigned to work on a project aimed at addressing a specific problem with business potential. Teams will receive mentorship from experienced industry professionals to help guide them.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>

                <div>
                  <h6 className="steps pt-3">step 3</h6>
                  <h3 className="steps-header">Development</h3>
                  <p className="steps-text pt-5">
                  The project kicks off! Teams will work together to ideate, design, develop, and implement solutions to their designated challenge. 
                  You’ll collaborate using tools like Slack, Trello, or Asana for task management and GitHub for code collaboration. 
                  Weekly progress meetings and milestones will ensure everyone is on track.
                    </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 4</h6>
                  <h3 className="steps-header">Mentorshiop and Guidance</h3>
                  <p className="steps-text pt-5">
                  Throughout the development phase, your team will be mentored by industry experts. 
                  These mentors will provide feedback, help solve technical challenges, and offer advice on best practices. 
                  In addition, you’ll have access to workshops and webinars to sharpen your skills in areas like UI/UX design, coding best practices, and project management.
                    </p>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 5</h6>
                  <h3 className="steps-header">Final Project and Presentation</h3>
                  <p className="steps-text pt-5">
                  Upon completing the project, teams will present their final solution to a panel of mentors and industry leaders. 
                  Feedback will be provided, and outstanding projects may receive further support, recognition, or investment opportunities for scaling.
                  </p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 6</h6>
                  <h3 className="steps-header">Post-Program Growth</h3>
                  <p className="steps-text pt-5">
                  Once the program concludes, we encourage teams to continue developing their projects into startups. 
                  Project X is designed with scalability in mind, so participants can take their projects forward, potentially generating tech jobs and contributing real-world solutions to the market.
                  </p>
                </div>
              </div>
            </section>

            <section className="pl-5 pt-20 pb-16">
                <h2 className="whyvolunteer"> Why Volunteer?</h2>
                <div className="flex flex-col flex-wrap gap-14">
                <p className="about-content pt-4">
                By volunteering at Project X, you're not just joining a program—you’re starting a journey of growth and collaboration. 
                You’ll learn by doing, gain insights from experienced mentors, and create something tangible with the potential to scale into a full-fledged business. 
                Best of all, you’ll work alongside peers who are equally passionate about creating meaningful solutions in tech.
                </p>
                <button className="volunteer ml-auto mr-2"> Volunteer </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Main;