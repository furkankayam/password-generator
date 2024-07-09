import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [icon, setIcon] = useState("");

  const passwordGenerate = () => {
    setIcon("copy");
    const Charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

    let password = "";

    for (let index = 0; index < 15; index++) {
      const randomIndex = Math.floor(Math.random() * Charset.length);
      password += Charset[randomIndex];
    }

    setValue(password);
  };

  return (
    <div className="dark:bg-[#25191D] w-full min-h-screen flex flex-col justify-center items-center gap-5 select-none">
      <ThemeSwitcher />
      <h1 className="font-bold text-2xl dark:text-gray-100 text-center">
        Password Generator
      </h1>
      <div className="relative flex items-center">
        <input
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          disabled
          type="text"
          id="username"
          name="username"
          className="rounded-md  outline-0 pr-6 border-2 border-[#e08fa3] bg-transparent dark:text-white p-2"
        />
        <p
          className="absolute cursor-pointer right-2 dark:text-[#FF0266] dark:hover:text-[#e08fa3] hover:text-[#FF0266] duration-300"
          onClick={async () =>
            await navigator.clipboard.writeText(value).then(() => {
              setIcon("checkmark-done-outline");
            })
          }
        >
          <ion-icon name={icon}></ion-icon>
        </p>
      </div>
      <button
        onClick={() => passwordGenerate()}
        className="dark:text-white text-[15px] border-[#e08fa3] border-2 p-[6px] rounded-full dark:border-[#FF0266] dark:bg-[#FF0266] dark:hover:bg-[#e08fa3] dark:hover:border-[#e08fa3] dark:hover:text-[#25191D] duration-300 hover:border-[#FF0266]"
      >
        Generate
      </button>
    </div>
  );
}

export default App;
