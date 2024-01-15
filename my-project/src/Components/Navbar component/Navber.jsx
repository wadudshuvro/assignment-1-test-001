// src/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-transparent fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4">
      <div className="logo">
        {/* Add your Logo here */}
        <img src="/src/assets/lws-logo-en.svg" alt="Logo" />
      </div>
      <div className="nav-items">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get admission
        </button>
      </div>
    </nav>
  );
}
