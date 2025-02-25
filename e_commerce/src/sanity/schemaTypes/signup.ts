const userSchema = {
  name: "user",
  title: "User",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
    },
    {
      name: "password",
      title: "Password",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "state",
      title: "State",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "zip",
      title: "ZIP Code",
      type: "string",
    },
    {
      name: "dob",
      title: "Date of Birth",
      type: "date",
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
    },
    {
      name: "profilePic",
      title: "Profile Picture",
      type: "image"
    },
    {
      name: "cardNumber",
      title: "Card Number",
      type: "string"
    },
    {
      name: "expiryDate",
      title: "Expiry Date",
      type: "date"
    },
    {
      name: "cvv",
      title: "CVV",
      type: "string"
    },
    {
      name: "upiId",
      title: "Upi Id",
      type: "string"
    },
    {
      name: "wallet",
      title: "Wallet",
      type: "string"
    },
  ],
};

export default userSchema;

  