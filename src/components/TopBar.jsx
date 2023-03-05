import Button from "./Button";
import { Link } from "react-router-dom";
import getSearchUrl from "./utils/getSearchUrl.js";
import { useState } from "react";

export default function TopBar({ setDvds, setsearchResultsEmpty }) {
  const [searchDetails, setSearchDetails] = useState({
    searchBy: "",
    searchTerm: "",
  });
  // useEffect(()=>{
  //   getSearchResult();
  //   },[]);

  async function getSearchResult() {
    const searchUrl = getSearchUrl(searchDetails);
    const response = await fetch(searchUrl);
    const data = await response.json();
    if (data.length > 0) {
      setDvds(data);
    } else {
      setDvds([]);
      setsearchResultsEmpty(true);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchDetails((prevSearchDetails) => ({
      ...prevSearchDetails,
      [name]: value,
    }));
  }
  function handleSearch(e) {
    e.preventDefault();
    getSearchResult();
  }

  return (
    <div className="grid grid-rows-1 grid-flow-col gap-2 p-2 mt-4">
      <div>
        <Link to="/createDvd">
          <Button displayString="Create Dvd" />
        </Link>
      </div>

      <form onSubmit={(e) => handleSearch(e)}>
        <div className="grid grid-rows-1 grid-flow-col gap-2">
          <div>
            <Button displayString="Search" />
          </div>
          {/* Search Options */}
          <div>
            <select
              value={searchDetails.searchBy}
              name="searchBy"
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Search Category</option>
              <option value="title">Title</option>
              <option value="releaseYear">Release Year</option>
              <option value="directorName">Director Name</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              name="searchTerm"
              value={searchDetails.searchTerm}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Term"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}
