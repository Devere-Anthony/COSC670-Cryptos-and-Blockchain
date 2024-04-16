const main = async () => {
  console.clear();
  const registrar = await ethers.deployContract("CSEnrollment");
  const [owner, student1, student2, student3, student4, student5, student6] = await ethers.getSigners();

  console.log("-".repeat(50));
  console.log("CASE 1: Student registering for a course (successful)");
  console.log("\nBefore registration...")
  await registrar.getRoster('670');
  await registrar.connect(student1).register(21, 1, '670');
  await registrar.connect(student2).register(31, 1, '670');
  console.log("\nAfter registration...")
  await registrar.getRoster('670');
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 2: Student registering for a course (unsuccessful)");
  console.log("\nBefore registration...")
  await registrar.getRoster('617');
  console.log();
  await registrar.getRoster('431');
  console.log();
  await registrar.connect(student1).register(21, 1, '617');
  await registrar.connect(student3).register(21, 1, '431');
  console.log();
  await registrar.getRoster('617');
  console.log();
  await registrar.getRoster('431');
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 3: Owner adding a course (successful)");
  console.log("\nCurrent courses:");
  await registrar.printCourses();
  await registrar.addCourse('519', 1);
  console.log();
  console.log("After adding course:");
  await registrar.printCourses();
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 4: Owner adding a course (unsuccessful)");
  console.log("Current courses:");
  await registrar.printCourses();
  await registrar.addCourse('519', 1);
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 5: Getting the roster for a course that exists with 0 students");
  await registrar.getRoster('484');
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 6: Getting the roster for a course that exists with more than 0 students");
  console.log("\nAfter adding 3 students to 617");
  await registrar.connect(student4).register(21, 1, '617');
  await registrar.connect(student5).register(40, 1, '617');
  await registrar.connect(student6).register(120, 1, '617');
  await registrar.getRoster('617');
  console.log();

  console.log("-".repeat(50));
  console.log("CASE 7: Getting the roster for a course that does not exist.");
  await registrar.getRoster('404');
  console.log();
  console.log("-".repeat(50));

  // NOTE: Commented code below should fail with an error
  // console.log("-".repeat(50));
  // console.log("CASE 8: Student trying to add a course.");
  // await registrar.connect(student1).addCourse('578', 1);
  // console.log();
  // console.log("-".repeat(50));
};


const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();