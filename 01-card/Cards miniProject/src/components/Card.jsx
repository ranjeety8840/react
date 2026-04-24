import {Bookmark} from 'lucide-react'
import '../App.css'
const Card = (jobs) => {
  return (
    <div>
      <div className="cards">
        <div className="top">
          <img
            src={jobs.logo}
            alt=""
          />
          <div>
            Save
            <Bookmark />
          </div>
        </div>
        <div className="middle">
          <h3>
            {jobs.company} <span>{jobs.posted}</span>
          </h3>
          <h2>{jobs.role}</h2>
          <div>
            <h6>{jobs.tag1}</h6>
            <h6>{jobs.tag2}</h6>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{jobs.pay}</h3>
            <span>{jobs.location}</span>
          </div>
          <button>Apply now</button>
        </div>
      </div>
    </div>
  );
}

export default Card
