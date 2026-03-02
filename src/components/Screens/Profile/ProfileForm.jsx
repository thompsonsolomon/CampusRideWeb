import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { updateUserProfile } from "../../../utils/firebaseUtils";

export default function Profile() {
  const { user, firebaseUser } = useAuth();
  console.log(user);
  
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [phone, setPhone] = useState(user?.phone || "");
  // const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const result = await updateUserProfile({
      uid: user.uid,
      firstName,
      lastName,
      phone,
      firebaseUser,
    });

    setLoading(false);

    if (result.success) {
      setSuccess("Profile updated successfully!");
    }
  };

  if (!user) return null;

  return (
    <div className="flex justify-center py-10 px-4">
      <div className=" shadow-xl rounded-2xl w-full max-w-2xl p-8">

        {/* Profile Header
        <div className="flex flex-col items-center mb-8">
          <img
            src={photoURL || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400 shadow-md"
          />

          <p className="text-gray-500 mt-2 text-sm">
            Upload image on Cloudinary and paste the URL below
          </p>
        </div> */}

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5">

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />

            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className="border rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="border rounded-lg p-3 w-full focus:ring-2 focus:ring-yellow-400 outline-none"
          />
          {success && (
            <p className="text-green-600 text-sm text-center">{success}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
}