const googlecal = require("./"); // require("node-googlecal")
console.log(googlecal({ title: "Hello World", location: "Google Seattle" }));
console.log(googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase" }));
console.log(googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase", dateStart: "20190808T170000Z", dateEnd: "20190808T173000Z" }));
console.log(googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase", dateStart: "20190808T170000Z", dateEnd: "20190808" }));