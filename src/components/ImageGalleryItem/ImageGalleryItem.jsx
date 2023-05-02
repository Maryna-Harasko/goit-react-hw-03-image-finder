import React from "react";
import { ImgGalleryItem, Image } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({webformatURL, tags, onClick}) => {
  return(
    <ImgGalleryItem>
      <Image src={webformatURL} alt={tags} onClick={onClick}/>
    </ImgGalleryItem>
  )
}