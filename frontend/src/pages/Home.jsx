import SectionOutline from '../components/SectionOutline.jsx'
// import CartPopup from '../components/CartPopup.jsx'
// import CheckoutPopup from '../components/CheckoutPopup.jsx'
// import ChangeAdress from '../components/ChangeAdress.jsx'

export default function Home() {
  return (
    <div className="d-flex flex-column gap-4">
      <SectionOutline label="Home page" />

      <div>
        {/* This is where the ListingCards component will go instead of placeholders */}
        <h2 className="h6 text-muted mb-3">Listing Cards Will Display Art Here</h2>
        <div className="row g-3">
          {/* Replace divs with ListingCards */}
          <div className="col-md-4">
            <div>Placeholder</div>
          </div>
          <div className="col-md-4">
            <div>Placeholder</div>
          </div>
          <div className="col-md-4">
            <div>Placeholder</div>
          </div>
        </div>
      </div>
    </div>
  )
}
