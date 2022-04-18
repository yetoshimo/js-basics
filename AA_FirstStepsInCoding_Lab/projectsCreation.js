function projectsCreation(input) {
    let architectName = input[0];
    let numberOfProjects = input[1];
    let hoursPerProject = 3;
    let neededHours = numberOfProjects * hoursPerProject;
    console.log(`The architect ${architectName} will need ${neededHours} hours to complete ${numberOfProjects} project/s.`);
}

projectsCreation(["George","4"])
