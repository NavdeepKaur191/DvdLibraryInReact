import Table from "./Table";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { API_BASE_URL} from "./config/config"

export default function MainPage() {  
  const [dvds, setDvds] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  // const [confirmDelete,setConfirmDelete]=useState(false);
  const [dvdId, setDvdId] = useState(0);
  useEffect(() => {
    getDvdsData();
  }, []);

  async function getDvdsData() {
    const response = await fetch(API_BASE_URL + "/dvds");
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
