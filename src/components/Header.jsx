import logo from '../assets/hami-logo.png';
import HeroLogo from '../assets/hero-bg.png';
function Header(){
    
    return(
        <>
            <nav className='flex justify-between items-center py-2 shadow-sm shadow-primaryYellow w-full h-full'>
                <div className=' flex gap-2 items-center text-center'>
                    <img src={logo} alt="Hami Skills Logo" className='w-[50px] h-[50px] block' />
                    <h1 className='p-2 font-heading'>Hami MiniMarket</h1>
                    
                </div>

                <ul className='list-none flex justify-center font-body'>
                    <li className='mx-4 p-2 hover:bg-primaryBlue hover:rounded-md hover:text-white'><a href="#">Home</a></li>
                    <li className='mx-4 p-2 hover:bg-primaryBlue hover:rounded-md hover:text-white'><a href="#">Products</a></li>
                    <li className='mx-4 p-2 hover:bg-primaryBlue hover:rounded-md hover:text-white'><a href="#">About</a></li>
                    <li className='mx-4 p-2 hover:bg-primaryBlue hover:rounded-md hover:text-white'><a href="#">Contacts</a></li>
                </ul>
            </nav>
        </>
    )


}

export default Header