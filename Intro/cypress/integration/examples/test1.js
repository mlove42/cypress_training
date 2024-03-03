//cypress - Spec

describe - used to group related tests. it describes the suite of tests
"my first test" - this is the string agrument to the 'describe' function
its a descriptive label for the group of test enclosed by this 'describe' block
describe takes two argurement
argument 1 is the description
argument 2 is a function that wraps all its blockss
describe("My First Test Suite", () => {
    // test cases goes inside the function
    it("My FirstTest case", () => {
        //test step
        // "cy" is a global command which whill help you to invoke any Cypress company\
        // visit allows us to visit any website
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    });
    // it("My Second case", () => {
    //     //test step
    // });
});
// lat one for the house
// describe("my first test"),
//     () => {
//         it("Does not do much!", () => {
//             expect(true).to.equal(true);
//         });
//     };

// describe("My First Test", () => {
//     it("Does not do much!", () => {
//         expect(true).to.equal(true);
//     });
// });
