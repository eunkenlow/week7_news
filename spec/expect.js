var expect = {
  isTrue: function(expectToCheck) {
    if (!expectToCheck) {
      throw new Error("Unit test: Expect failed: " + expectToCheck + " is not truthy");
    }
    else {
      console.log("Unit test: Congrats, you passed!");
    }
  }
};
