//css
import "./Projects.scss";

//mui
import Modal from "@material-ui/core/Modal";

export const ProjectModal = ({
  modalOpen,
  setModalOpen,
  modalProject,
  setModalProject,
  modalMode,
  setModalMode,
}) => {
  const handleClose = () => {
    setModalOpen(false);
    setModalProject(undefined);
    setModalMode(undefined);
  };

  //   console.log(open);
  //   console.log(project);
  //   console.log(mode);
  return (
    modalOpen &&
    modalProject &&
    modalMode && (
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className="modal-container"
        //   aria-labelledby="simple-modal-title"
        //   aria-describedby="simple-modal-description"
      >
        <div className="modal-body">
          {modalProject.title} {modalMode}
        </div>
      </Modal>
    )
  );
};
