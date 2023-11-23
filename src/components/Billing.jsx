import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      <div className="absolute z-[3] -left-[80%] -top-[30%] w-[100%] h-[100%] rounded-full white__gradient  opacity-[0.2]" />
      <div className="absolute z-[0] -left-[80%] -bottom-[30%] w-[100%] h-[100%] rounded-full pink__gradient  opacity-[0.1]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" />
        billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Master your finances. Take control of billing and invoicing with
        user-friendly tools, making financial management a breeze. Experience
        simplicity at its best.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="google store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
)

export default Billing
