export default function SectionOutline({ label, children, className = '' }) {
  return (
    <div
      className={`border border-2 border-secondary rounded-3 overflow-hidden ${className}`.trim()}
      aria-label={label}
    >
      <div className="px-3 py-2 bg-body-secondary small fw-semibold text-body-secondary border-bottom border-secondary">
        {label}
      </div>
      {children != null ? <div>{children}</div> : null}
    </div>
  )
}
