import "./imageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    );
  });

  return (
    <div className="images">
      <div className="image-list">{renderedImages}</div>
    </div>
  );
}

export default ImageList;
