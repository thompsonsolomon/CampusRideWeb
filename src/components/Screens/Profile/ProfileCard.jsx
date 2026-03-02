// import React from 'react'
// import ProfileImg from "../../../assets/images/profileImg.png"
// import editButton from "../../../assets/icons/edit.png"
// function ProfileCard() {
//   return (
//     <div className='p-4 m-2 flex justify-center items-center  w-full relative'>
//      <img src={ProfileImg} className='rounded-full w-[100px] h-[100px] object-fill fill-current' alt="" />
//      <button onClick={ () => alert("Edit will be available soon ")} className="edit absolute bottom-3 left-[55%]">
//       <img  src={editButton} alt="" />
//      </button>
//     </div>
//   )
// }

// export default ProfileCard


import { useRef, useState } from "react";
import { Camera } from "lucide-react";
import { useAuth } from "../../../contexts/AuthContext";
import { uploadToCloudinary } from "../../../utils/cloudinaryUtils";
import { updateUserProfile } from "../../../utils/firebaseUtils";
import ProfileImg from "../../../assets/images/profileImg.png"
import { doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../../Helpers/firebase";
import { updateProfile } from "firebase/auth";

function ProfileCard() {
 const { user, firebaseUser } = useAuth();
const fileInputRef = useRef(null);
const [uploading, setUploading] = useState(false);

const handleImageClick = () => {
  fileInputRef.current.click();
};

const handleFileChange = async (e) => {
  const file = e.target.files[0];
  if (!file || !user) return;

  try {
    setUploading(true);

    // 1️⃣ Upload to Cloudinary
    const uploadResult = await uploadToCloudinary(file);

    if (!uploadResult.success) {
      alert("Image upload failed");
      return;
    }

    const imageUrl = uploadResult.url;

    // 2️⃣ Update Firebase Auth profile (so UI updates everywhere)
    await updateProfile(firebaseUser, {
      photoURL: imageUrl,
    });

    // 3️⃣ Update Firestore user document
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      photoURL: imageUrl,
      updatedAt: serverTimestamp(),
    });

  } catch (error) {
    console.error(error);
    alert("Image upload failed. Please try again.");
  } finally {
    setUploading(false);
  }
};

if (!user) return null;
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative group">

        {/* Profile Image */}
        <img
          src={
            user.photoURL ||
            ProfileImg
          }
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500 shadow-lg transition-all duration-300 group-hover:opacity-80"
        />

        {/* Overlay */}
        <div
          onClick={handleImageClick}
          className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          {uploading ? (
            <span className="text-white text-sm">Uploading...</span>
          ) : (
            <Camera className="text-white" size={28} />
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default ProfileCard;