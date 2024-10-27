// src/Settings.js
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Settings.module.css';

const Settings = () => {
    const navigate = useNavigate(); // Hook for navigating to previous page
    const securityRef = useRef(null);
    const [isEditingProfile, setIsEditingProfile] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingSecurity, setIsEditingSecurity] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);
    const [profilePicture, setProfilePicture] = useState("https://storage.googleapis.com/a1aa/image/HTBM7JBhwz4KEhtr9HDalnyTmZCoKnVekSbMBfFfPcf2I8qOB.jpg");
    const [personalInfo, setPersonalInfo] = useState(personalInfoFields);
    const [addressInfo, setAddressInfo] = useState(addressFields);
    const [securityInfo, setSecurityInfo] = useState(securityFields);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const fileInputRef = useRef(null);

    const scrollToSection = () => {
        if (securityRef.current) {
            securityRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleBackClick = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleEditProfileClick = () => {
        setIsEditingProfile(true);
    };

    const handleSaveProfileClick = () => {
        setIsEditingProfile(false);
    };

    const handleEditAddressClick = () => {
        setIsEditingAddress(true);
    };

    const handleSaveAddressClick = () => {
        setIsEditingAddress(false);
    };

    const handleEditSecurityClick = () => {
        setIsEditingSecurity(true);
    };

    const handleSaveSecurityClick = () => {
        if (newPassword && confirmPassword) {
            if (newPassword === confirmPassword) {
                console.log("Password changed successfully");
                setPasswordError(""); 
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setPasswordError("Passwords do not match");
            }
        } else {
            setPasswordError("Both fields are required");
        }
        setIsEditingSecurity(false);
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const toggleNotifications = () => {
        setIsNotificationEnabled((prev) => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className={`${styles.container} max-w-4xl mx-auto p-4`}>
            <div className={`${styles.header} flex items-center mb-4`}>
                <i className="fas fa-arrow-left text-xl mr-2 cursor-pointer" onClick={handleBackClick}></i>
                <h1 className="text-2xl font-semibold">Settings</h1>
                <input 
                    type="file" 
                    accept="image/*" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    onChange={handlePictureChange}
                />
                <button className="text-blue-500 ml-auto" onClick={triggerFileInput}>
                    <i className="fas fa-image"></i> Change Profile Image
                </button>
                <div className="relative ml-4">
                    <i 
                        className={`fas fa-bell text-xl cursor-pointer transition-all duration-300 ${isNotificationEnabled ? 'text-gray-800' : 'text-gray-500'}`}
                        onClick={() => {
                            toggleNotifications();
                            toggleDropdown();
                        }}
                    ></i>
                    {isDropdownOpen && (
                        <div className={`${styles.dropdown} absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md`}>
                            <div 
                                className="p-2 hover:bg-gray-100 cursor-pointer" 
                                onClick={toggleNotifications}
                            >
                                {isNotificationEnabled ? 'Disable Notifications' : 'Enable Notifications'}
                            </div>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer">Other Option 1</div>
                            <div className="p-2 hover:bg-gray-100 cursor-pointer">Other Option 2</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex space-x-8 border-b mb-4">
                <a className={`pb-2 border-b-2 border-blue-500 text-blue-500`} href="#">
                    My Profile
                </a>
                <a className="pb-2 cursor-pointer" onClick={scrollToSection}>
                    Security
                </a>
            </div>
            <div className={`${styles.card} mb-4`}>
                <div className={`${styles.profileInfo} flex items-center`}>
                    <img
                        alt="Profile picture"
                        className="w-16 h-16 rounded-full mr-4"
                        src={profilePicture}
                    />
                    <div>
                        <h2 className="text-xl font-semibold">Arjun Mehta</h2>
                        <p className="text-gray-600">Senior UI/UX Designer</p>
                        <p className="text-gray-600">Bengaluru, Karnataka, India</p>
                    </div>
                </div>
            </div>
            <ProfileSection 
                title="Personal Information" 
                fields={personalInfo} 
                isEditing={isEditingProfile} 
                onEditClick={handleEditProfileClick} 
                onSaveClick={handleSaveProfileClick} 
                setFields={setPersonalInfo}
            />
            <ProfileSection 
                title="Address" 
                fields={addressInfo} 
                isEditing={isEditingAddress} 
                onEditClick={handleEditAddressClick} 
                onSaveClick={handleSaveAddressClick} 
                setFields={setAddressInfo}
            />
            <ProfileSection 
                ref={securityRef} 
                title="Security" 
                isEditing={isEditingSecurity} 
                onEditClick={handleEditSecurityClick} 
                onSaveClick={handleSaveSecurityClick}
            >
                {isEditingSecurity ? (
                    <div className="flex flex-col space-y-2">
                        <div>
                            <label className="block text-gray-600">New Password:</label>
                            <input
                                type="password"
                                className="border rounded w-full px-2 py-1"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600">Confirm Password:</label>
                            <input
                                type="password"
                                className="border rounded w-full px-2 py-1"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        {passwordError && <p className="text-red-500">{passwordError}</p>}
                    </div>
                ) : (
                    <div className="flex flex-col space-y-2">
                        <p className="text-gray-600">Password: ********</p>
                        <p className="text-gray-600">Two-Factor Authentication: Enabled</p>
                    </div>
                )}
            </ProfileSection>
        </div>
    );
};

const ProfileSection = React.forwardRef(({ title, fields, isEditing, onEditClick, onSaveClick, setFields, children }, ref) => {
    return (
        <div ref={ref} className={`${styles.card} mb-4`}>
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{title}</h3>
                {isEditing ? (
                    <button className="text-blue-500" onClick={onSaveClick}>
                        <i className="fas fa-save"></i> Save
                    </button>
                ) : (
                    <button className="text-blue-500" onClick={onEditClick}>
                        <i className="fas fa-edit"></i> Edit
                    </button>
                )}
            </div>
            {children || (
                <div className="grid grid-cols-2 gap-4">
                    {fields.map((field, index) => (
                        <div key={index}>
                            <p className="text-gray-600">{field.label}:</p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    className="border rounded w-full px-2 py-1"
                                    defaultValue={field.value}
                                    onChange={(e) => {
                                        const updatedFields = [...fields];
                                        updatedFields[index].value = e.target.value;
                                        setFields(updatedFields);
                                    }}
                                />
                            ) : (
                                <p className="text-gray-800">{field.value}</p>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

// Sample data
const personalInfoFields = [
    { label: "Full Name", value: "Arjun Mehta" },
    { label: "Email", value: "arjun.mehta@example.com" },
    { label: "Phone Number", value: "+91 12345 67890" },
    { label: "Birthday", value: "January 1, 1990" },
];

const addressFields = [
    { label: "Address Line 1", value: "123, MG Road" },
    { label: "City", value: "Bengaluru" },
    { label: "State", value: "Karnataka" },
    { label: "Country", value: "India" },
];

const securityFields = [
    { label: "Password", value: "********" },
    { label: "Two-Factor Authentication", value: "Enabled" },
];

export default Settings;
