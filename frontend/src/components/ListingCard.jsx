
import { Link } from 'react-router-dom';
export default function ListingCard() {
  return (
    <div className="col">
      <div className="card h-100 ">
        <Link to="/listing">
          <div className="ratio ratio-4x3 border-bottom">
            <img src="https://picsum.photos/id/252/200/300" alt="Placeholder image" className="object-fit-cover"></img>
          </div>
        </Link>
        <div className="card-body">
          <h3 className="card-title">Placeholder name</h3>
          <p className="card-text">Placeholder description</p>
        </div>
      </div>
    </div>
  )
}
