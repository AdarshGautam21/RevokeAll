import React from 'react'
import Link from 'next/link';

{/* <section class="text-gray-400 bg-gray-900 body-font"> */}
export const Hero = () => {
  return (
    <div class="text-gray-400 bg-gray-900 body-font full">
        <input className='search' placeholder='   Search Accounts by Address' type='text'/>
        <div>
          <Link href="/revoke">
        <button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">Get Started</button>
        </Link>
        </div>
    </div>
    )
}
