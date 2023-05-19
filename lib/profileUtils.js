export const PROFIILE_PARAMS = [
    {
        columnTitle: "Full Name",
        key: "name",
        getValue: (profile) => `${profile.name.first} ${profile.name.last}`,
    },
    {
        columnTitle: "Age",
        key: "age",
        getValue: (profile) => profile.dob.age,
    },
    {
        columnTitle: "Email",
        key: "email",
        getValue: (profile) => profile.email,
    },
    {
        columnTitle: "Image",
        key: "image",
        getValue: (profile) => profile.picture.thumbnail
    },
    {
        columnTitle: "Number",
        key: "number",
        getValue: (profile) => profile.phone
    },
    {
        columnTitle: "Gender",
        key: "gender",
        getValue: (profile) => profile.gender
    },
    {
        columnTitle: "Location",
        key: "location",
        getValue: (profile) => `${profile.location.city}, ${profile.location.country}`
    },
];

export const generateProfile = (profileResult) => {
    const profile = {};
    PROFIILE_PARAMS.forEach(({ key, getValue }) => {
        profile[key] = getValue(profileResult);
    });
    return profile;
};
