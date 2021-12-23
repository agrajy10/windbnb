import logo from '../images/logo.svg' 

function Header() {
    return (
        <header className='md:py-8 py-4'>
            <div className="logo">
                <img src={logo} alt='Windbnb' />
            </div>
        </header>
    )
}

export default Header
