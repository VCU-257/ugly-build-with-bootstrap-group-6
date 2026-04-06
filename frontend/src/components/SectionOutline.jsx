export default function SectionOutline({ label, children, className = '' }) {
  return (
    <div
      className={`border border-2 border-secondary rounded-3 overflow-hidden ${className}`.trim()}
      aria-label={label}
    >
      {children != null ? <div>{children}</div> : null}
    </div>
  )
}
