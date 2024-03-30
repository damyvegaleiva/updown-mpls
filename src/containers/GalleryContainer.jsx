import GalleryImageList from "../components/GalleryImageList";

const GalleryContainer = () => {
  return (
    <main id="gallery">
      <h1 className="headline-pages">Gallery</h1>

      <section className="gallery-container">
        <GalleryImageList />
      </section>
    </main>
  );
};

export default GalleryContainer;
