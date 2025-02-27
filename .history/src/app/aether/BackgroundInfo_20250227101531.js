import React from "react";

export default function BackgroundInfo() {
  return (
    <>
      <section className="mt-44">
        <h2 className="md:mt-3 text-3xl font-bold">Background Research:</h2>
        <hr className="border-black border-2 lg:w-[70%] "></hr>
        <p className="lg:w-[100%] mb-4  pt-2">
          Aether conducted 2 rounds of interviews, 1 for the initial idea which
          was more focused on an older demographic looking for a solution to
          easily file forms while the second was more centered around
          understanding the diverse experiences caretakers and individuals who
          would be responsible for filling out forms for seniors feel while
          carrying out their tasks.
        </p>

        <p className="text-2xl font-bold pb-2">Survey Found:</p>

        <ul
          style={{ listStyleImage: "url('.//images/exclam.svg')" }}
          className="flex flex-col lg:ml-14 ml-6 mb-10 text-[#890620]  list-disc lg:gap-2 lg:text-xl md:text-xl"
        >
          <li className=" font-bold">Repetitive paperwork is tiring.</li>
          <li className=" font-bold">Learning legal terms is stressful.</li>
          <li className="font-bold">
            Time lost on paperwork could be better spent elsewhere.
          </li>
        </ul>

        <div className="">
          <p className="text-2xl font-bold pb-2">
            As a result, the following recommendations was suggested:
          </p>
          <div className="lg:ml-10 max-w-5xl  gap-y-8">
            <ul className="list-none pl-0 pt-2">
              <li
                className="text-xl font-bold flex items-center pl-8"
                style={{
                  backgroundImage: "url('/images/star.svg')",
                  backgroundSize: "20px", // Adjust the size of the bullet
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center", // Ensure the bullet is on the left
                }}
              >
                Simplify Form-filling Process
              </li>
            </ul>
            <p className="">
              Create an interface with simplified language and tooltips to
              explain complex legal or medical terminology. Add an
              error-checking feature to prevent users from submitting incomplete
              or incorrect forms, reducing stress.
            </p>

            <ul className="list-none pl-0 pt-4">
              <li
                className="text-xl font-bold flex items-center pl-8"
                style={{
                  backgroundImage: "url('/images/star.svg')",
                  backgroundSize: "20px", // Adjust the size of the bullet
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center", // Ensure the bullet is on the left
                }}
              >
                Improve App Navigation and Usability
              </li>
            </ul>
            <p className="">
              Ensure features like form status and reminders are easily
              accessible from the home screen. Use a design that avoids
              overwhelming users with too much information.
            </p>

            <ul className="list-none pl-0">
              <li
                className="text-xl font-bold flex items-center pl-8"
                style={{
                  backgroundImage: "url('/images/star.svg')",
                  backgroundSize: "20px", // Adjust the size of the bullet
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center", // Ensure the bullet is on the left
                }}
              >
                Develop Time-saving Features
              </li>
            </ul>
            <p className="">
              Add autofill functionality that remembers frequently used
              information. Introduce smart suggestions that prompt users with
              likely answers based on their previous submissions.
            </p>

            <ul className="list-none pl-0">
              <li
                className="text-xl font-bold flex items-center pl-8"
                style={{
                  backgroundImage: "url('/images/star.svg')",
                  backgroundSize: "20px", // Adjust the size of the bullet
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center", // Ensure the bullet is on the left
                }}
              >
                AI - Form Assistance
              </li>
            </ul>
            <p className="">
              Implement an AI that will help users who are unsure of how to fill
              out a form. Allow users to ask questions and have feedback on
              questions they are unsure about to ensure the form is filled out
              correctly.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
