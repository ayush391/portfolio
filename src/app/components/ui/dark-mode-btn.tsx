import { TbBrightnessUp } from "react-icons/tb";
import RotateClockwise from "../anim/rotate-clockwise";

export default function DarkModeButton() {
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <RotateClockwise>
      <button
        className="font-sans rounded-full bg-black dark:bg-white dark:text-black p-2 font-bold text-white"
        onClick={toggleDarkMode}
      >
        <TbBrightnessUp className="text-3xl dark:text-black text-white" />
      </button>
    </RotateClockwise>
  );
}
