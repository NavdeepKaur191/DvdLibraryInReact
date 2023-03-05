import { Link } from "react-router-dom";

export default function Table({ dvds, handleDelete, searchResultsEmpty }) {
  return (
    <>
      {searchResultsEmpty ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xl text-green-700 bg-gray-50 dark:bg-green-700 dark:text-green-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Release Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Director
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="text-lg text-center ">
              <tr className="bg-white border-b dark:bg-green-800 dark:border-green-700">
                <td colSpan={4}>No Records Found</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xl text-green-700 bg-gray-50 dark:bg-green-700 dark:text-green-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Release Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Director
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {dvds.map((dvd, index) => {
                const dvdId = dvd.id;
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-green-800 dark:border-green-700"
                  >
                    <td className="px-6 py-4">
                      <Link to={"/dvd/" + dvdId}>{dvd.title}</Link>
                    </td>
                    <td className="px-6 py-4">{dvd.releaseYear}</td>
                    <td className="px-6 py-4">{dvd.director}</td>
                    <td className="px-6 py-4">{dvd.rating}</td>
                    <td className="px-6 py-4">
                      <Link to={`editDvd/${dvdId}`}>Edit </Link> |
                      <button onClick={() => handleDelete(dvd.id)}>
                        {" "}
                        Delete{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
