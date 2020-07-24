// The reasons why its important to use blocks and semi-colons in JS
function testReturn(name) {
    if (name === "John"){
        // Silent Error
        return {
        male: "ok"};
    }else {
        return {male:"You not the one!"};
    }
  } 
  
  console.log(testReturn("John"));