import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AppInformation({ appName, appLink, role, skills, description, status }) {
  return (
    <section>
      <div>
        <div className="text-sm lg:pt-10 sm:w-2/3 md:w-3/4 md:text-xs">
          <span className="inline-flex items-baseline pb-1">
            <h2 className="text-2xl font-bold md:text-lg mr-2">{appName}</h2>
            <Link
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#AC0022] rounded w-fit px-4 py-2 text-base text-[#F9F3ED] underline md:text-sm"
            >
              Click
            </Link>
          </span>

          <p className="bg-[#2C304F] rounded w-fit px-3 py-2 text-base md:text-sm text-[#F9F3ED]">
            {status}
          </p>

          <p className="mt-4 md:mt-1 text-base md:text-sm w-[90%]">
            {description}
          </p>

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
                  className="bg-[#2C304F] px-1 py-2 rounded text-base md:text-sm text-[#F9F3ED]"
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
