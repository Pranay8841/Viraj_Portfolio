import React from 'react'
import { motion } from "framer-motion";
import ResumeCard from './ResumeCard'

function Education() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { duration: 0.5 } }}
    className='w-full flex gap-20'>
        {/* 1st half */}
      <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className=' text-sm text-designColor tracking-[4px]'>1998 - 2010</p>          
          <h2 className=' text-4xl font-bold'>Education Quality</h2>
        </div>
        <div>
          <div  className='mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-4'>
            <ResumeCard
              title="Information Technology TY-BTech"
              subTitle="VIIT, Pune (2021 - 2025)"
              result="9.43/10"
              des="I am currently in 3rd year of BTech pursuning IT engineering from VIIT, pune. I this 3 year of engineering I have experience various new situation and had great life."
            />
            <ResumeCard
              title="Higher Secondary School(12th)"
              subTitle="S.M.Joshi (2019 - 2021)"
              result="87.17/100"
              des="I am completed my 12th grade from S.M Joshi college Hadapsar,Pune from Science stream."
            />
            <ResumeCard
              title="High School(10th)"
              subTitle="Y.C.M English Medium School (2018 - 2019)"
              result="70.21/100"
              des="I have completed my 10th grade from Y.C.M school in year 2019."
            />
          </div>
        </div>
      </div>
      {/* 2nd half */}
      {/* <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className=' text-sm text-designColor tracking-[4px]'>2010 - 2022</p>          
          <h2 className=' text-4xl font-bold'>Job Experience</h2>
        </div>
        <div>
          <div  className='mt-14 w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
            <ResumeCard
              title="Sr. Software Engineer"
              subTitle="Google Out Tech - (2017 - Present)"
              result="USA"
              des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
            />
            <ResumeCard
              title="Web Developer & Trainer"
              subTitle="Apple Developer Team - (2012 - 2016)"
              result="MALAYSIA"
              des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
            />
            <ResumeCard
              title="Front-end Developer"
              subTitle="Nike - (2020 - 2011)"
              result="Oman"
              des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
            />
          </div>
        </div>
      </div> */}
      </motion.div>
  )
}

export default Education