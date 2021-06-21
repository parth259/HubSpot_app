/* https://www.npmjs.com/package/@hubspot/api-client */
var request = require("request");

var options = {
  method: "GET",
  url: "https://api.hubapi.com/crm/v3/extensions/cards/",
  qs: { hapikey: "6a5b28bc-9ed9-4f46-a0cd-fe24c72ff4cc" },
  headers: { accept: "application/json" },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

//https://app.hubspot.com/oauth/authorize?client_id=11d44da8-b186-4db2-a427-951a3208bff1&redirect_uri=https://contacts-dev-20263607.com&scope=contacts%20tickets
