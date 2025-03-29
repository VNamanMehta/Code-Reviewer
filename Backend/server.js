import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config()

app.listen(3002, () => {
    console.log('Server is running on port 3002');
})