"use client";

import { useState } from "react";
import ModalImage from "../ModalImage/ModalImage";

export default function ImageGallery({ images }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(null);

  const handleImageClick = (url) => {
    setIsModalOpen(true);
    setActiveImageUrl(url);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ModalImage
        show={isModalOpen}
        data={activeImageUrl}
        handleClose={handleCloseModal}
      />
      <div className="flex overflow-x-auto space-x-4 p-4">
        {images &&
          images.slice(0, 6).map((image) => {
            return (
              <div key={image.url}>
                <button
                  aria-label="expand image button"
                  onClick={() => {
                    handleImageClick(image.url);
                  }}
                >
                  <img
                    className="h-auto max-w-full rounded-lg max-h-60"
                    src={image.url}
                    alt=""
                  />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
