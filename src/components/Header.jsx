import logo from '../assets/hami-logo.png';
import HeroLogo from '../assets/hero-bg.png';
import {useState} from 'react';
import Menu from '../assets/menu.png';
import Close from '../assets/close.png';


function Header(){

    const [menu, setMenu] = useState(false)

    function menuToggle(){
        return setMenu(prevMenu => !prevMenu);
    }
    
    
    return(
        <>
            <nav className='sticky flex justify-between items-center py-2 shadow-sm shadow-primaryYellow w-full'>
                <div className=' flex gap-2 items-center text-center'>
                    <img src={logo} alt="Hami Skills Logo" className='w-[50px] h-[50px] block' />
                    <h1 className='p-2 font-heading'>Hami MiniMarket</h1>
                    
                </div>

                <ul className='list-none justify-center font-body hidden md:flex'>
                    <li className='mx-4 p-2 hover:text-primaryYellow'><a href="#">Home</a></li>
                    <li className='mx-4 p-2 hover:text-primaryYellow' ><a href="#">Products</a></li>
                    <li className='mx-4 p-2 hover:text-primaryYellow' ><a href="#">About</a></li>
                    <li className='mx-4 p-2 hover:text-primaryYellow' ><a href="#">Contacts</a></li>
                </ul>
                <div>
                    <img onClick={menuToggle} src={menu? Close : Menu} alt="Menu" className='w-8 h-8 mr-4 md:hidden' />
                </div>
            </nav>

            {menu&& (
                <div className=' mt-2 fixed flex-col justify-start items-center gap-4 flex md:hidden backdrop-blur-lg w-full' >
                
                 <ul className='list-none justify-center font-body py-1 gap-2 '>
                    <li className='mx-4 p-1 text-white active:text-primaryYellow hover:text-primaryYellow'><a href="#">Home</a></li>
                    <li className='mx-4 p-1 text-white active:text-primaryYellow hover:text-primaryYellow'><a href="#">Products</a></li>
                    <li className='mx-4 p-1 text-white active:text-primaryYellow hover:text-primaryYellow'><a href="#">About</a></li>
                    <li className='mx-4 p-1 text-white active:text-primaryYellow hover:text-primaryYellow'><a href="#">Contacts</a></li>
                </ul> 

            </div>
            )}
          
        </>
    )


}

export default Header