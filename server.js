const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send( 
        // whatever you want to respond with
        )
});

app.listen(3000, () => {
    console.output("Server is listening on port 3000.");
}
)