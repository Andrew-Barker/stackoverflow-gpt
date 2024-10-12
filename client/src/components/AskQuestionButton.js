import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { postQuestion } from "../services/ApiService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Define custom styles for the modal
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "900px",
    minWidth: "600px",
    padding: "20px",
    borderRadius: "10px",
  },
};

Modal.setAppElement("#root");

const AskQuestionButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await postQuestion({ question });

      if (response && response._id) {
        toast.success("Question successfully posted!"); // Success toast
        setLoading(false);

        closeModal();

        // Redirect to the question page after successful post
        navigate(`/questions/${response._id}`);
      } else {
        setLoading(false);
        toast.error("Failed to retrieve question ID."); // In case question ID is missing in response
      }
    } catch (error) {
      setLoading(false);
      toast.error("Error posting question."); // Error toast
      console.error("Error posting question:", error);
    }
  };

  useEffect(() => {
    if (!modalIsOpen) {
      setQuestion("");
    }
  }, [modalIsOpen]);

  return (
    <>
      <button onClick={openModal} className="bg-secondary text-white text-sm px-4 py-2 rounded-md hover:bg-secondary-dark">
        Ask Question
      </button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customModalStyles} contentLabel="Ask a Question">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl">Ask a Question</h2>
          <button onClick={closeModal} className="text-lg font-bold">
            ✕
          </button>
        </div>

        <div>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full h-40 p-2 border border-gray-300 rounded"
            placeholder="Enter your question here..."
            disabled={loading} // Disable text area while loading
          />

          <div className="flex justify-end mt-4 space-x-2">
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                {/* You can replace this with any loading spinner */}
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-6 w-6"></div>
                <span>Posting your question...</span>
              </div>
            ) : (
              <>
                <button onClick={handleSubmit} className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary-dark">
                  Submit
                </button>
                <button onClick={closeModal} className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200">
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      </Modal>

      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}
    </>
  );
};

export default AskQuestionButton;
