import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: { type: String, default: "https://picsum.photos/350" },
    cuisines: { type: String, required: true },
    city: { type: String, default: "Anytown" },
    state: { type: String, default: "USA" },
    founded: {
        type: Number,
        min: [1673, " Surely not that old?!"],
        max: [new Date().getFullYear(), "Please use a valid year!"],
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

placeSchema.methods.showEstablished = function () {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`;
};

const Place = mongoose.model("Place", placeSchema);

export default Place;
