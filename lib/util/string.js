String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

getUsernameFromUserEmail = (user) => {
    return user.emails[0].address.split('@')[0];
};
