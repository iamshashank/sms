const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT|3000;
var accountSid = 'AC2ef950645e3538bc368e250c75535690';
var authToken = '50dc8a6c16592e48c1c22d33c4268acc';

//require the Twilio module and create a REST client
var app = express();
app.get('/:mob', (req, res) => {
  //var body = _.pick(req.body, ['mob']);

  console.log(req.params.mob);

var client = require('twilio')(accountSid, authToken);
client.messages.create({
    to: req.params.mob,
    from: "+16182055802",
    body: "Test",
}, function(err, message) {
  //  console.log(message.sid);
});
res.send();
});



app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
