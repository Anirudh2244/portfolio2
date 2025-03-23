import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="flex  justify-between items-center h-full overflow-hidden">
        <div className="flex">
          <p className="text-theme-green border-r-1 py-3 px-5 border-r-gray-500">
            find me in:
          </p>
          <a
            href="https://www.linkedin.com/in/anirudh--dubey/"
            target="_blank"
            className="text-theme-green border-r-1 py-3 px-5 border-r-gray-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>

        <a
          href="https://github.com/Anirudh2244"
          target="_blank"
          className="text-theme-green border-l-1 py-3 px-5 border-r-gray-500"
        >
          @Anirudh2244 <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </>
  );
}

export default Footer;
