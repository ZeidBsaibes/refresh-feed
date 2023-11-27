"use client";

import { useEffect, useState } from "react";
import ModalImage from "../ModalImage/ModalImage";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageGallery({ locationGoogleId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(null);
  const [googlePlaceImages, setGooglePlaceImages] = useState(null);

  const handleImageClick = (url) => {
    setIsModalOpen(true);
    setActiveImageUrl(url);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getAndSetImageReferences = async (id) => {
    const response = await axios.get(`/api/get-google-images/${id}`);
    console.log(response.data.length);

    setGooglePlaceImages(response.data);
  };

  useEffect(() => {
    getAndSetImageReferences(locationGoogleId);
  }, [locationGoogleId]);

  return (
    <>
      <ModalImage
        show={isModalOpen}
        data={activeImageUrl}
        handleClose={handleCloseModal}
      />
      <div className="flex overflow-x-auto space-x-4 p-4">
        <Carousel
          autoPlay={true}
          emulateTouch={true}
          showThumbs={false}
          renderThumbs={false}
          showStatus={false}
          onClickItem={() => {
            console.log("clicked", item);
          }}
        >
          {googlePlaceImages &&
            googlePlaceImages
              .slice(0, googlePlaceImages.length)
              .map((image) => {
                const source = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=600&photo_reference=${image.photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`;

                return (
                  <div key={image.photo_reference}>
                    <button
                      aria-label="expand image button"
                      onClick={() => {
                        handleImageClick(source);
                      }}
                    >
                      <img
                        className="h-auto max-w-full rounded-lg max-h-60"
                        src={source}
                        alt="image"
                      />
                    </button>
                  </div>
                );
              })}
        </Carousel>
      </div>
    </>
  );
}
