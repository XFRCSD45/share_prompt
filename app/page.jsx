import React from 'react'
import Feed from '@components/Feed';
const Home = () => {
  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
        Think & Share
    <br className="max-md:hidden"/>
    <span className='orange_gradient text-center'>
    Your Thoughts and Ideas
    </span>
    </h1>
    <p className='desc text-center'>
        ThoughtTide is a social platform  for users to discover, think and share creative thoughts and ideas
    </p>
    <Feed/>
   </section>
  )
}

export default Home;
