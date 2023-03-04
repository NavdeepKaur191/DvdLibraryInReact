import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import ValidateInputs from "./utils/ValidateInputs";

export default function EditDvd() {
  const { dvdId } = useParams();
  const navigate = useNavigate();
  const url = "http://dvd-library.us-east-1.elasticbeanstalk.com/";
  const inputStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full";
  const labelStyle =
    "block md:text-right mb-1 md:mb-0 pr-4 text-lg mb-4 font-bold text-green-700";

  const [dvd, setDvd] = useState({});
  const [errors, setErrors] = useState({});
  useEffect(() => {
    getDvdForEditing(dvdId);
  }, []);

  async function getDvdForEditing(dvdId) {
    const response = await fetch(url + "/dvd/" + dvdId);
    const data = await response.json();
    console.log("data " + JSON.stringify(data));
    setDvd(data);
    console.log(dvd);
  }

  function handleChange(e) {
    setDvd((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function editDvd(e) {
    e.preventDefault();
    const errorMessages=ValidateInputs(dvd);  
    if (Object.keys(errorMessages).length === 0) {
      // submit the form data
      await fetch(url + "dvd/" + dvdId, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dvd),
      });
      console.log(e.target.value);
      navigate("/");
    } else {
      setErrors(errorMessages);
      console.log(errors);
    }
    
  }
  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl mb-4 font-bold text-green-700">
          Edit Dvd : {dvd.title}
        </h1>
        <hr />
        {Object.keys(errors).length > 0 && (
        <div          
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2"
          role="alert"
        >
          {Object.values(errors).map((errorMessage) => (
            <div key={errorMessage}><strong> {errorMessage}</strong></div>
          ))}
        </div>
      )}
        <form
          className="w-full max-w-xl mt-4 text-lg"
          onSubmit={(e) => editDvd(e)}
        >
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label className={labelStyle} htmlFor="title">
                Dvd Title
              </label>
            </div>
            <div className="md:w-2/4">
              <input
                className={inputStyle}
                id="title"
                name="title"
                value={dvd.title}
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label className={labelStyle} htmlFor="releaseYear">
                Release Year
              </label>
            </div>
            <div className="md:w-2/4">
              <input
                className={inputStyle}
                id="releaseYear"
                name="releaseYear"
                value={dvd.releaseYear}
                onChange={handleChange}
                type="text"                
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label className={labelStyle} htmlFor="director">
                Director
              </label>
            </div>
            <div className="md:w-2/4">
              <input
                className={inputStyle}
                id="director"
                name="director"
                value={dvd.director}
                type="text"
                onChange={handleChange}                
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label className={labelStyle} htmlFor="rating">
                Rating
              </label>
            </div>
            <div className="md:w-2/4">
              <select
                id="rating"
                name="rating"
                value={dvd.rating}
                onChange={handleChange}
                className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="G">G </option>
                <option value="PG">PG</option>
                <option value="R">R</option>
                <option value="PG-13">PG-13</option>
                <option value="NC-17">NC-17</option>
              </select>
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-2/4">
              <label className={labelStyle} htmlFor="notes">
                Notes
              </label>
            </div>
            <div className="md:w-2/4">
              <textarea
                className={inputStyle}
                id="notes"
                name="notes"
                value={dvd.notes}
                onChange={handleChange}
                type="text"
                rows="5"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-3/5 block md:text-right pl-4">
              <Link to="/">
                <Button displayString="Cancel" />{" "}
              </Link>
            </div>
            <div className="md:w-2/5 block md:text-right pr-4">
              <Button displayString="Save Changes" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
