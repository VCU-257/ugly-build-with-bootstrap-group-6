import { Link, NavLink } from 'react-router-dom'
import SectionOutline from './SectionOutline.jsx'

export default function TopNavbar() {
  return (
    <SectionOutline label="TopNavbar" className="rounded-0 border-top-0 border-start-0 border-end-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Art E-commerce
          </Link>
          <div className="navbar-nav flex-row flex-wrap gap-2 gap-lg-3">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/listing">
              Listing
            </NavLink>
            <NavLink className="nav-link" to="/checkout">
              Checkout
            </NavLink>
            <NavLink className="nav-link" to="/order-confirmation">
              Order confirmation
            </NavLink>
          </div>
        </div>
      </nav>
    </SectionOutline>
  )
}
