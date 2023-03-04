import React from "react";
import { API_BASE_URL} from "./config/config"

export default function DeleteConfirmationModal({
  setOpenModal,
  dvdId,
  getDvdsData,
}) {  
  async function deleteDvd() {
    await fetch(API_BASE_URL + "/dvd/" + dvdId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getDvdsData();
    setOpenModal(false);
  }

  const cancelDeleteDvd = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        {/* <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"                    
                    onClick={() => {setOpenModal(false)}}
                ></div> */}
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg border">
            <div className="mt-3 sm:flex">
              <div className="mt-2 text-center sm:ml-4 sm:text-left">
                <h4 className="text-lg font-medium text-gray-800">
                  Delete Dvd
                </h4>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                  Are you sure you want to delete this DVD from your collection?
                </p>
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white bg-green-700 rounded-md outline-none ring-offset-2 ring-green-600 focus:ring-2"
                    onClick={deleteDvd}
                  >
                    Delete
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-green-600 focus:ring-2"
                    onClick={cancelDeleteDvd}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
