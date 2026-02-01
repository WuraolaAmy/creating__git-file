class User{
    constructor(name, role){
        this.name = name
        this.role = role
        this.loginCount = 0
    }
login(){
        this.loginCount+=1;
        return this.loginCount;
    }
getinfor(){
        return `user ${this.name}, ${this.role} has logged in 
        ${this.loginCount} times`;
    }
}
class Admin extends User{
    constructor(name, role, username){
        super(name, role)
        this.username = username
    }
deleteUser(username){
    return `User ${username} deleted`;
}
}
let userSytem = new User("Alice", "Admin");
console.log(userSytem.login());
console.log(userSytem.login());
console.log(userSytem.login())
console.log(userSytem.getinfor());

let User1 = new Admin("Amina", "Admin", "amina1234");
console.log(User1.deleteUser("amina1234"));
