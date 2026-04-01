const COLS = Array.from({ length: 12 }, (_, i) => i)

const horizontalGridStyle = {
  // Full-width horizontal lines every 1rem (Bootstrap default spacer)
  backgroundImage: [
    'repeating-linear-gradient(to bottom, transparent 0 calc(1rem - 1px), rgba(var(--bs-primary-rgb), 0.14) calc(1rem - 1px) 1rem)',
  ].join(', '),
}

export default function BootstrapGridOverlay() {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 overflow-hidden"
      style={{ zIndex: 9998, pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <div className="position-absolute top-0 start-0 w-100 h-100" style={horizontalGridStyle} />

      //puts vertical grid lines
      <div className="container-fluid px-0 h-100 position-relative">
        <div className="row g-0 h-100 mx-0">
          {COLS.map((i) => (
            <div
              key={i}
              className={`col-1 h-100 border-start border-primary border-opacity-25${
                i === 11 ? ' border-end' : ''
              }`}
              style={{
                backgroundColor: 'rgba(var(--bs-primary-rgb), 0.06)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
