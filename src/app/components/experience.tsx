"use client";

import { Experience } from "@/sanity/lib/sanity.types";
import SlideUp from "./anim/slide-up-anim";
import ExperienceCard from "./ui/exp-card";

interface ExperienceProps {
  experiences: Experience[];
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <SlideUp>
        <div className="font-medium text-2xl">Experience</div>
      </SlideUp>
      {experiences?.length > 0 ? (
        <div className="flex flex-col gap-8 ">
          {experiences.map((item) => (
            <div key={item._id}>
              <ExperienceCard {...item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-8 ">
          <div>No experience found</div>
        </div>
      )}
    </div>
  );
}
