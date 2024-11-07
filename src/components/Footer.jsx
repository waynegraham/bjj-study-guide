import { FaHeart } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

// https://clarity-tailwind.preview.uideck.com/

function Footer() {

  return (
    <footer className="relative z-10 py-8 border-t border-gray-300">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap items-center justify-center flex-col gap-4 lg:gap-0 lg:flex-row lg:justify-between">
          <div>
            <p className="text-custom-sm">
              {/* Made with <FaHeart /> */}
            </p>
          </div>

          {/* <div>
            <ul className="flex flex-wrap items-center gap-2.5">
              <li>
                <a
                  href="privacy-policy.html"
                  className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Privacy
                  </span>
                </a>
              </li>
              <li>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <a
                  href="privacy-policy.html"
                  className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Terms
                  </span>
                </a>
              </li>
              <li>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <a
                  href="signup.html"
                  className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Contact
                  </span>
                </a>
              </li>
              <li>
                <span className="flex w-[3px] h-[3px] rounded-full bg-dark-2"></span>
              </li>
              <li>
                <a
                  href="signup.html"
                  className="group leading-none flex text-custom-sm ease-in duration-200 hover:text-dark"
                >
                  <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                    Contribute
                  </span>
                </a>
              </li>
            </ul>
          </div> */}

          <div>
            <div className="flex items-center gap-3">
              <p className="font-medium text-custom-sm text-dark">Follow Me:</p>

              <a
                id="linkedinFooterBtn"
                aria-label="linkedin social link"
                href="https://www.linkedin.com/in/wayne-graham-1700599/"
                className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/waynegraham"
                aria-label="github social link"
                className="flex items-center justify-center w-7.5 h-7.5 rounded-full hover:bg-gray-2 lg:transition-all lg:ease-linear lg:duration-300 hover:text-dark"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
