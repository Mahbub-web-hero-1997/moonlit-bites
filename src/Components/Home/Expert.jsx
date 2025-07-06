import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SectionHeading from '../Shared/SectionHeading';
import UseExpert from '../../CustomHook/UseExpert';

const Expert = () => {
  const [experts] = UseExpert()
  return (
    <>
      <SectionHeading heading="Our Expert" subHeading="--- CHEFS ---" />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-10 mt-6">
        {experts.map((expert) => (
          <div
            key={expert._id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
          >
            {/* Expert Image */}
            <div className="relative">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 py-3 text-center">
                <h2 className="text-lg font-bold text-gray-800">{expert.name}</h2>
                <p className="text-orange-600 font-semibold text-sm mt-1 inline-block border border-orange-400 px-3 py-1 rounded-full">
                  {expert.designation}
                </p>
              </div>
            </div>

            {/* About and Socials */}
            <div className="p-5 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">{expert.bio}</p>
              <div className="flex justify-center items-center gap-4 mt-4">
                <Link to="#">
                  <TiSocialFacebook className="text-2xl text-sky-600 hover:scale-110 transition" />
                </Link>
                <Link to="#">
                  <FaTwitter className="text-xl text-sky-400 hover:scale-110 transition" />
                </Link>
                <Link to="#">
                  <FaLinkedinIn className="text-xl text-sky-500 hover:scale-110 transition" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Expert;
