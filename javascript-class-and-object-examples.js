<script>
    // var objperson = {fullName: function() {
    // return this.firstName + " " + this.lastName;}}
    // var objperson1 =
    // {firstName:"John", lastName: "Doe"}
    // var objperson2 = { firstName:"Mary", lastName:
    // "Doe"}
    // console.log(objperson.fullName.call(objperson1)); // Will return "John Doe“
    // console.log(objperson.fullName.call(objperson2)); // Will return "Mary Doe"
    // console.log(objperson.fullName.call(this));
    // console.log()


    // "use strict"
    // function person(nm, ag) {
    //     if (this instanceof person) {
    //         this.name = nm;
    //         this.age = ag;
    //         this.speak = function () { return "hello" }
    //         alert(this.constructor)
    //         return this;
    //     }
    //     else
    //         throw new TypeError("Check this is not a function");
    // }
    // person.prototype.display = function () { return "parent classmethod data"; }
    // person.prototype.toString = function () {
    //     return this.name + " " + this.age
    // }


    // let person = function (nm, ag) {
    //     this.name = nm;
    //     this.age = ag;
    //     this.dojob = function () {
    //         document.write("do-=== job hello<br/>");
    //     }
    // }
    // let obj = new person("Raj", 25);
    // obj.dojob()
    // document.write("<hr/>")
    // for (let prop in obj) {
    //     if (typeof obj[prop] =="function")
    //     obj[prop]();
    //     document.write(prop + " " + obj[prop]);
    //     document.write("<hr/>")
    // }

    // "use strict"
    // class Account {
    //     constructor(name, amt) {
    //         this.name = name;
    //         this.balance = amt;
    //         alert(typeof this.constructor)
    //     }
    //     deposit(amt) {
    //         this.balance += amt;
    //     }
    //     display() { return this.name + "  " + this.balance }
    // }
    // var obj1 = new Account("raj", 20000);
    // console.log(obj1.display());
    // document.write(obj1.display());

    // obj1.name = "geeta";
    // console.log(obj1.display());
    // document.write(obj1.display());

    // var obj2 = new Account("Mona", 50000);
    // console.log(obj2);

    // console.log(new Object());
    // document.write(new Object());

    // class Account {

    //     static Id = 1;

    //     constructor(fname, lname, amt) {
    //         // Increment the lastId and assign it to the instance
    //         this.id = Account.Id++;
    //         this.firstname = fname;
    //         this.lastname = lname;
    //         this.balance = amt;
    //     }

    //     set firstname(value) { this._fnm = value; }
    //     get firstname() { return this._fnm; }

    //     set balance(value) { this._bal = value; }
    //     get balance() { return this._bal; }

    //     set lastname(value) { this._lnm = value; }
    //     get lastname() { return this._lnm; }

    //     deposit(amt) { this.balance += amt; }

    //     toString() {
    //         return this.id + " " + this.firstname + "  " + this.lastname + " " + this.balance;
    //     }
    // }

    // class Savingaccount extends Account {
    //     constructor(acctype, fname, lname, amt) {
    //         super(fname, lname, amt);
    //         this.type = acctype;
    //     }

    //     withdraw(amt) {
    //         const minbal = 1000;
    //         if (amt > (this.balance - minbal)) {
    //             throw new TypeError("Insufficient balance!");
    //         }
    //         this.balance -= amt;
    //     }
    // }

    // class Currentaccount extends Account {
    //     constructor(acctype, fname, lname, amt) {
    //         super(fname, lname, amt);
    //         this.type = acctype;
    //     }

    //     withdraw(amt) {
    //         const minbal = 0;  // No minimum balance for current accounts
    //         if (amt > this.balance) {
    //             throw new TypeError("Insufficient funds!");
    //         }
    //         this.balance -= amt;
    //     }


    //     toString() { return this.id + " " + this.firstname + "  " + this.lastname + " " + this.balance }
    // }




    // let savingAccount = new Savingaccount("Sav", "Raj", "Mathur", 2000);
    // console.log(savingAccount.toString());
    // document.write(savingAccount.toString() + "<br>");

    // savingAccount.deposit(2000);
    // document.write(savingAccount.toString() + "<br>");

    // savingAccount.withdraw(1000);
    // document.write(savingAccount.toString() + "<br>");

    // let currentAccount = new Currentaccount("Curr", "Mona", "Sharma", 3000);
    // document.write(currentAccount.toString() + "<br>");

    // currentAccount.deposit(1500);
    // document.write(currentAccount.toString() + "<br>");

    // currentAccount.withdraw(4000);
    // document.write(currentAccount.toString() + "<br>");


    // class ClassWithPrivateMethod {
    //     #privateMethod() {
    //         return "hello world";
    //     }
    //     getPrivateMessage() {
    //         return this.#privateMethod()
    //     }
    // }
    // const instance = new ClassWithPrivateMethod()
    // console.log(instance.getPrivateMessage())
    // console.log()

    class Base {
        static #privateStaticMethod() {
            return 42;
        }
        static publicStaticMethod1() {
            return Base.#privateStaticMethod();
        }
        static publicStaticMethod2() {
            return this.#privateStaticMethod();
        }
    }
    class Derived extends Base { }
    console.log(Derived.publicStaticMethod1());
    console.log(Base.publicStaticMethod2());

</script>
