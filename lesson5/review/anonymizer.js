let Account = {
  // user: {},
  init(email, password, firstName, lastName) {
    this.user = {
      email,
      password,
      firstName,
      lastName,
    }
    this.reanonymize(this.user.password);
    return this;
  },
  reanonymize(passwordAttempt) {
    if (passwordAttempt !== this.user.password) return "Invalid Password"
    let displayName = '';

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    const displayNameLength = 16;
    for ( let i = 0; i < displayNameLength; i++ ) {
        displayName += characters.charAt(Math.floor(Math.random() * charactersLength));
    }


    this.displayName = displayName;
    return true;
  },
  resetPassword(passwordAttempt, newPassword) {
    if (passwordAttempt !== this.user.password) return "Invalid Password"
    this.user.password = newPassword;
    return true;
  },
  firstName(passwordAttempt) {
    if (passwordAttempt !== this.user.password) return "Invalid Password"
    return this.user.firstName;

  },
  lastName(passwordAttempt) {
    if (passwordAttempt !== this.user.password) return "Invalid Password"
    return this.user.lastName;
  },
  email(passwordAttempt) {
    if (passwordAttempt !== this.user.password) return "Invalid Password"
    return this.user.email;
  },
}

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false
