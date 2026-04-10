import { Link, NavLink } from 'react-router-dom'
import SectionOutline from './SectionOutline.jsx'
import ChangeAdress from './ChangeAdress.jsx'

export default function TopNavbar() {
  return (
    <SectionOutline label="TopNavbar" className="rounded-0 border-top-0 border-start-0 border-end-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-2">
        <div className="container-fluid d-flex flex-nowrap align-items-center gap-2 gap-md-3">
          <div className="d-flex align-items-center gap-2 gap-md-3 flex-shrink-0 text-start min-w-0">
            <Link className="navbar-brand mb-0 text-truncate" to="/">
              Art E-commerce
            </Link>
            <div className="flex-shrink-0">
              <ChangeAdress />
            </div>
          </div>

          <div className="flex-grow-1 flex-shrink-1 min-w-0 d-flex justify-content-center align-items-center px-2">
            <div className="input-group input-group-sm" style={{ maxWidth: '600px', width: '100%' }}>
              <input
                type="search"
                className="form-control"
                readOnly
              />
              <Link
                to="/"
                className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-search" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="d-flex align-items-center flex-nowrap gap-1 gap-md-2 flex-shrink-0">
            <NavLink className="nav-link py-2 px-2 d-flex align-items-center" to="/login" aria-label="Profile">
              <i className="bi bi-person-circle fs-5" aria-hidden="true" />
            </NavLink>
            <NavLink className="nav-link text-nowrap" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link py-2 px-2 d-flex align-items-center" to="/checkout" aria-label="Cart">
              <i className="bi bi-cart3 fs-5" aria-hidden="true" />
            </NavLink>
            <NavLink className="nav-link text-nowrap" to="/checkout">
              Checkout
            </NavLink>
            <NavLink className="nav-link" to="/cart">
              Cart
            </NavLink>
          </div>
        </div>
      </nav>
    </SectionOutline>
  )
}
