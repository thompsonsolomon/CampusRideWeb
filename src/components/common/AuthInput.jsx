export default function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-600">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-black"
      />
    </div>
  );
}
