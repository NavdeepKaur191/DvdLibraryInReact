import Table from "./Table";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

export default function MainPage() {
  const url = "http://dvd-library.us-east-1.elasticbeanstalk.com/";
  const [dvds, setDvds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // const [confirmDelete,setConfirmDelete]=useState(false);
  const [dvdId, setDvdId] = useState(0);
  useEffect(() => {
    getDvdsData();
  }, []);

  async function getDvdsData() {
    const response = await fetch(url + "dvds");
    const data = await response.json();
    setDvds(data);
  }

  async function handleDelete(dvdId) {
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
      <TopBar />
      <Table dvds={dvds} handleDelete={handleDelete} />
    </>
  );
}
