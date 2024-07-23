const person = {
    firstName: "Viggo",
    lastName: "Mortensen",
    // fullName: function(){
    //     return `${this.firstName} ${this.lastName}`
    // }
    fullNmae: function() {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(()=>{
            console.log(this);
            console.log(this.fullNmae())
        }, 3000)
    }
}