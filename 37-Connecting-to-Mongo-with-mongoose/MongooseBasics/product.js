const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log("connection open!!!")
    })
    .catch(err => {
        console.log("OH NOOO ERRORRR!!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required:true,
        min:[0, "Price must be positive ya dodo!"]
    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories:{
        type:[String],
        default: ["Cycling"]
    },
    qty:{
        online:{
            type:Number,
            default:0
        },
        inStore:{
            type:Number,
            default:0
        }
    },
    size:{
        type:String,
        enum: ["S", "M", "L"]
    }
})

// productSchema.methods.greet = function(){
//     console.log("EHllo!!! hi!!!")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save()
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save()
}

productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:true, price:0})
}

const Product = mongoose.model("Product", productSchema);

const findProduct = async()=>{
    const foundProduct = await Product.findOne({name:"Bike Helmet"})
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory("Outdoors")
    console.log(foundProduct)
}
// findProduct();

Product.fireSale().then(res=>console.log(res))

// const bike = new Product({name:"Cycling Jersey", price: 28.5, categories: ["Cycling"], size:"XS"})
// bike.save()
// .then(data=>{
//     console.log("It worked!")
//     console.log(data)
// })
// .catch(err=>{
//     console.log("oh no error!!!!")
//     console.log(err)
// })

// Product.findOneAndUpdate({name:"Tire Pump"}, {price:-19.99},{new:true, runValidators:true})
// .then(data=>{
//     console.log("It worked!")
//     console.log(data)
// })
// .catch(err=>{
//     console.log("oh no error!!!!")
//     console.log(err)
// })