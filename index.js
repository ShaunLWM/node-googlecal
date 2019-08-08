const qs = require("querystring");

module.exports = function ({ dateStart = null, dateEnd = null, title = null, location = null, description = null }) {
    function matchDate(str) {
        return (str.match(/(\d{8})T(\d{6})Z/)) !== null;
    }

    let opts = {};
    let msg = {
        "error": "",
        "url": ""
    };

    if (dateStart !== null && dateEnd !== null) {
        if (!matchDate(dateStart) || !matchDate(dateEnd)) {
            msg["error"] = "dateStart/dateEnd is in wrong format (Correct example: 20190808T170000Z)";
        } else {
            opts["dates"] = `${dateStart}/${dateEnd}`;
        }
    }

    if (title !== null) opts["text"] = title;
    if (location !== null) opts["location"] = location;
    if (description !== null) opts["details"] = description;
    msg["url"] = `https://calendar.google.com/calendar/r/eventedit?${qs.stringify(opts)}`;
    return msg;
};