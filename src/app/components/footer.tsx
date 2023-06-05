import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="bg-black text-white dark:bg-gray-900">
      <div className="flex mx-auto items-center gap-5 md:flex-row md:justify-between flex-col w-full max-w-4xl p-4 py-6 lg:py-8">
        <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 ">
          © 2023 All Rights Reserved.
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  );
}
