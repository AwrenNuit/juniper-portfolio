const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const PORT = process.env.PORT || 5000;
const artRoute = require(`./routes/artRoute`);

app.use(express.static(`server/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(`/portfolio`, artRoute);

app.listen(PORT, ()=>{
    console.log('server up on', PORT);
});