import logo from '../images/logo.svg';
import SearchDrawerBtn from './SearchDrawerBtn';

function Header() {
  return (
    <header className="md:py-8 py-4 sm:flex sm:items-center sm:justify-between">
      <div className="logo">
        <img src={logo} alt="Windbnb" />
      </div>
      <SearchDrawerBtn />
    </header>
  );
}

export default Header;
