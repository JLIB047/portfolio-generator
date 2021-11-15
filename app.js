const profileDataArgs = process.argv.slice(2, process.argv.length);
const [user, github] = profileDataArgs;
const fs = require('fs');

/*const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1){
        console.log(profileDataArr[i]);

    }
    console.log('=========');

    profileDataArr.forEach(profileItem => console.log(profileItem));

}  

printProfileData(profileDataArgs);*/

const generatePage = (user, github) => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${user}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
    `;
}


fs.writeFile('index.html', generatePage(user, github), err => {
    if(err) throw err;

    console.log('Portfolio complete! Check out index.html to see the output!');
})