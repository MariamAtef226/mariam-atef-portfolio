import avatar from '../assets/avatar.png'

export default function About() {
  return (
    <>
      <div className="landing pt-5 pb-3 ps-md-5 pe-md-5 d-flex flex-column-reverse flex-md-row  justify-content-end justify-content-md-between align-items-center">
        
        <div className='typewritten'>
          <h1 className="l1"></h1>
          <h2 className="l2"> </h2>
          <div className="inner-div l3"></div>
          <div className="l4"></div>
        </div>
        
        <div className="avatar-container">
          <img id="avatar" src={avatar} />
        </div>

      </div>
    </>
  );
}
