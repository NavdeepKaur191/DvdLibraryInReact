import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function DvdDetail() {
  const url = "http://dvd-library.us-east-1.elasticbeanstalk.com/";
  const [dvd, setDvd] = useState({});
  const { dvdId } = useParams();
  const labelStyle =
    "block md:text-left mb-1 md:mb-0 pr-4 text-lg mb-4 font-bold text-green-700";
  console.log(dvdId);

  useEffect(() => {
    getDvdDetails();
  }, []);

  async function getDvdDetails() {
    console.log("url : -" + url + "dvd/" + dvdId);
    const response = await fetch(url + "dvd/" + dvdId);
    const data = await response.json();
    setDvd(data);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4 font-bold text-green-700">{dvd.title}</h1>
      <hr />

      <form className="w-full max-w-xl mt-4 text-lg">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className={labelStyle} htmlFor="releaseYear">
              Release Year :
            </label>
          </div>
          <div className="md:w-2/3">{dvd.releaseYear}</div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className={labelStyle} htmlFor="director">
              Director :
            </label>
          </div>
          <div className="md:w-2/3">{dvd.director}</div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className={labelStyle} htmlFor="rating">
              Rating :
            </label>
          </div>
          <div className="md:w-2/3">{dvd.rating}</div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className={labelStyle} htmlFor="notes">
              Notes :
            </label>
          </div>
          <div className="md:w-2/3">{dvd.notes}</div>
        </div>
      </form>
    </div>
  );
}
