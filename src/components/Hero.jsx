import styles from "../style";
import GetStarted from "./GetStarted";
import earth from "../assets/earth.jpg"
const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} ml-1`}>
          <span className="text-white">20%</span> de remise pour{" "}
          <span className="text-white">1 mois</span> Abonnement
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          La nouvelle <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        est maintenant.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Notre equipe d'expert vous guide sur la gestion de votre patrimoine selon vos objectif
        et vos exigences les plus extrement.
        Un charge le plus bas du marché.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10`}>
      <img src={earth} className="relative z-[5] opacity-75 w-[80%] h-[80%] rounded-lg object-cover shadow-lg shadow-slate-700 mx-auto mt-5 max-ss:mx-auto"/>
      <div className="absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient"/>
      <div className="absolute w-[80%] h-[80%] z-[1] bottom-40 rounded-full white__gradient"/>
      <div className="absolute w-[50%] h-[50%] z-[0] rigth-20 bottom-20 blue__gradient"/>
    </div>
    <div className={`ss:hidden ${styles.flexCenter} max-ss:mt-5`}>
      <GetStarted/>
    </div>
  </section>
);

export default Hero;
