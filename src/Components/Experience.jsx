import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
        <div className="w-1/4 md:w-3/4 gap-2 items-end">
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4 border-b'>2+<span className='font-normal tracking-wider text-white text-lg'>Years Of Experience</span></div>
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4 border-b'>5+<span className='font-normal tracking-wider text-white text-lg'>Web development</span></div>
            <div className='text-lime-500 flex flex-col text-4xl gap-2 text-left font-medium py-4'>5+<span className='font-normal tracking-wider text-white text-lg'>Product design</span></div>
        </div>
    )
  }
}
