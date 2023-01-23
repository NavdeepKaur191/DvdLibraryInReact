import Button from "./Button";

export default function TopBar() {
  return (
    <form>
      <div className="grid grid-rows-1 grid-flow-col gap-2 p-4 mt-4">
        <div><Button displayString="Create Dvd" /></div>
        <div><Button displayString="Search" /></div>
        {/* Search Options */}
        <div>        
        <select
          id="searchOptions"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option defaultValue disabled>
            Search Category
          </option>
          <option value="title">Title</option>
          <option value="releaseYear">Release Year</option>
          <option value="directorName">Director Name</option>
          <option value="rating">Rating</option>
        </select>
        </div>
        <div>
        <input
          type="text"
          id="searchTerm"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Term"
          required
        />
        </div>
      </div>
    </form>
  );
}
