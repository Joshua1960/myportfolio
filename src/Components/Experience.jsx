import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className="w-full md:w-3/4 px-6 py-3 bg-black rounded-md shadow-md grid grid-cols-1">
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4 border-b'>2+<span className='font-normal tracking-wider text-white text-lg'>Years Of Experience</span></div>
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4 border-b'>5+<span className='font-normal tracking-wider text-white text-lg'>Web development</span></div>
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4'>5+<span className='font-normal tracking-wider text-white text-lg'>Product design</span></div>
        </div>
    )
  }
}
