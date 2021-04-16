// index.js
const express = require('express');
const app = express();
const port = 4000;

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function handleRegister(){} ;
function handleLogin(){};

app.post("/register", (req, res) => {

    // console.log(req.body);

    console.log(req.body);

    const fullName = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirmation = req.body.passwordConfirmation;

    // console.log(
    //     "fullname: ", fullName,
    //     "email: ", email,
    //     "password: ", password,
    //     "passwordConfirmation: ", passwordConfirmation
    // );

    return res.status(200).json({ msg: "Success!"});
});

app.put("/login", (req, res) => {
    return res.status(200).json({ msg: "Success!"});
});

app.listen(port, () => console.log(`Started server at http://localhost:4000!`));