import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";

export const ImageGallery = ({cards, handleClickCard}) => {
  return ( 
    <ImgGallery>
      {cards.map(({id, webformatURL, tags, largeImageURL }) =>(
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClick={()=>handleClickCard(largeImageURL)}
        />
      ))}
    </ImgGallery>
  )
}