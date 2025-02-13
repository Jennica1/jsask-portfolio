import React from "react";

export default function BackgroundInfo() {
  return (
    <>
      <section className="mt-44">
        <h2 className="md:mt-3 text-xl font-bold">Background Research:</h2>
        <p className="max-w-full mb-4 md:w-[70%]">
          Aether's survey intended to understand the diverse experiences of
          caregivers when managing forms for elderly individuals. Survey results
          found that:
        </p>
        
        <ul className="flex flex-col space-y-6 md:space-y-0 text-[#AC0022] underline list-disc">
            <li className="flex flex-col text-xl font-bold">
                Repeatitive paperwork is tiring.
            </li>
            <li className="flex flex-col text-xl font-bold">
              <h2 className="">
                Learning legal terms is stressful.
              </h2>
            </li>
            <div className="flex flex-col ">
              <h2 className="text-xl font-bold">
               Time lost on paperwork could be better spent elsewhere.
              </h2>
            </div>
          </ul>

        <div className="">
          <p>These were following recommendation found:</p>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 text-[#F9F3ED]">
            {/* First Column */}
            <div className="flex flex-col space-y-2 p-6 bg-[#625D9C] rounded-3xl">
              <h2 className="text-xl font-bold">
                Simplify Form-filling Process
              </h2>
              <p className="max-w-xl pb-4">
                Action: Create an interface with simplified language and
                tooltips to explain complex legal or medical terminology. Add an
                error-checking feature to prevent users from submitting
                incomplete or incorrect forms, reducing stress.
              </p>
            </div>
            <div className="flex flex-col space-y-2 p-6 bg-[#625D9C] rounded-3xl">
              <h2 className="text-xl font-bold">
                Improve App Navigation and Usability
              </h2>
              <p className="max-w-xl pb-4">
                Action: Ensure features like form status and reminders are
                easily accessible from the home screen. Use a design that avoids
                overwhelming users with too much information.
              </p>
            </div>

            {/* Second Column */}
            <div className="flex flex-col space-y-2 p-6 bg-[#625D9C] rounded-3xl">
              <h2 className="text-xl font-bold">
                Develop Time-saving Features
              </h2>
              <p className="max-w-xl pb-4">
                Action: Add autofill functionality that remembers frequently
                used information. Introduce smart suggestions that prompt users
                with likely answers based on their previous submissions.
              </p>
            </div>
            <div className="flex flex-col space-y-2 p-6 bg-[#625D9C] rounded-3xl">
              <h2 className="text-xl font-bold">AI - Form Assistance</h2>
              <p className="max-w-xl pb-4">
                Action: Implement an AI that will help users who are unsure of
                how to fill out a form. Allow users to ask questions and have
                feedback on questions they are unsure about to ensure the form
                is filled out correctly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
