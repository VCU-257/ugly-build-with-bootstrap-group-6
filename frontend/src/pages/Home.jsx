import SectionOutline from '../components/SectionOutline.jsx'
import ListingCard from '../components/ListingCard.jsx'
import CartPopup from '../components/CartPopup.jsx'
import CheckoutPopup from '../components/CheckoutPopup.jsx'
import ChangeAdress from '../components/ChangeAdress.jsx'

const PLACEHOLDER_CARD_COUNT = 6

export default function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      <SectionOutline label="Home page" />

      <section aria-label="Listing placeholders">
        <h2>Listings</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {Array.from({ length: PLACEHOLDER_CARD_COUNT }, (_, i) => (
            <ListingCard key={i} />
          ))}
        </div>
      </section>

      <div>
        <h2>Other components (placeholders)</h2>
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
