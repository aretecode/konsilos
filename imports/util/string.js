const capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

const getUsernameFromUserEmail = user => user.emails[0].address.split('@')[0];

export { capitalizeFirstLetter, getUsernameFromUserEmail };
