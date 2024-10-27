
# Object Manipulation in JavaScript

## 1. Pag-create ng Object
Para gumawa ng object, pwede mong gamitin ang curly braces `{ }` at ilagay ang key-value pairs.

```javascript
const user = {
  name: "Juan",
  age: 25,
  location: "Manila"
};
```

**Explanation**: `user` ay isang object na may properties na `name`, `age`, at `location`.

## 2. Pag-access ng Values sa Object
Pwede mong i-access ang values gamit ang dot notation `.` o bracket notation `[]`.

```javascript
console.log(user.name); // Output: Juan
console.log(user["location"]); // Output: Manila
```

**Explanation**: Sa dot notation, gamitin mo `user.name`, pero sa bracket notation kailangan ng quotes sa loob ng brackets.

## 3. Pag-update ng Values
Pwede mo rin i-update ang properties ng object.

```javascript
user.age = 26;
console.log(user.age); // Output: 26
```

**Explanation**: Madali lang mag-update!

## 4. Pagdagdag ng Bagong Property
Mabilis na makakapagdagdag ng bagong property sa object.

```javascript
user.email = "juan@example.com";
console.log(user.email); // Output: juan@example.com
```

**Explanation**: Gamitin mo lang ang `objectName.propertyName = value;` para makapag-add.

## 5. Pag-delete ng Property
Pwede mo rin i-delete ang property sa object.

```javascript
delete user.location;
console.log(user.location); // Output: undefined
```

**Explanation**: Gamitin mo lang ang `delete objectName.propertyName;` para matanggal ang property.

## 6. Object Destructuring
Isang shortcut para kunin ang values ng properties nang sabay-sabay.

```javascript
const { name, age } = user;
console.log(name); // Output: Juan
console.log(age);  // Output: 26
```

**Explanation**: Ang destructuring ay nagbibigay-daan para mabilisang makuha ang properties sa isang variable.

## 7. Pag-merge ng Objects
Pwede mong pagsamahin ang dalawa o higit pang objects gamit ang `Object.assign` o spread operator.

```javascript
const additionalInfo = {
  gender: "Male",
  occupation: "Developer"
};
const fullUser = { ...user, ...additionalInfo };
console.log(fullUser);
```

**Explanation**: Gamitin ang spread operator `...` para i-merge ang objects.

## 8. Pag-iterate sa Properties ng Object
Maaari mong i-loop ang properties ng object gamit ang `for...in` loop.

```javascript
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

**Explanation**: Ang `for...in` loop ay ginagamit para mag-iterate sa lahat ng properties ng object.

## 9. Pag-check ng Property
Maaari mong i-check kung mayroon bang property sa object gamit ang `in` keyword.

```javascript
console.log("email" in user); // Output: true
console.log("phone" in user); // Output: false
```

**Explanation**: Ang `in` keyword ay nagbabalik ng `true` kung ang property ay umiiral sa object.

## 10. Pag-clone ng Object
Mabilis na makakagawa ng clone ng object gamit ang `Object.assign` o spread operator.

```javascript
const userClone = { ...user };
console.log(userClone);
```

**Explanation**: Gamitin ang spread operator para gumawa ng shallow copy ng object.

