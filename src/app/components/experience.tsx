export default function Experience() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-4xl">
      <div className="font-medium text-2xl">Experience</div>
      <div className="flex flex-nowrap gap-8 overflow-x-scroll">
        <div className="w-[400px] h-96 bg-blue-400" />
        <div className="w-[400px] h-96 bg-red-400" />
        <div className="w-[400px] h-96 bg-pink-400" />
        <div className="w-[400px] h-96 bg-green-400" />
      </div>
    </div>
  );
}
