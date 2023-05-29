export default function Header() {
  return (
    <div className="flex md:flex-row flex-col md:gap-14 gap-5 w-full max-w-4xl">
      <div className="flex flex-col gap-2">
        <div className="font-medium text-4xl">Ayush</div>
        <div className="font-medium text-4xl">Kapoor</div>
      </div>
      <div className="font-sans text-sm font-semibold max-w-xs">
        I’m a freelance front-end developer who wants to help make the internet
        a more creative, accessible, and better place.
      </div>
    </div>
  );
}
