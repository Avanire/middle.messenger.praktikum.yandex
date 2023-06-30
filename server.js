const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist/'));

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}!`);
});
