import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AppInformation({ appName, appLink, linkName, role, skills, description, status }) {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col md:flex-row justify-center w-full max-w-4xl items-start md:items-end space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-sm lg:pt-10 md:text-xs max-w-fit">
          <span className="inline-flex items-baseline pb-1 space-x-2">

            <h2 className="text-4xl font-bold mr-2">{appName}</h2>

            {/* Conditionally render appLink */}
            {appLink && appLink.length > 0 && (
              <Link
                href={appLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#AC0022] rounded-xl w-fit py-1.5 text-base text-[#F9F3ED] underline md:text-sm"
              >
                {linkName}
              </Link>
            )}

          </span>

          <p className="bg-[#2C304F] mt-2 rounded w-fit px-3 py-1.5 text-base md:text-sm text-[#F9F3ED]">
            {status}
          </p>

          <p className="mt-4 md:mt-1 text-base md:text-sm max-w-sm">
            {description}
          </p>

        </div>

        {/* Right Section */}
        <div className="w-auto ">
          <h2 className="mt-6 md:mt-2 text-xl font-bold md:text-lg">
            Project Details:
          </h2>

          <div className="mt-4">
            <p className="text-base font-medium md:text-sm md:-mt-3">Role:</p>
            <p className="text-base md:text-sm font-bold">{role}</p>
          </div>

          <div className="mt-4">
            <p className="text-base font-medium md:text-sm">Skills Used:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-[#2C304F] px-1 py-1 rounded text-base md:text-sm text-[#F9F3ED]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
