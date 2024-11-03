// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        if (!this.name){
            console.log("No name entered")
        } else {
            console.log(`Hi, my name is ${name} and my favorite tech is ${tech}`)
        }
    }
};
Developer("Ian", "AI")
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor
const ian = new Developer("Ian", "AI")
// TODO: Call the 'introduction()' method on the new object
ian.introduction();
