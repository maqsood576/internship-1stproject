
let users = [
    {
        id: 1,
        name: "Maqsood Ahmed",
        email: "maqsood@example.com"
    },
    {
        id: 2,
        name: "Ali Ahmed",
        email: "ali@example.com"
    }
];

const getAllUsers = () => {
    return users;
};

const getUserById = (id) => {
    return users.find(user => user.id === Number(id));
};

const createUser = (userData) => {
    const newUser = {
        id: users.length > 0
            ? Math.max(...users.map(user => user.id)) + 1
            : 1,
        name: userData.name,
        email: userData.email
    };

    users.push(newUser);

    return newUser;
};

const updateUser = (id, userData) => {
    const user = getUserById(id);

    if (!user) return null;

    user.name = userData.name;
    user.email = userData.email;

    return user;
};

const deleteUser = (id) => {
    const user = getUserById(id);

    if (!user) return null;

    users = users.filter(user => user.id !== Number(id));

    return user;
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
