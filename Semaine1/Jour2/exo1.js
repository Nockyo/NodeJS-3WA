const fs = require('fs');

// fs.readFile('./students.txt', 'utf8', (err, data) => {
//     if(err) {
//         process.stdout.write(err.message);
//         process.exit(0);
//     }

//     console.log("ASYNC", data);
// });

let arrayStudent = []

// fs.readFileSync('./students.txt', 'utf8', (err, data) => {
//     if(err) {
//         process.stdout.write(err.message);
//         process.exit(0);
//     }

//     console.log("SYNC", data)
// });

let data = "";

try {
    data = fs.readFileSync('./students.txt', 'utf8');
    console.log("readFile 1")
} catch (error) {
    console.log(error)
}

try {
    fs.writeFileSync('students.txt', data);
    console.log("file updated");
} catch (error) {
    if(err) throw err;
}

fs.readFile('./students.txt', 'utf8', (err, data) => {
    if(err) {
        process.stdout.write(err);
        process.exit(0);
    }

    let firstArray = data.split("\r\n");
    firstArray.shift();
    let students = [];
    firstArray.map(value => {
        let student = value.split(" ");
        students.push({
            note : student[0],
            name : student[1].toUpperCase(),
            city :  student[2],
        });
    });

    let result1 = students.filter(student => student.note > 17);

    console.log(students)

    let result2 = students.sort(function (a, b) {
        return a.note - b.note;
    });
    result2 = result2[result2.length - 1];
});

// data += "\r\n18 Sonia Paris\r\n17 Clarisse Marseille";

