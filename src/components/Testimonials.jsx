import { feedback } from "../constants";
import styles from "../style";
import FeedBack from "./FeedBack";
const Testimonials = () => (
  <section
    id="client"
    className={`${styles.paddingY} ${styles.flexCenter} inline relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -rigth-[50%] rounded-full blue__gradient"/>

    <div className="w-full inline justify-between items-center md:flex-row sm:mb-16 mb-6 relative z-[1]">
      <h1 className={styles.heading2}>
        Ce que disent <br className="sm:block hidden" /> nos clients.
      </h1>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cum
          quas reprehenderit nam doloribus in!
        </p>
      </div>
      <div className="w-full flex flex-wrap sm:justify-start justify-center feedback-container z-[1]">
          {
            feedback.map((card)=>(
              <FeedBack key={card.id} {...card}/>
            ))
          }
      </div>
    </div>
  </section>
);

export default Testimonials;
