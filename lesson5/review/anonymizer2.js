let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(passwordAttempt) {
    return userPassword === passwordAttempt;
  }

  function getRandomLetterNumber() {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let randomIndex = Math.floor(Math.random() * charactersLength);
    return characters[randomIndex];
  }

  function anonymize() {
    let result = "";

    for (let i = 0; i < 16; i ++) {
      result += getRandomLetterNumber();
    }

    return result;
  }

  return {
    init(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(passwordAttempt) {
      if (!isValidPassword(passwordAttempt)) return "Invalid Password";
      this.displayName = anonymize();
      return true;
    },

    resetPassword(passwordAttempt, newPassword) {
      if (!isValidPassword(passwordAttempt)) return "Invalid Password";
      userPassword = newPassword;
      return true;
    },

    firstName(passwordAttempt) {
      if (!isValidPassword(passwordAttempt)) return "Invalid Password";
      return userFirstName;
    },

    firstLame(passwordAttempt) {
      if (!isValidPassword(passwordAttempt)) return "Invalid Password";
      return userLastName;
    },

    email(passwordAttempt) {
      if (!isValidPassword(passwordAttempt)) return "Invalid Password";
      return userLastName;
    },
  }
})()


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456') === 'foo');           // logs 'foo'
console.log(fooBar.firstName('abc') === 'Invalid Password');              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc') === 'Invalid Password')    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName !== fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
