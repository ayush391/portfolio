import EXPERIENCE_ITEMS from "./info/experience-info";
import ExperienceCard from "./ui/exp-card";
export default function Experience() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <div className="font-medium text-2xl">Experience</div>
      <div className="flex flex-col gap-8 ">
        {EXPERIENCE_ITEMS.map((item) => (
          <div key={item.title}>
            <ExperienceCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
