// src/components/Searchbar.js
export default function Searchbar() {
  return (
    <div className="searchbar my-8 mx-auto w-full max-w-md">
      <input
        type="text"
        className="w-full border-2 border-gray-200 p-4 rounded-lg"
        placeholder="Search..."
      />
    </div>
  );
}
