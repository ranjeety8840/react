import {Bookmark} from 'lucide-react';
import Card from './components/Card';

function App() {

const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    company: "Amazon",
    posted: "5 days ago",
    role: "Senior UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    posted: "2 days ago",
    role: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Bangalore, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPm5lkKSipay2G3uA5kEqC8IcBjS8jEMYnBg&s",
    company: "Meta",
    posted: "1 week ago",
    role: "React Developer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    pay: "$85/hr",
    location: "Hyderabad, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    posted: "3 days ago",
    role: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Delhi, India",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    posted: "10 days ago",
    role: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Noida, India",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/thumbnails/017/396/814/small_2x/netflix-mobile-application-logo-free-png.png",
    company: "Netflix",
    posted: "2 weeks ago",
    role: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    company: "Tesla",
    posted: "6 days ago",
    role: "Frontend Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Pune, India",
  },
  {
    logo: "https://static.vecteezy.com/system/resources/thumbnails/017/396/814/small_2x/netflix-mobile-application-logo-free-png.png",
    company: "Netflix",
    posted: "4 days ago",
    role: "UX Researcher",
    tag1: "Part-Time",
    tag2: "Senior Level",
    pay: "$105/hr",
    location: "Remote",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    company: "IBM",
    posted: "3 weeks ago",
    role: "Backend Developer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "Chennai, India",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPm5lkKSipay2G3uA5kEqC8IcBjS8jEMYnBg&s",
    company: "Meta",
    posted: "8 days ago",
    role: "Full Stack Developer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Gurgaon, India",
  },
];

  return (
    <div className='Parents'>
      {jobs.map((jobs,index)=>(
        <Card key={index} {...jobs}/>
      ))}
    </div>
  );
}

export default App
