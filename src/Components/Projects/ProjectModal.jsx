//css
import "./Projects.scss";

//mui
import Modal from "@material-ui/core/Modal";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export const ProjectModal = ({
  modalOpen,
  setModalOpen,
  modalProject,
  setModalProject,
  modalMode,
  setModalMode,
  modalImage,
  setModalImage,
}) => {
  const handleClose = () => {
    setModalOpen(false);
    setModalProject(undefined);
    setModalMode(undefined);
    setModalImage(undefined);
  };

  const handleLeft = () => {
    let newModalImage = modalImage - 1;
    if (newModalImage < 0) newModalImage = modalProject.imageStack.length - 1;
    setModalImage(newModalImage);
  };

  const handleRight = () => {
    let newModalImage = modalImage + 1;
    if (newModalImage > modalProject.imageStack.length - 1) newModalImage = 0;
    setModalImage(newModalImage);
  };

  return (
    modalOpen &&
    modalProject &&
    modalMode && (
      <Modal open={modalOpen} onClose={handleClose} className="modal-container">
        <Fade in={modalOpen}>
          <div className="modal">
            <div className="modal-header">
              <IconButton
                onClick={handleClose}
                className="modal-close"
                aria-label="close"
                size="small"
                sx={{ marginLeft: "auto" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <div className="modal-body">
              {modalProject.imageStack &&
                modalMode === "image" &&
                typeof modalImage === "number" &&
                modalImage >= 0 && (
                  <>
                    <img
                      className="modal-image"
                      src={modalProject.imageStack[modalImage]}
                    ></img>
                  </>
                )}
            </div>
            <div className="modal-footer">
              <IconButton
                onClick={handleLeft}
                className="modal-close"
                aria-label="close"
                size="small"
                sx={{ marginRight: "8px" }}
              >
                <ArrowLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleRight}
                className="modal-close"
                aria-label="close"
                size="small"
                sx={{ marginLeft: "8px" }}
              >
                <ArrowRightIcon />
              </IconButton>
            </div>
          </div>
        </Fade>
      </Modal>
    )
  );
};
