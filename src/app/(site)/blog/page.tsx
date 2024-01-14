import React from 'react'
import { LastPostSection } from '../components/blog/last-post-section'
import { BlogCardsSection } from '../components/blog/blog-cards-section'

const Blog = () => {
  return (
    <div className={'px-8 pt-5 sm:px-10 lg:px-24'}>
      <h1 className={'text-center text-xl sm:text-3xl md:text-4xl mb-4'}>BLOG</h1>
      <LastPostSection />
      <BlogCardsSection />
    </div>
  )
}

export default Blog
