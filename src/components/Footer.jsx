import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#814243] flex justify-center items-center gap-8 py-6">
      <a 
        href="https://www.linkedin.com/in/deyvid-cruz-b03318214/" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-5xl hover:scale-125 transition"
      >
        <FaLinkedin />
      </a>

      <a 
        href="https://github.com/vexwe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-5xl hover:scale-125 transition"
      >
        <FaGithub />
      </a>
    </footer>
  );
}

export default Footer;
