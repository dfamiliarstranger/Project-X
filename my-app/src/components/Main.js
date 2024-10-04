// Styles
import '../index.css';

// Components
import FAQ from '../components/FAQ';
import Carousel from './Carousel';

// Assets
import Blueimage from '../assets/images/Frame 1618868796.png';
import Yellowimage from '../assets/images/Frame 1618868795.png';
import ExploreIcon from '../assets/icons/Frame 17.png';
import Divider from "../assets/icons/Dividers.png";
import Uparrow from "../assets/icons/up arrow.png";
import Dividerlight from "../assets/icons/Dividers (1).png";
import oneIcon from "../assets/icons/Number One-Misc icon.png";
import TwoIcon from "../assets/icons/Number Two-Misc icon.png";
import ThreeIcon from "../assets/icons/Number Three-Misc icon.png";
import FourIcon from "../assets/icons/Number Four-Misc icon.png";
import FiveIcon from "../assets/icons/Number Five-Misc icon.png";
import SixIcon from "../assets/icons/Number Six-Misc icon.png";
import GotoIcon from "../assets/icons/Misc icon.png";


function Main(){
    return(
        <main className="pt-10  pb-10">
           <section className="flex flex-col justify-center items-center">
              <h1 className="unlock text-center"> Unlock </h1>
              <img src={ Blueimage } alt="a blue banner with a text" className="pt-5"/>
              <h1 className="unlock text-center pt-5"> and build </h1>
              <img src={ Yellowimage } alt="a yellow banner with a text" className="pt-5"/>

              <img src={ ExploreIcon } alt="explore banner" className="pt-5 pl-60"/>
              <p className="intro-paragraph pl-5 pt-5 pr-2"> At Project X, we believe in the power of collaboration to drive innovation, 
                  bring together budding tech talents from various disciplines to work on real-world, 
                  business-viable projects.
              </p>
              <img src={ Divider } alt="divider banner" className="pt-10 pb-10 divider"/>
           </section>

           <div>
             <div className="flex content-center gap-16">
              <h2 className="offer pl-5 pt-3"> What we offer </h2>
              <img src={ Uparrow } alt="up arrow"/>
              </div>
              <p className='pl-5 offer-content pt-7'>
           By joining Project X, you won’t just gain valuable experience. You'll also create impactful solutions to real-life problems and work on applications with the potential to grow into full-fledged startups. 
           We offer a unique opportunity to collaborate, learn, and build alongside like-minded individuals, all while solving problems that matter.
           </p>
           </div>

           <section className='grid pl-5 pr-4 gap-3 pt-10'>
            <div>
                <div className='flex gap-5 flex-wrap'>
                   <img src={ oneIcon } alt='a number one icon'/>
                   <h2 className='numberone padding-top'>Hands-on Experience</h2>
                </div>
                <p className='numberone-text pt-6'>Get involved in real projects that challenge you to apply your skills and expand your expertise.</p>
                <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
            </div>
            <div>
                <div className='flex flex-wrap gap-5 pt-2'>
                    <img src={ TwoIcon } alt='a number two icon'/>
                    <h2 className='numbertwo padding-top'>Collaboration</h2>
                </div>
                <p className='numbertwo-text pt-6'>Work with developers, designers, and managers to bring innovative ideas to life.</p>
                <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
            </div>
            <div>
                <div className='flex flex-wrap gap-5 pt-2'>
                   <img src={ ThreeIcon } alt='a number three icon'/>
                   <h2 className='numberthree padding-top'>Startup Potential</h2>
                </div>
                <p className='numberthree-text pt-6'>Every project is designed to be scalable and business-ready, offering you the chance to continue working on your solution even after the program.</p>
                <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
            </div>
            <div>
                 <div className='flex flex-wrap gap-5 pt-2'>
                    <img src={ FourIcon } alt='a number four icon'/>
                    <h2 className='numberfour padding-top'>Tech Jobs Creation</h2>
                 </div>
                 <p className='numberfour-text pt-6'>Our projects are designed to lead to sustainable tech solutions that create job opportunities for developers and tech professionals.</p>
                 <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
            </div>
            <div>
                <div className='flex flex-wrap gap-5 pt-2'>
                   <img src={ FiveIcon } alt='a number five icon'/>
                   <h2 className='numberfive padding-top'>Mentorship</h2>
                </div>
                <p className="numberfive-text pt-6">Learn from seasoned experts and industry leaders who will guide your progress throughout the program.</p>
                <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
            </div>
            <div>
                <div className="flex flex-wrap gap-5 pt-2">
                    <img src={ SixIcon } alt='a number six icon' className='SixIcon'/>
                    <h2 className='numbersix pt-1 w-80'>No Payment, Pure Passion</h2>
                </div>
                <p className="numbersix-text pt-6">While this program is strictly voluntary, the experience and exposure you'll gain are invaluable.</p>
            </div>
           </section>

           <section>
            <div className="flex flex-wrap content-center gap-16 pt-24">
                <h2 className='roles pl-5 pt-3'>Roles we’re recruiting for</h2>
                <img src={ Uparrow } alt="up arrow"/>
            </div>
            <p className='roles-content pl-5 pt-7'>Whether you're looking to sharpen your existing skills or get hands-on experience working on real projects, Project X offers you a platform to showcase your potential.</p>
           
            <div className='grid pl-5 pr-4 gap-3 pt-10'>
                <div>
                    <div className='flex content-center justify-between pt-2'>
                       <img src={ oneIcon } alt='a number one icon'/>
                       <h2 className='rolesNumbers pt-2'> Project Managers </h2>
                       <img src={ GotoIcon } alt='a go to icon' />
                    </div>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                    <div className='flex content-center justify-between pt-2'>
                       <img src={ TwoIcon } alt='a number two icon'/>
                       <h2 className='rolesNumbers pt-2'> Content Creators </h2>
                       <img src={ GotoIcon } alt='a go to icon' />
                    </div>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                    <div className='flex content-center justify-between pt-2'>
                       <img src={ ThreeIcon } alt='a number three icon'/>
                       <h2 className='rolesNumbers pt-2'> Graphic Designers </h2>
                       <img src={ GotoIcon } alt='a go to icon' />
                    </div>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                    <div className='flex content-center justify-between pt-2 text-center'>
                       <img src={ FourIcon } alt='a number four icon' className='SixIcon'/>
                       <h2 className='rolesNumbers pt-2'> Web Developers (Frontend & Backend) </h2>
                       <img src={ GotoIcon } alt='a go to icon' className='MiscIcon'/>
                    </div>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                    <div className='flex content-center justify-between pt-2'>
                       <img src={ FiveIcon } alt='a number five icon'/>
                       <h2 className='rolesNumbers pt-2'> Mobile Developers </h2>
                       <img src={ GotoIcon } alt='a go to icon' />
                    </div>
                    <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                    <div className='flex content-center justify-between pt-2'>
                       <img src={ SixIcon } alt='a number six icon'/>
                       <h2 className='rolesNumbers pt-2'> DevOps Engineers </h2>
                       <img src={ GotoIcon } alt='a go to icon' />
                    </div>
                </div>
            </div>
           </section>

           <section>
            <div className="flex flex-wrap content-center gap-16 pt-24">
               <h2 className='roles pl-5 pt-3'> How it works </h2>
               <img src={ Uparrow } alt="up arrow"/>
            </div>
            <div className='grid pl-5 pr-4 gap-3 pt-10'>
                <div>
                  <h6 className="steps">step 1</h6>
                  <h3 className="steps-header">Apply to Join</h3>
                  <p className="steps-text pt-5">Submit your application and let us know where your strengths lie.</p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 2</h6>
                  <h3 className="steps-header">Team Up</h3>
                  <p className="steps-text pt-5">Collaborate with other participants in your field to start working on projects designed for startup success.</p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 3</h6>
                  <h3 className="steps-header">Create Solution</h3>
                  <p className="steps-text pt-5">Dive into the development process, create solutions to real-world problems, and produce scalable applications.</p>
                  <img src={ Dividerlight } alt="a light divider" className='pt-6'/>
                </div>
                <div>
                  <h6 className="steps pt-3">step 4</h6>
                  <h3 className="steps-header">Scale Up</h3>
                  <p className="steps-text pt-5">After the program, teams can continue working on their projects, with the potential to grow into successful startups, generating jobs and solutions for the community.</p>
                </div>
            </div>
           </section>

           <div className="pt-24 pl-5">
            <h2 className="readyheader">Ready<br></br> to Start?</h2>
            <div className="flex flex-col flex-wrap gap-14">
            <p className="ready-text pt-8">Project X is your chance to be part of something big, create tech solutions that matter, and collaborate with some of the brightest upcoming talents in the tech space. 
               Join us and start building your future today.
            </p>
            <button className="join ml-auto mr-8">Join Now</button>
            </div>
           </div>

           <FAQ />

           <section>
           <div className="flex flex-wrap content-center gap-14 pt-24">
            <h2 className='latest-header pl-5 pt-3 bold'>Latest updates & insights</h2>
            <img src={ Uparrow } alt="up arrow"/>
            </div>
            <div className='flex flex-col gap-14'>
            <h2 className="latest pl-5 pt-6">Stay updated on the latest happenings at Project X. Read our blogs and news to see what our participants are working on, 
                get tips from our mentors, and learn more about how tech can solve real-world problems.
            </h2>
            <button className="blog-view ml-5"> View blog </button>
            </div>
           </section>

           <Carousel />
        </main>
    )
}

export default Main;