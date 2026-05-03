interface Props {
  icon: string;
  placeholder: string;
  label: string;
}

function InputField(Props: Props) {
  const { icon, placeholder, label } = Props;
  return (
    <div className="w-full">
      <label className="mb-2.5 text-sm block tracking-wide font-semibold">
        {label}
      </label>
      <div className="flex items-center w-full">
        <img src={icon} className="w-4" alt="icon" />
        <input
          type="text"
          className="py-2 w-full px-3 placeholder:text-base placeholder:font-semibold"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputField;
