import { Link } from 'react-router-dom';
import SectionOutline from '../SectionOutline.jsx';
import SearchBar from './SearchBar.jsx';
import AddressSelector from './AddressSelector.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import AccountMenu from './AccountMenu.jsx';
import ReturnsOrders from './ReturnsOrders.jsx';
import Cart from './Cart.jsx';
import './TopNavBar.css';

export default function TopNavBar() {
  return (
    <SectionOutline className="rounded-0 border-top-0 border-start-0 border-end-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" id='navBarContainer'>
          {/* Navbar items */}
          <div className="navbar-nav flex-row flex-wrap gap-2 gap-lg-3 align-items-center">
            <Link id='companyLogo' className="navbar-brand" to="/"> Art.com </Link>
            <AddressSelector />
            <SearchBar />
            <LanguageSelector />
            <AccountMenu />
            <ReturnsOrders />
            <Cart />
          </div>
        </div>
      </nav>
    </SectionOutline>
  );
}