//Packages needed for this application
const inquirer=require("inquirer");
const fs=require("fs");
//
var collaborationAgreed=""
const intro = "Welcome to the Professional Readme Generator, because no one can read your mind :)"

// Installation, Usage, License, Contributing, Tests, and Questions
//Array of questions for user input
const questions = 
["What is your project tittle?:",
 "Enter a brief description of you application (always include the objective of it): ",
 "How can the user access to your app?: ",
 "Enter a brief description of the usage of this project",
 "Please enter a link with a demo of your app: ",
 "Are you open to collaboration?: ",
 "Select from the choices listed below the licence of your project",
 "Please enter your email",
 "Please enter your GitHub username"]

//Function to initialize app
function init() {
 console.log(intro)
     //Inquirer method
 inquirer.prompt([
    {
        type:"input",
        name:"tittle",
        message:questions[0]
    },
    {
        type:"input",
        name:"description",
        message:questions[1]
    },
    {
        type:"input",
        name:"run",
        message:questions[2]
    },
    {
        type:'input',
        name:'usage',
        message:questions[3]

    },
    {
        type:'input',
        name:'demo',
        message:questions[4]

    },
    {
        type:"list",
        name:"collaboration",
        message:questions[5],
        choices:['Yes', 'No'],
    },
    {
        type:"input",
        name:"licenses",
        message:questions[6],
        choises:['ISC','CC','MIT','GNU','None'],
    },
    {
        type:'input',
        name:'email',
        message:questions[7]

    },
    {
        type:'input',
        name:'gitHub',
        message:questions[8]

    }

]).then(answers=>{
    if (answers.choises==="Yes"){
        collaborationAgreed="Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.Please make sure to update tests as appropriate."
        console.log(collaborationAgreed)
    }
    else {
       collaborationAgreed="No collaboratios allowed"
       console.log(collaborationAgreed)
    }   
 console.log(answers.title,answers.description, answers.run, answers.usage, answers.demo, collaborationAgreed, answers.licenses.choises, answers.email, answers.gitHub);
    
    const readMe=`
 #${answers.tittle}

 ## Description:
 ${answers.tittle}

 ## How to access to the app?:
 ${answers.run}

 ## How to use it?:
 ${answers.usage}

 ## Demo
 ${answers.demo}
 
 ## Contributing
 ${collaborationAgreed}

 ## Licenses:
 ${answers.licenses}

 ## Do you have any questions? comments?
 Please contact me:
 ${answers.email} | ${answers.gitHub}
 `
  console.log(readMe)

 // TODO: Create a function to write README file
fs.writeFile("README.md", readMe, function(error) {
    if (error){
        console.log("There was an error writing the read me file")
    }
    else {

    }
})
  })
}

// Function call to initialize app
init();
