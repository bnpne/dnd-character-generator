import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className="flex justify-between py-8 font-bold">
      <Link href="/">
        <a>D&D Charcter Generator</a>
      </Link>
      <div className="space-x-5">
        <Link href="/generator">
          <a className="py-2 px-4 bg-indigo-200 text-indigo-500 rounded-lg">
            Generator
          </a>
        </Link>
        <Link href="/data">
          <a className="py-2 px-4 bg-indigo-200 text-indigo-500 rounded-lg">
            Data
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Nav
