import React from "react";
import HeaderSection from "../../../Sheard/HeaderSection/HeaderSection";

export default function ExperienceSection() {
  return (
    <section className="mt-10">
      <div className="text-center mb-16">
        <HeaderSection name={"Experience"}></HeaderSection>
      </div>

      <div className="flex flex-col space-y-8 max-w-5xl mx-auto px-4">
        {/* Job 1 */}
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold">
            Full Stack Developer (Remote)
          </h3>
          <p className="text-gray-600">
            3w Business Private Limited, Mumbai, India.
          </p>
          <p className="text-sm text-gray-600">
            September 2023 – November 2024
          </p>
          <p className="mt-2 text-gray-600">
            Projects: Gamer Hub, Grow More Today, TaskPlanet, Safe and Secure
            Trade, Hash Pro, ABHIFX024, Mithilla11, Traderbull, Yashaswigenics,
            Life Never Again, Self Life Care.
          </p>
        </div>

        {/* Job 2 */}
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold">
            Full Stack Developer (Internship)
          </h3>
          <p className="text-gray-600">Geeks of Gurukul, Bangalore, India.</p>
          <p className="text-sm text-gray-600">
            January 2023 – June 2023 (6 Months)
          </p>
        </div>
      </div>
    </section>
  );
}
