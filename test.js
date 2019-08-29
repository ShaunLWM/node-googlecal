const googlecal = require("./"); // require("node-googlecal")
const assert = require("assert");

describe("Google Calendar Tests", function () {
    it("should return link with location only", function () {
        let cal = googlecal({ title: "Hello World", location: "Google Seattle" });
        assert.strictEqual(cal["error"], "");
        assert.strictEqual(cal["url"], "https://calendar.google.com/calendar/r/eventedit?text=Hello%20World&location=Google%20Seattle");
    });

    it("should return link with location and description", function () {
        let cal = googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase" });
        assert.strictEqual(cal["error"], "");
        assert.strictEqual(cal["url"], "https://calendar.google.com/calendar/r/eventedit?text=Hello%20World&location=Google%20Seattle&details=Join%20us%20for%20a%20wonderful%20evening%20about%20Firebase");
    });

    it("should return link with location, description & time", function () {
        let cal = googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase", dateStart: "20190808T170000Z", dateEnd: "20190808T173000Z" });
        assert.strictEqual(cal["error"], "");
        assert.strictEqual(cal["url"], "https://calendar.google.com/calendar/r/eventedit?dates=20190808T170000Z%2F20190808T173000Z&text=Hello%20World&location=Google%20Seattle&details=Join%20us%20for%20a%20wonderful%20evening%20about%20Firebase");
    });

    it("should have time error message", function () {
        let cal = googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase", dateStart: "2019-12-10", dateEnd: "2019-12-12" });
        assert.strictEqual(cal["error"], "dateStart/dateEnd is in wrong format (Correct example: 20190808T170000Z)");
        assert.strictEqual(cal["url"], "https://calendar.google.com/calendar/r/eventedit?text=Hello%20World&location=Google%20Seattle&details=Join%20us%20for%20a%20wonderful%20evening%20about%20Firebase");
    });
});