import { Component } from "react";

interface Props {
  icon: string;
  placeholder: string;
  label: string;
  as?: React.ElementType;
}

function ContactInputField(Props: Props) {
  const { icon, placeholder, label, as = "input" } = Props;
  const Component = as || "input";
  return (
    <div className="input-field w-full">
      <label className="mb-2.5 text-sm block tracking-wide font-semibold">
        {label}
      </label>
      <div className="">
        {as === "input" ? (
          <div className="flex pl-4 rounded-lg border border-border items-center">
            <div className="">
              <img src={icon} className="w-3" alt="" />
            </div>
            <Component
              type="text"
              className="w-full max-w-full px-4 placeholder:text-sm text-sm placeholder:font-normal placeholder:text-input py-2"
              placeholder={placeholder}
            />
          </div>
        ) : (
          <div className="flex rounded-lg border border-border items-center">
            <Component
              type="text"
              rows="9"
              className="w-full max-w-full px-4 placeholder:text-sm text-sm placeholder:font-normal placeholder:text-input py-2"
              placeholder={placeholder}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactInputField;
