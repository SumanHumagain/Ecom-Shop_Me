import Bcrypt from 'bcryptjs';

const users = [
    {
        name: 'admin',
        email: 'admin@me.com',
        password: Bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'user',
        email: 'user@me.com',
        password: Bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'user2',
        email: 'user2@me.com',
        password: Bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
];

export default users;