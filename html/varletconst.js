function letTest() {
    let x = 1;
    const NAMES = ["Bob", "Job", "Bugda"]
    NAMES.push("Alex");
    // Creating a const with similar name i.e reassigning the name will throw an error
    // const NAMES = ["Jeet", "Khushi"];
    // OR 
    // const NAMES = function(){
    //   return "This will throw an error, since its been reassigned."
    // }

    // var
    // Var will not throw any error
    // This is because its global scoped
    var names = ["Bob", "Job", "Bugda"]
    var names = ["Jeet", "Khushi"];

    {
      let x = 2;  // different variable
      console.log("this is of x in block:" + x);  // 2
    }
    // console.log("this is of x out of block:" + x);  // 1
    console.log(NAMES)
  }
  console.log(letTest())

//   console.log(typeof(this))

// NOTE: There is a total difference in behavior between a globally scoped
// vaiable i.e var and a function scoped or even a block scoped variable e.g
// function const and let.

