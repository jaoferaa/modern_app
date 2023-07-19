import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants/index";
const FeaturedCard = ({ title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[25px] mb-1">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Vous faites du business,
        <br className="sm:block hidden" /> on s'occupe de l'argent.
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          libero eligendi impedit itaque modi illo iste quibusdam consequuntur
          labore rerum? Dolorem ipsum perspiciatis dolor magni minima facere! A
        </p>
      </h2>
      <Button />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeaturedCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
