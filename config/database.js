const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lucasgcabezas:cohort3@cluster0.w98cb.mongodb.net/mytinerary?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))