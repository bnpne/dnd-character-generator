import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

const Layout = ({title, children}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="px-10 mx-auto min-h-screen">
        <Nav />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
