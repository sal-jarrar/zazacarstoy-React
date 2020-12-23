import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sultan Jarrar',
    email: 'sultan@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Hala Alkurdi',
    email: 'hala@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
