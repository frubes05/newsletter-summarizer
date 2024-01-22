import clsx from "clsx";
import Image from "next/image";
import Button from "../../../components/button/button";

interface ISummaryToggleProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

export default function SummaryToggle({
  checked,
  setChecked,
}: ISummaryToggleProps) {
  return (
    <div className="w-48 px-8 py-6 border-white border-opacity-30 border rounded-3xl relative opacity-75">
      <label
        htmlFor="summary"
        className="p-4 absolute z-10 top-0 left-0 h-full w-full rounded-3xl cursor-pointer flex justify-center items-center"
      >
        <Button
          onClick={(e) => setChecked(!checked)}
          className={clsx(
            "bg-button-primary p-4 absolute z-0 left-0 top-0 h-full w-[50%] flex justify-center items-center rounded-3xl transition-all duration-200 ease-in-out",
            {
              "translate-x-[100%]": !checked,
            },
          )}
        >
          <Image
            src={checked ? "/link.svg" : "/text.svg"}
            height={24}
            width={24}
            alt="Image"
          />
        </Button>
        <input
          type="checkbox"
          name="summary"
          id="summary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          hidden
        />
      </label>
    </div>
  );
}
