import SectionOutline from '../components/SectionOutline.jsx'
import CartPopup from '../components/CartPopup.jsx'
import CheckoutPopup from '../components/CheckoutPopup.jsx'
import ChangeAdress from '../components/ChangeAdress.jsx'

export default function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      <SectionOutline label="Home page" />

      <div>
        <h2 className="h6 text-muted mb-3">Other components (placeholders)</h2>
        <div className="row g-3">
          <div className="col-md-4">
            <CartPopup />
          </div>
          <div className="col-md-4">
            <CheckoutPopup />
          </div>
          <div className="col-md-4">
            <ChangeAdress />
          </div>
        </div>
      </div>
    </div>
  )
}
