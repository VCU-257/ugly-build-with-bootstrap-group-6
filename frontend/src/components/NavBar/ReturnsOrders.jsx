export default function ReturnsOrders() {
  return (
    <div className="d-flex flex-column px-2 py-1 cursor-pointer text-white" style={{ minWidth: 'fit-content' }}>
      {/* Top small text */}
      <span style={{ fontSize: '12px', color: 'black', lineHeight: '14px' }}>
        Returns
      </span>
      
      {/* Bottom bold text */}
      <span className="fw-bold" style={{ color: 'black', fontSize: '14px', lineHeight: '15px' }}>
        & Orders
      </span>
    </div>
  );
}