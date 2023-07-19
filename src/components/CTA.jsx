import styles from "../style";
import Button from "./Button";
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}
  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-1 flex-col">
      <h2 className={`${styles.heading2}`}>Essayer nos services maintenant!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-2`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga vitae et,
        corporis veritatis eligendi libero? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Obcaecati soluta, minus quis nihil facere
        quaerat!
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button/>
    </div>
  </section>
);

export default CTA;
