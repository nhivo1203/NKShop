import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
    isStaff: false,
  },
  {
    name: "User",
    email: "user@example.com",
    password: bcrypt.hashSync("123456", 10),
    isStaff: false,
  },
  {
    name: "nhivo1203",
    email: "vonhi1203@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
    isStaff: true,
  },
];

export default users;
