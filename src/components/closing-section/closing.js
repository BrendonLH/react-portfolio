import "./closing.scss";
import { Link } from "react-scroll";
import {
  faLongArrowAltUp,
  faEnvelopeSquare
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Closing() {
  const userEmail = useSelector((state) => state.user.email);
  const email = `mailto:${userEmail}`;
  const linkedIn = useSelector((state) => state.user.linkedIn);
  const faceBook = useSelector((state) => state.user.faceBook);
  const gitHub = useSelector((state) => state.user.gitHub);

  return (
    <div id="section-three" className="links-closing">
      <div className="links">
        <a href={linkedIn}>
          <img
            alt="LinkedIn Link"
            src="https://th.bing.com/th/id/R42f8397a5e20e9f401d149a24b8c1bf3?rik=2pNi%2b7F0mZdw2A&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2009%2f01%2flinkedin-logo-black_246853.png&ehk=De9VSr%2bjMZ6qN9vHONHTHFl2JBP67%2fAryWto8WP2Iq4%3d&risl=&pid=ImgRaw"
          />
        </a>
      </div>
      <div className="links">
        <a href={gitHub}>
          <img
            alt="Github Link"
            src="https://th.bing.com/th/id/R.9230943f4e960d4311f3c8b9c28d92ab?rik=SCK0sB8EXFwNkA&pid=ImgRaw&r=0"
          />
        </a>
      </div>
      <div className="links">
        <div className="next-section-butt">
          <Link
            activeClass="active"
            to="section-two"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <FontAwesomeIcon icon={faLongArrowAltUp} size="2x" />
          </Link>
        </div>
      </div>
      <div className="links">
        <a href={faceBook}>
          <img
            alt="Facebook Link"
            src="https://osterhout.info/wp-content/uploads/2020/02/facebook-logo-4.png"
          />
        </a>
      </div>
      {
        <div className="links">
          <a href={email}>
            <FontAwesomeIcon
              className="closing-email"
              alt="Email Link"
              icon={faEnvelopeSquare}
              size="6x"
            />
          </a>
        </div>
      }
      <footer>
        <p>
          Created By
          <a href="https://www.linkedin.com/in/brendon-hampton-37132899/">
            {" "}
            Brendon Hampton
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Closing;
