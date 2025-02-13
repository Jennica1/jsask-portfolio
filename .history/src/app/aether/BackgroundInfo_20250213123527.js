import React from "react";

export default function BackgroundInfo() {
  return (
    <>
      <section className="mt-44">
        <h2 className="md:mt-3 text-xl font-bold">Background Research:</h2>
        <p className="max-w-2xl mb-4 md:w-[70%]">
          Aether's survey intended to understand the diverse experiences of
          caregivers when managing forms for elderly individuals. Survey results
          found that:
        </p>

        <ul style={{listStyleImage: "url('.//images/exclam.svg')", paddingRight:'20px' }} className="flex flex-col ml-6 mb-10 text-[#890620] underline list-disc lg:gap-2 lg:text-xl md:text-xl">
          <li className=" font-bold">Repetitive paperwork is tiring.</li>
          <li className=" font-bold">Learning legal terms is stressful.</li>
          <li className="font-bold">
            Time lost on paperwork could be better spent elsewhere.
          </li>
        </ul>

        <div className="">
          <p className="mb-4">These were following recommendation found:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#F9F3ED]">
            {/* Top-Left */}
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

            {/* Top-Right */}
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

            {/* Bottom-Left */}
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

            {/* Bottom-Right */}
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
