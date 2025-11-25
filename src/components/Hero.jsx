import HeroImg from  '../assets/hero-bg.png';

function Hero() {
    return(
        <>
        <hero className = 'flex justify-between py-4'>
                <div className='ml-6'>
                    <h2 className='font-heading'>Fresh, Trusted & Local</h2>
                    <p >Welcome to <span>Hami Minimarket</span> your community <br />source for the best local products.</p>
                    <button className=' mr-2 rounded-lg p-2 bg-primaryYellow shadow-sm shadow-black'>Order Now</button>
                    <button className='rounded-lg p-2 bg-softBlue shadow-sm shadow-black'>Visit US</button>
                </div>
                <div>
                    <img src={HeroImg} alt="Fruits in basket" className='w-[500px]' />
                </div>
            </hero>
        </>
    )
}   
export default Hero