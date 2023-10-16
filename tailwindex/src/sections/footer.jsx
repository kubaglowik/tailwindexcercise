import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constance";

const footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrant text-white-400 sm:max-w-sm">
            Get shoes ready for the new teram at nearest nike store. find your
            prefect sizze in store. Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icons) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-ful">
                <img src={icons.src} alt={icons.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-betweenlg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((Section)=>(
            <div key={Section}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6">{Section.title}</h4>
              <ul>
                {Section.links.map((link)=>(
                  <li className="mt-3 text-white-400 font-montserrat text-base leadnig-normal hover:text-slate-gray">
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default footer;
