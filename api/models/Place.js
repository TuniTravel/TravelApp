const mongoose= require('mongoose');

const PlaceScheema=new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId,ref:'User'},
    title: String,
    address: String,
    photos: [String],
    description: String,
    checkIn: Number,
    xhechOut: Number,
    maxGuests: Number,
});

const PlaceModel=mongoose.model('Place',PlaceScheema);
module.exports=PlaceModel;