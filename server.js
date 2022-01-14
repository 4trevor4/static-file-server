// create an express server on port 3001
const express = require('express');
const path = require('path');
const app = express();
const port = 80;


// create a route to handle the request
app.get("/loaderio-620aabcbb3b4afc54647952ae4a8f3d0.txt", (req, res, next) => {
  const options = {
    root: path.join(__dirname),
  };

  const fileName = "loaderio-620aabcbb3b4afc54647952ae4a8f3d0.txt";
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});


// start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);


