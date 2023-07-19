import logo from "../assets/logo.png";
import styles, { layout } from "../style";
import { footerlinks,medias } from "../constants/index";
const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex-col flex justify-start mr-10">
        <a href="#home"><img src={logo} className="w-[145px] h-[72px] object-contain cursor-pointer" /></a>
        <p className={`${styles.paragraph} mt-0 max-w-[310px] text-[13px]`}>
          La nouvelle generation de paiement en ligne,sécurisée,rapide et fiable.
        </p>
      </div>
    </div>

    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-14">
      {footerlinks.map((footerlink,index) => (
        <div
          key={index}
          className="fle flex-col ss:my-0 my-4 min-w-[150px"
        >
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            {footerlink.title}
          </h4>
          <ul className="list-none mt-2">
            {footerlink.links.map((link, index) => (
              <li
                key={link.name}
                className={`font-poppins font-normal text-[16px] leadinng-[24px] text-dimWhite hover:text-cyan-400 cursor-pointer ${
                  index !== footerlink.links.length - 1 ? "md-4" : "mb-0"
                } mt-2`}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[2px] border-t-[#3f3r45]">
      <p className="font-poppins font-normal text-[13px] text-center leading-[27px] text-dimWhite">
        2023 Briky.
        All Rigths Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {
          medias.map((media,i)=>(
            <media.name key={i} size="2rem" style={{color:"white"}} className={`${layout.icon}`}/>
          ))
        }
    </div>  
    </div>
  </section>
);

export default Footer;
