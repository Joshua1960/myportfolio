import React, { Component } from 'react'
import Mail from "../image/Envelope.png";
import Linkedin from "../image/linkedin.png";
import Whatsapp from "../image/WhatsApp.png";

export default class Contact extends Component {
  render() {
    return (
        <section id='contact' class="bg-neutral-950 xl:px-16 px-6 py-4 ">
            <div class="container px-6 py-12 mx-auto">
                <div>
                    <p class="text-lg font-normal tracking-wider text-lime-500">Get In Touch</p>
                    <h1 class="mt-2 text-gray-800 font-semibold text-2xl md:text-5xl dark:text-white">Let’s Talk For your Next Projects</h1>
                    <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
                </div>
                <div class="grid mt-16 items-center">
                    <div class="grid gap-10">
                        {/* MAIL */}
                        <div className='flex flex-col items-center'>
                            <a href="mailto:joeljoshua250@gmail.com" target="_blank" rel="noopener noreferrer"><img className='h-10' src={Mail} alt="Mail" /></a>
                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Email</h2>
                            <p class="mt-2 text-sm text-lime-500 dark:text-lime-400">Joeljoshua250@gmail.com</p>
                        </div>
                        {/* LINKEDIN */}
                        <div className='flex flex-col items-center'>
                            <a href="https://www.linkedin.com/in/joshua-joel-0960b4238/" target="_blank" rel="noopener noreferrer"><img className='h-10' src={Linkedin} alt="Linkedin" /></a>
                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">LinkedIn</h2>
                            <p class="mt-2 text-sm text-lime-500 dark:text-lime-400">Joel Joshua</p>
                        </div>
                        {/* WHATSAPP */}
                        <div className='flex flex-col items-center'>
                            <a href="https://wa.link/jyk08s" target="_blank" rel="noopener noreferrer"><img className='h-10' src={Whatsapp} alt="Mail" /></a>
                            <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Whatsapp</h2>
                            <p class="mt-2 text-sm text-lime-500 dark:text-lime-400">+234 8159268174</p>
                        </div>    
                        
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
