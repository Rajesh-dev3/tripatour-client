import { IoIosStar } from "react-icons/io";
import { SiNike } from "react-icons/si";
import { Link } from "react-router-dom";
const TopBanner = () => {
  return (
    <div className="top-banner">
    <div className="center-box">
      <p>Wild Excursions</p>
      <h1>
        Experience dubai <br />
        Safari wonders!
      </h1>
      <Link to={"/listing"}>
      <button>Explore Now</button>
      </Link>
    </div>
    <div className="top-banner-bottom-rectangle">
      <ul>
        <li>
          <span>
            <IoIosStar />
          </span>
          4.6 Rated
        </li>
        <li>
          <span>
            <SiNike />
          </span>
          100% Customised trips
        </li>
        <li>
          <span>
            <SiNike />
          </span>
          100% Customised trips
        </li>
        <li>
          <span>
            <SiNike />
          </span>
          24x7 concierge
        </li>
      </ul>
    </div>
  </div>
  )
}

export default TopBanner