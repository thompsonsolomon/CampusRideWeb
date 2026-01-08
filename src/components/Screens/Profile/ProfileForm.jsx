import React, { useState } from "react";

function ProfileForm() {
  const initialFormData = [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "First Name",
      value: "Thompson",
      type: "text",
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Last Name",
      value: "Solomon",
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "example@gmail.com",
      value: "example@gmail.com",
      type: "email",
    },
    {
      name: "phone",
      label: "Phone Number",
      placeholder: "Phone Number",
      value: "+234 814 134 2103",
      type: "text",
    },
    {
      name: "role",
      label: "Role",
      value: "User",
      type: "text",
      readOnly: true,
    },
  ];

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (index, newValue) => {
    const updatedData = [...formData];
    updatedData[index] = {
      ...updatedData[index],
      value: newValue,
    };
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert array to object (clean for backend)
    const payload = {};
    formData.forEach((field) => {
      payload[field.name] = field.value;
    });

    console.log("Updated Profile:", payload);
  };

  return (
    <div className="bg-white w-full flex justify-start items-start p-6 rounded-md">
      <form onSubmit={handleSubmit} className="w-full">
        {formData.map((data, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start w-full gap-2 mt-6"
          >
            <label className="text-gray-400 text-[18px]">
              {data.label}
            </label>

            <input
              type={data.type}
              placeholder={data.placeholder}
              value={data.value}
              readOnly={data.readOnly}
              onChange={(e) => handleChange(idx, e.target.value)}
              className={`w-full pl-6 pt-3 pb-3 text-[18px] outline-none rounded-full
                ${
                  data.readOnly
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-gray-300"
                }`}
            />
          </div>
        ))}

        <button
          type="submit"
          className="mt-8 w-full bg-yellow-500 text-white py-4 rounded-full text-lg font-semibold"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
