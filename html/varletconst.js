function letTest() {
    let x = 1;
    const NAMES = ["Bob", "Job", "Bugda"]
    NAMES.push("Alex");
    // const NAMES = ["Jeet", "Khushi"];
    // var
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

