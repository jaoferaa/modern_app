import React from 'react';
import styles from "../style"

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px]
    h-[140px] rounded-full border-[0.2rem] border-sky-300 z-50 p-[2px]`}>
      <div className={`${styles.flexCenter} flex-col 
      w-full h-full rounded-full cursor-pointer`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Commencer</span>
          </p>
        </div>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Maintenant</span>
          </p>
      </div>
    </div>
  )

export default GetStarted