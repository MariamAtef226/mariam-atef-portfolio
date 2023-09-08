
export default function Project({
  image,
  title,
  date,
  desc,
  tech,
  link,
  linkTitle,
}) {
  let url = 'src/assets/'+image;
  console.log(url)
  return (
    <div className="project-card d-flex flex-column flex-lg-row">
      <div className="image">
        <img className="proj-image" src={url}/>
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
