import styles, { layout } from "../style";
import suchi from "../assets/suchi.jpg";
import Button from "./Button";
const CardDeal = () => (
  <section className={layout.section} id="clients">
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        La meuilleur carte <br className="sm:block hidden" />
        en quelque étape.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab
        unde, provident nesciunt ipsum reprehenderit quisquam harum, praesentium
        at, animi placeat nostrum dolores molestiae sed necessitatibus. Deleniti
      </p>

    <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={suchi} className="w-full h-full rounded-md shadow-slate-700 shadow-lg"/>
    </div>
  </section>
);

export default CardDeal;
