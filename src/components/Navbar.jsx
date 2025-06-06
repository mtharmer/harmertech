export default function Navbar({ navItems, scrollToSection }) {
  return (
    <nav className="bg-stone-800 sticky top-0 z-50">
      <div className="mx-auto h-16 justify-center flex items-center">
        <ul className="flex space-x-4">
          {navItems.map((item, index) => (
            <li key={item.title}>
              <button 
                onClick={() => scrollToSection(item.ref)} 
                className="text-stone-200 hover:text-stone-400 cursor-pointer"
              >
                {item.title}
              </button>
              {index < navItems.length - 1 && <span className="text-stone-400 pl-4">|</span>}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
