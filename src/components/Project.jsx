import { useState, useEffect } from "react";

export default function Project({
  image,
  title,
  date,
  desc,
  tech,
  link,
  linkTitle,
}) {

  const [loadedImage, setLoadedImage] = useState(null);

  // Use useEffect to load the image when the component mounts
  useEffect(() => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        // Once the image is loaded, update the state
        setLoadedImage(img);
      };
  }, [image]);

  return (
    <div className="project-card d-flex flex-column flex-lg-row">
      <div className="image">
        {/* <img className="proj-image" src={img}/> */}
        {loadedImage &&  <img className="proj-image" src={loadedImage.src} alt="Loaded Image" />}
      </div>
      <div className='text p-3'>
        <div className="title fw-bold">{title}</div>
        <div className="date">{date}</div>
        <div className="desc">{desc}</div>
        <div className="tech-parent mb-2">Techs Used: <span className='tech'>{tech}</span></div>
        <div className="link">
          <a href={link}>{linkTitle}</a>
        </div>
      </div>
    </div>
  );
}
