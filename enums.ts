enum direction {
  up,
  down,
  left,
  right = 6,
}

let direct = direction.down;

console.log(direct); //1
console.log(direction.right); //6
console.log(direction[2]); //left

enum stringy {
  up = "بالا",
  down = "پایین",
  left = "چپ",
  right = "راست",
}

console.log(stringy.left); //چپ
console.log(stringy); //بالا پایین چپ راست

enum heterogeneous {
  No = 0,
  Yes = "yes",
}

console.log(heterogeneous[0]); //No
console.log(heterogeneous.No); //0
console.log(heterogeneous.Yes); //yes

enum roles {
  User = "user",
  Admin = "admin",
  Contentcreator = "content-creator",
}

const User1 = {
  name: "amir",
  age: 21,
  role: roles.User,
};

console.log(User1); //{name:'amir', age:21, role:'user'}
