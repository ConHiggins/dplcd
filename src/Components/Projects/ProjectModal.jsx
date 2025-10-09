//css
import "./Projects.scss";

//react
import { useState, useRef, useEffect } from "react";

//mui
import Modal from "@material-ui/core/Modal";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

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
  const [audioOn, setAudioOn] = useState(true);

  const handleClose = () => {
    setModalOpen(false);
    setModalProject(undefined);
    setModalMode(undefined);
    setModalImage(undefined);
    setAudioOn(true);
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

  const handleMuteUnmute = () => {
    setAudioOn(!audioOn);
  };

  const videoRef = useRef(null);

  useEffect(() => {
    console.log(videoRef.current);
    console.log(audioOn);
  }, [audioOn]);

  return (
    modalOpen &&
    modalProject &&
    modalMode && (
      <>
        {modalProject.imageStack &&
          modalMode === "image" &&
          typeof modalImage === "number" &&
          modalImage >= 0 && (
            <Modal
              open={modalOpen}
              onClose={handleClose}
              className="image-modal-container"
            >
              <Fade in={modalOpen}>
                <div className="image-modal">
                  <div className="image-modal-header">
                    <IconButton
                      onClick={handleClose}
                      aria-label="close"
                      size="small"
                      sx={{ marginLeft: "auto" }}
                    >
                      <CloseIcon />
                    </IconButton>
                  </div>
                  <div className="image-modal-body">
                    <img
                      className="image-modal-image"
                      src={modalProject.imageStack[modalImage]}
                    ></img>
                  </div>
                  <div className="image-modal-footer">
                    <IconButton
                      onClick={handleLeft}
                      aria-label="close"
                      size="small"
                      sx={{ marginRight: "8px" }}
                    >
                      <ArrowLeftIcon />
                    </IconButton>
                    <IconButton
                      onClick={handleRight}
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
          )}
        {modalMode === "video" && modalProject.video && (
          <Modal
            open={modalOpen}
            onClose={handleClose}
            className="video-modal-container"
          >
            <Fade in={modalOpen}>
              <div className="video-modal">
                <div className="video-modal-header">
                  <IconButton
                    onClick={handleMuteUnmute}
                    aria-label="muteUnmute"
                    size="small"
                    sx={{ marginLeft: "auto" }}
                  >
                    {audioOn ? <VolumeUpIcon /> : <VolumeMuteIcon />}
                  </IconButton>
                  <IconButton
                    onClick={handleClose}
                    aria-label="close"
                    size="small"
                  >
                    <CloseIcon />
                  </IconButton>
                </div>
                <div className="video-modal-body">
                  <video
                    // style={videoStyle}
                    ref={videoRef}
                    className="video-modal-video"
                    type="video/mp4"
                    autoPlay={true}
                    id="video"
                    crossOrigin="true"
                    muted={!audioOn}
                    playsInline
                    webkit-playsinline="true"
                    loop
                  >
                    <source src={modalProject.video} />
                  </video>
                </div>
                <div className="video-modal-footer"></div>
              </div>
            </Fade>
          </Modal>
        )}
      </>
    )
  );
};
