import Table from "./Table";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { API_BASE_URL } from "./config/config.js";

export default function MainPage() {
  const [dvds, setDvds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [searchResultsEmpty, setsearchResultsEmpty] = useState(false);
  const [dvdId, setDvdId] = useState(0);
  useEffect(() => {
    getDvdsData();
  }, []);

  async function getDvdsData() {
    const response = await fetch(API_BASE_URL + "/dvds");
    const data = await response.json();
    setDvds(data);
  }

  function handleDelete(dvdId) {
    setOpenModal(true);
    setDvdId(dvdId);
  }
  return (
    <>
      {openModal && (
        <DeleteConfirmationModal
          dvdId={dvdId}
          getDvdsData={getDvdsData}
          setOpenModal={setOpenModal}
        />
      )}
      <TopBar setDvds={setDvds} setsearchResultsEmpty={setsearchResultsEmpty} />
      <Table
        dvds={dvds}
        handleDelete={handleDelete}
        searchResultsEmpty={searchResultsEmpty}
      />
    </>
  );
}
