const mongoose = require("mongoose");

try {
  mongoose.connect(
    "mongodb+srv://mario:Mario2020**@cluster0.9b3bq.mongodb.net/kalbobyDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  );
  console.log("MongoDB IS CONNECTED");
} catch (error) {
  console.log(error);
  console.log("Hello FROM DB ERROR");
}
