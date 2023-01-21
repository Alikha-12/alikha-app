import { BsSpotify } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
function Social() {
  return (
    <footer className="bg-[#B7B78A]">
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
        <a
          href="#"
          className="text-2xl font-medium text-white transition-colors duration-300  hover:text-[#658864]"
        >
          Alikha
        </a>
        <p className="text-sm text-white">
          © Copyright 2023. All Rights Reserved.
        </p>
        <div className="flex -mx-2">
          <a
            href="https://www.reddit.com"
            className="mx-2 text-white transition-colors duration-300 hover:text-[#658864] "
            aria-label="Reddit"
          >
            <BsSpotify className="w-4 h-5 fill-current" />
          </a>
          <a
            href="#"
            className="mx-2 text-white transition-colors duration-300 hover:text-[#658864]"
            aria-label="Facebook"
          >
            <AiFillInstagram className="h-5 w-5 fill-current" />
          </a>
          <a
            href="https://github.com/Alyostein"
            className="mx-2 text-white transition-colors duration-300  hover:text-[#658864] "
            aria-label="Github"
          >
            <BsGithub className="h-5 w-4 fill-current" />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Social;
