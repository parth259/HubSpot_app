// /* https://www.npmjs.com/package/@hubspot/api-client */
// var request = require("request");

// var options = {
//   method: "GET",
//   url: "https://api.hubapi.com/crm/v3/extensions/cards/",
//   qs: { hapikey: "6a5b28bc-9ed9-4f46-a0cd-fe24c72ff4cc" },
//   headers: { accept: "application/json" },
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });

// //https://app.hubspot.com/oauth/authorize?client_id=11d44da8-b186-4db2-a427-951a3208bff1&redirect_uri=https://contacts-dev-20263607.com&scope=contacts%20tickets

// const headers = {
//   Authorization: `Bearer ${accessToken}`,
//   'Content-Type': 'application/json'
// }

// const result = await request.get(
// 'https://api.hubapi.com/contacts/v1/lists/all/contacts/all?count=1', {
//   headers: headers
// });

const http = require("http");
// var request = require('request');
var url = require("url");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  var initData = {};
  var province = "";
  let reqBodyData = [];
  //fetching data using JSON passed as request Body
  req
    .on("data", (JSONData) => {
      reqBodyData.push(JSONData);
    })
    .on("end", () => {
      reqBodyData = Buffer.concat(reqBodyData).toString();
      initData = JSON.parse(reqBodyData);
      province = initData.results[0].province;
      res.end(
        "<h1>Welcome to the " + getRegion(province) + " user group!</h1>"
      );
    });
});

function getRegion(province) {
  let AtlanticRegion = ["NB", "NS", "PE", "NL"];
  let PrairieRegion = ["AB", "SK", "MB"];
  let EasternRegion = ["ON", "QC"];
  let PacificRegion = ["BC"];
  if (EasternRegion.indexOf(province) > -1) {
    return "Eastern";
  } else if (AtlanticRegion.indexOf(province) > -1) {
    return "Atlantic";
  } else if (PrairieRegion.indexOf(province) > -1) {
    return "Prairie";
  } else if (PacificRegion.indexOf(province) > -1) {
    return "Pacific";
  } else {
    return "N/A";
  }
}

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
