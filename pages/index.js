import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <Layout title="D&D Character Generator">
        <div className="max-w-7xl mx-auto pt-16 lg:pt-24 xl:pt-32">
          <div className="font-extrabold max-w-7xl mx-auto text-5xl lg:text-6xl xl:text-7xl text-center">
            <h1>Get Inspired. Generate a Character for your next Campaign.</h1>
          </div>
          <div className='text-center mt-16'>
            <Link href='/generator'>
              <a className='py-4 px-8 text-white rounded-lg bg-indigo-500 font-bold text-2xl'>Get Started!</a>
            </Link>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Index
