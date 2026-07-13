// Topic: Password Hashing with bcrypt
// Notes: Never store plain-text passwords in the DB!

const bcrypt = require('bcryptjs');

const hashPassword = async (plainTextPassword) => {
    // Salt rounds determine how heavy the hashing process is (10-12 is standard)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
    console.log("Hashed:", hashedPassword);
    return hashedPassword;
};

const verifyPassword = async (enteredPassword, storedHash) => {
    const isMatch = await bcrypt.compare(enteredPassword, storedHash);
    console.log("Password match:", isMatch);
};

/*
hashPassword('mySecretPassword123').then(hash => {
    verifyPassword('mySecretPassword123', hash);
});
*/
