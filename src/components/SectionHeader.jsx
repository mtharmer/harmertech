export default function SectionContent({ title, subtitle, children }) {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="mt-2">
        {subtitle}
      </p>
      {children}
    </>
  );
}
