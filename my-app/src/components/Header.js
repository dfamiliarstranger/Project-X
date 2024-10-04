import ProjectX from '../assets/images/Frame 8.png';
import Dropdown from "../components/Dropdown";

function Header(){
  // function myFunction() {
  //   document.getElementById("myDropdown").classList.toggle("show");
  // }
  
  // // Close the dropdown if the user clicks outside of it
  // window.onclick = function(event) {
  //   if (!event.target.matches('.dropbtn')) {
  //     var dropdowns = document.getElementsByClassName("dropdown-content");
  //     var i;
  //     for (i = 0; i < dropdowns.length; i++) {
  //       var openDropdown = dropdowns[i];
  //       if (openDropdown.classList.contains('show')) {
  //         openDropdown.classList.remove('show');
  //       }
  //     }
  //   }
  // }

   return(
        <header className="flex justify-between content-center w-full p-7 pr-4 ">
            <img src={ProjectX} alt="logo" id="projectx" />
            <div className="dropdown">
              <Dropdown />
            </div>
        </header>
    )
}

export default Header;