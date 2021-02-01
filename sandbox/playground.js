// const fs = require('fs');

// // const note = {
// //     title: 'ToDo',
// //     body: 'This is a body for ToDo note'
// // }
// // const noteJSON = JSON.stringify(note);  //Convert JSON to string

// //Challenge Solution
// const buffer = fs.readFileSync('playground.json');
// const stringBuffer = buffer.toString();
// const bufferJSON = JSON.parse(stringBuffer);
// bufferJSON.name = 'Dharmaraj';
// bufferJSON.age = 23;
// const stringfyBufferJSON = JSON.stringify(bufferJSON);  //IMP TO WRTIE THE FILE FOR JSON OBJECT!!
// fs.writeFileSync('playground.json',stringfyBufferJSON);

const event = {
    name: 'Birthday Party',
    guestList: ['Dj','Hardik','Boom'],
    printguestlist: function () {
        console.log('Guest List for ' +this.name);

        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + event.name);
        })
    }
}

console.log(event.printguestlist());