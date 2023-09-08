export default function ExperienceCard({title, institution, date, link, linkMessage,type}){
    return(
        <div className="exp-card col-10 col-md-3 p-4 mb-4">
            <div className='title'>
                {title}
            </div>
            <div className="type">
                {type}
            </div>
            <div className='place'>
                {institution}
            </div>
            <div className="date">
            {date}
            </div>
            <div className="link">
                <a href={link} target="_blank">{linkMessage}</a>
            </div>
        </div>
    )
}