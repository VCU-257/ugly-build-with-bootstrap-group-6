export default function SectionOutline({ label, children, className = '' }) {
  return (
    <div
      aria-label={label}
      className={className}
      style={{ backgroundColor: 'black' }}
    >
      {children && <div>{children}</div>}
    </div>
  )
}