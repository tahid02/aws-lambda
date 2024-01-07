import express from "express";
import cors from "cors";
import fetch from "node-fetch";
const app = express();
app.use(cors());

///////////////
app.get("/formula", async (req, res) => {
    console.log("hello", req.params.formula);
    const formula = req.params.formula;
    fetch(
        `https://api.airtable.com/v0/appXVGqKkJSZDvYp4/tblNgb2XIhEuq4DJE?filterByFormula=${formula}`,
        {
            headers: {
                Authorization: `Bearer `, // client will provide this
            },
        },
    )
        .then((response) => response.json())
        .then(async (data) => {
            console.log(data);

            res.json(data);
        });
});

