import Uparrow from "../assets/icons/up arrow.png";
import React, { useState } from "react";
import IconClosed from "../assets/icons/trailingIcon-closed.png";
import IconOpen from "../assets/icons/trailingIcon-open.png";

function FAQ() {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen((prev) => !prev);
    }

    return(
        <section>
            <div className="flex flex-wrap content-center gap-14 pt-24">
            <h2 className='faq pl-5 pt-3 bold'>Frequently asked questions</h2>
            <img src={ Uparrow } alt="up arrow"/>
            </div>

            <div className="grid pt-10 pl-5 pr-4 gap-3">

                <div className="faq-p flex gap-20" onClick={toggleDropdown}>
                    <h2 className="faq-text">What is Project X?</h2>
                    <img src={isOpen ? IconOpen : IconClosed} alt={isOpen ? "Open" : "Closed"}  className="Iconclosed mt-1"/>

                    {isOpen && (
                       <div className="content">
                         <p>
                            Project X is a volunteer-driven initiative that gathers tech professionals to work on real-world, business-viable projects.
                           The program offers hands-on experience and mentorship to help participants grow their skills while building scalable solutions.
                         </p>
                        </div>
                    )}
                    
                </div>

                <div className="faq-p-big flex gap-3">
                    <h2 className="faq-text">Who can apply to Project X?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1 mr-3"/>
                </div>

                <div className="faq-p flex paid-header">
                    <h2 className="faq-text">Is Project X paid?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1"/>
                </div>

                <div className="faq-p-big flex gap-10">
                    <h2 className="faq-text">What happens after the program?</h2>
                    <img src={ IconClosed } alt="icon closed" className="Iconclosed mt-1 mr-3"/>
                </div>
            </div>
        </section>
    )
}

export default FAQ;