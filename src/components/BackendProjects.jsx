import React from 'react'
import BAKERY from '../assets/bakery.png'
import TA from '../assets/twitch.png'
export default function BackendProjects() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-300 bg-white">
          <img className="w-full" src={BAKERY} alt="DevTree project preview" /> 
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Bakery Inventory System</div>
            <p className="text-gray-700 text-base">
              A bakery inventory management system to track products, and stock levels. It helps streamline ordering, reduce waste, and monitor sales. Built with Java and PostgreSQL, it provides an efficient way to manage daily operations and improve productivity in small to medium-sized bakeries.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-2">
              {["Java", "DTOs", "Spring Boot", "Lombok", "Maven"].map((tech) => (
                <span key={tech} className="bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 p-4">
            <a href="https://github.com/alejandrogch7/Bakery-inventory" target="_blank">
              <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Code</button>
            </a>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg hover:scale-105 duration-300 bg-white">
          <img className="w-full" src={TA} alt="Devgram project preview" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Twitch Analytics - ETL</div>
            <p className="text-gray-700 text-base">
              Twitch ETL Analytics is a Spring Boot application that extracts real-time data from the Twitch API, transforms it, and loads it into a PostgreSQL database. It provides web interfaces and APIs for viewing streamer rankings, searching channels, and analyzing Twitch gaming trends.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-2">
              {["Java", "Spring Boot", "Twitch API", "Docker", "Lombok"].map((tech) => (
                <span key={tech} className="bg-[#14274E] rounded-full px-3 py-1 text-sm font-semibold text-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-4 p-4">
            <a href="https://github.com/alejandrogch7/twitch-etl-analytics" target="_blank">
              <button className="px-4 py-2 bg-[#00a6ff] rounded-md text-slate-200 hover:bg-[#14274E] shadow">Code</button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
