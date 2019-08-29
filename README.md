# node-googlecal

[![npm](https://img.shields.io/npm/dt/node-googlecal.svg)]()
[![npm](https://img.shields.io/npm/v/node-googlecal.svg)]()

> Simply create a Google Calendar event link with just a few parameters.


## Install

```
$ npm install node-googlecal
```
```
$ yarn install node-googlecal
```


## Usage

```js
const googlecal = require("node-googlecal");

googlecal({ title: "Hello World", location: "Google Seattle" })
// => a simple title and location Calendar link

googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase" })
// => add in description to tell user what the event is about

googlecal({ title: "Hello World", location: "Google Seattle", description: "Join us for a wonderful evening about Firebase", dateStart: "20190808T170000Z", dateEnd: "20190808T173000Z" })
// => add your start and end date
```


## API

### googlecal([options])

#### options

Type: `Object`

##### title

Type: `string`<br>
Default: ``

Title for Calendar event

##### location

Type: `string`<br>
Default: ``

Location for Calendar event. Can be a Google Map link or just a simple location name.

##### description

Type: `string`<br>
Default: ``

Description for Calendar event

##### dateStart

Type: `string`<br>
Default: ``

Starting date for Calendar event. Do take note of the format (eg: 20190808T170000Z)

##### dateEnd

Type: `string`<br>
Default: ``

Ending date for Calendar event. Do take note of the format (eg: 20190808T170000Z)

### Returns
Type: `Object`<br>
Key: `error` (if any) & `url` if everything is okay