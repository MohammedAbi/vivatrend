import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  name: string;
  email: string;
  bio?: string;
  avatar?: {
    url: string;
    alt: string;
  };
  banner?: {
    url: string;
    alt: string;
  };
  venueManager?: boolean;
  createdAt?: string;
}

interface AuthUser extends UserProfile {
  accessToken: string;
}

interface AuthContextType {
  user: AuthUser | null;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
  logout: () => void;
}

const ProfilePage = () => {
  const { user, updateProfile, logout } = useAuth() as AuthContextType;
  const navigate = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState<UserProfile>({
    name: "",
    email: "",
    bio: "",
    avatar: { url: "", alt: "" },
    banner: { url: "", alt: "" },
    venueManager: false,
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        bio: user.bio || "",
        avatar: user.avatar || { url: "", alt: "" },
        banner: user.banner || { url: "", alt: "" },
        venueManager: user.venueManager || false,
      });
    }
  }, [user]);

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, bio: e.target.value }));
  };

  const handleVenueManagerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, venueManager: e.target.checked }));
  };

  const handleMediaUpload = (type: "avatar" | "banner", file: File) => {
    const url = URL.createObjectURL(file);
    setFormData((prev) => ({
      ...prev,
      [type]: {
        url,
        alt: file.name,
      },
    }));
  };

  const handleRemoveMedia = (type: "avatar" | "banner") => {
    setFormData((prev) => ({
      ...prev,
      [type]: { url: "", alt: "" },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateProfile({
        bio: formData.bio,
        avatar: formData.avatar,
        banner: formData.banner,
        venueManager: formData.venueManager,
      });
      setEditMode(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Profile update failed");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 text-center mt-[90px]">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Please log in to view your profile
        </h2>
        <button
          onClick={() => navigate("/login")}
          className="btn btn-lg btn-primary mx-auto px-16 py-2 rounded-lg mt-8"
        >
          Login
        </button>
      </div>
    );
  }

  const formatName = (name: string) => {
    return name.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  return (
    <div className="container mx-auto px-4 py-4 mt-[90px]">
      {/* Banner */}
      <div className="relative h-40 rounded-lg mb-4 overflow-hidden">
        {formData.banner?.url ? (
          <img
            src={formData.banner.url}
            alt={formData.banner.alt || "Profile banner"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <span className="text-lg">Banner Image</span>
          </div>
        )}
        {editMode && (
          <div className="absolute bottom-2 right-2 flex flex-wrap gap-2">
            <label className="bg-white text-gray-800 px-3 py-1 rounded text-sm flex items-center">
              {formData.banner?.url ? "Change" : "Add"} Banner
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  handleMediaUpload("banner", e.target.files[0])
                }
              />
            </label>
            {formData.banner?.url && (
              <button
                onClick={() => handleRemoveMedia("banner")}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
              >
                Remove
              </button>
            )}
          </div>
        )}
      </div>

      {/* Profile Header */}
      <div className="flex flex-col mb-6">
        <div className="flex flex-col items-center sm:flex-row sm:items-end gap-4">
          {/* Avatar */}
          <div className="relative mb-8">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-white bg-white overflow-hidden shadow-md">
              {formData.avatar?.url ? (
                <img
                  src={formData.avatar.url}
                  alt={formData.avatar.alt || "Profile"}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-purple-600 text-white text-3xl">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
            {editMode && (
              <div className="absolute -bottom-[32px] left-0  flex justify-center gap-2">
                <label className="bg-white text-gray-800 px-2 py-1 rounded text-xs shadow flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) =>
                      e.target.files?.[0] &&
                      handleMediaUpload("avatar", e.target.files[0])
                    }
                  />
                </label>
                {formData.avatar?.url && (
                  <button
                    onClick={() => handleRemoveMedia("avatar")}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Name and Actions */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-xl font-bold text-white">
              {formatName(user.name)}
            </h1>
            <p className="text-sm mb-2 text-white">{user.email}</p>

            <div className="flex justify-center sm:justify-start gap-2 mt-2">
              {editMode ? (
                <>
                  <button
                    onClick={() => setEditMode(false)}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn btn-sm btn-secondary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm btn-primary"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {editMode && (
          <div className="mt-4 flex items-center justify-center sm:justify-start">
            <input
              type="checkbox"
              id="venueManager"
              checked={formData.venueManager || false}
              onChange={handleVenueManagerChange}
              className="mr-2 h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="venueManager" className="text-white">
              Venue Manager
            </label>
          </div>
        )}
      </div>

      {/* Bio Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2 text-white">About</h2>
        {editMode ? (
          <textarea
            value={formData.bio || ""}
            onChange={handleBioChange}
            placeholder="Tell us about yourself..."
            className="w-full p-3 border border-gray-300 rounded-lg h-32 text-gray-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        ) : (
          <p className="text-white">{formData.bio || "No bio provided yet."}</p>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 mb-4">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Account Details */}
      <div className="bg-white shadow rounded-lg p-4 mb-6">
        <h3 className="text-lg font-semibold mb-3">Account Information</h3>
        <div className="space-y-3">
          <div>
            <p className="text-xs text-gray-500">Username</p>
            <p className="text-gray-800">{user.name}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-gray-800">{user.email}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Account Type</p>
            <p className="text-gray-800">
              {user.venueManager ? "Venue Manager" : "Regular User"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
