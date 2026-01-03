export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg text-gray-800 text-[24px]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border-2 border-gray-400 rounded-full px-4 text-[20px] py-3 focus:outline-none focus:border-black"
      />
    </div>
  );
}
