import mongoose from "mongoose";

const connect = () => {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://root:root@localhost:27017/crud-tecsup?authSource=admin",
    
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    );
    const  db = mongoose.connection;
    db.on("error", (error) => console.error(error));
    db.once("open", () => console.log("Connected to Database"));
};

export default connect;