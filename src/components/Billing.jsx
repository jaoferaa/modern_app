import styles, { layout } from "../style";
import wall from "../assets/Wall.6.jpg";
const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={wall} className="w-[100%] h-[100%] relative rounded-md shadow-lg shadow-slate-700 z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Controler facilement <br className="sm:block hidden" /> vos charges & vos
        benefice.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        porro, quam mollitia illum fuga quisquam odio ipsum earum, excepturi
      </p>
    </div>
  </section>
);

export default Billing;
