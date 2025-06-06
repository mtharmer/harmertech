export default function Section({ ref, children }) {
  return (
    <section ref={ref} className="pt-32 h-screen items-center flex flex-col">
      {children}
    </section>
  )
}