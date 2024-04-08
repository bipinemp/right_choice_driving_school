import Link from "next/link";
import React from "react";

const Why = () => {
  return (
    <section className="flex flex-col gap-6 mt-20 mb-10 text-center">
      <h1 className="font-black opacity-80">
        WHY RIGHT CHOICE DRIVING SCHOOL ?
      </h1>
      <div className="flex flex-col gap-6">
        <p className="text-[0.9rem] opacity-80 text-balance">
          Right Choice Driving School is one of the best driving school in
          Sydney trusted by thousands of learners in Sydney. All our driving
          instructors are qualified and experienced driving instructor, who is
          passionate about teaching safe driving to learner drivers. Right
          Choice Driving School works throughout Sydney and near by suburbs and
          provides Driving Lessons, Test Day Support Packages and Car Hire.
        </p>
        <p className="text-[0.9rem] opacity-80 text-balance">
          Each lesson includes pick up and drop off within the
          <Link
            href={"/location"}
            className="text-primary font-semibold hover:underline transition"
          >
            {" "}
            Service Area{" "}
          </Link>
          and is taken in a safe, dual-controlled vehicle. Whether you are just
          learning your way around the car, are looking to sit your driving
          test, or are want to reinforce good driving techniques, Right Choice
          Driving School has the service to support you. Simply
          <Link
            href={"/bookings"}
            className="text-primary font-semibold hover:underline transition"
          >
            {" "}
            Book Now{" "}
          </Link>
          using the easy online booking system, or take a look at the
          <Link
            href={"/packages"}
            className="text-primary font-semibold hover:underline transition"
          >
            {" "}
            Packages{" "}
          </Link>
          selection to receive discounts on multiple lessons.
        </p>
      </div>
    </section>
  );
};

export default Why;
