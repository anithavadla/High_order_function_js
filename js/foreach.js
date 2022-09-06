Array.prototype.myForEach = function(number) {
     for(let i=0; i<this.length; i++) {
         number(this[i], i)
     }
};

[1,2,3,4,5].myForEach(function(val, i){
    console.log(val);
});