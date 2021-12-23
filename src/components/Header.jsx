import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import SearchDrawerBtn from './SearchDrawerBtn';

function Header() {
  return (
    <header className="md:py-8 py-4 sm:flex sm:items-center sm:justify-between">
      <div className="logo mb-10 md:mb-0">
        <img src={logo} alt="Windbnb" />
      </div>
      <SearchDrawerBtn />
    </header>
  );
}

Header.propTypes = {
  openModal: PropTypes.func
};

export default Header;
