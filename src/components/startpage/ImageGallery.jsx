import React from "react";
import ImageGalleryCard from "./ImageGalleryCard";

const ImageGallery = () => {
  return (
    <>
      <ImageGalleryCard
        title="Møbler"
        text="snekkerverksted som leverer Solør design AS skreddersydde
        interiørløsninger av solid kvalitet og god design."
        img="https://images.unsplash.com/photo-1616464916265-68fc457bdc70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1266&q=80"
        img2="https://images.unsplash.com/photo-1616627781431-23b776aad6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1393&q=80"
        color="#2d4159"
      />
      <ImageGalleryCard
        title="Garderobe"
        text="Trenger du mere skapplass, da har vi løsningene for deg."
        img="https://images.unsplash.com/photo-1628843359126-8cd868ba4ce0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        img2="https://images.unsplash.com/photo-1562008088-e8fe0711f7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        color="#2d4159"
      />
      <ImageGalleryCard
        title="Kjøkken"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora inventore corporis nesciunt laudantium. Unde qui quaerat esse culpa, enim, beatae provident sunt quam cum tempora distinctio explicabo aliquid expedita!"
        img="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1568&q=80"
        img2="https://images.unsplash.com/photo-1539922980492-38f6673af8dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        color="#2d4159"
      />
      <ImageGalleryCard
        title="Bad"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora inventore corporis nesciunt laudantium. Unde qui quaerat esse culpa, enim, beatae provident sunt quam cum tempora distinctio explicabo aliquid expedita!"
        img="https://images.unsplash.com/photo-1604709177225-055f99402ea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        img2="https://images.unsplash.com/photo-1552454799-ca5cfdc612c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        color="#2d4159"
      />

      <style jsx>
        {`
          .imgs-container {
            display: grid;
            grid-template-columns: 1fr 35rem;

            grid-gap: 15px;
          }
          .img {
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default ImageGallery;
