class ResizableArray {
    constructor(){
       this.arr = [0, 0];
       this.capacity = 2; 
       this.size = 0; 
    }

    push(x){
        if(this.size<this.capacity){
            this.arr[this.size] = x;
            this.size++
        }else {
            //creating double the size of capacity
            let newArr = new Array(this.capacity*2)
            // copy the actuall arr values 
            for(let i= 0; i<this.size; i++){
                newArr[i]= this.arr[i]
            }

            this.capacity*=2;
            newArr[this.size] = x;
            this.size++;
            //destroy the older array
            this.arr = newArr
        }
    }

    getSize(){
        return this.size
    }

    get(x){
        return this.arr[x]
    }

    pop(){
        this.arr.pop();
        return this.size--;
    }
}


arr = new ResizableArray(); 

arr.push(10)
arr.push(20)
arr.push(30)
arr.push(40)
arr.push(50)

//o(n)  //o(1)


for(let i=0; i<arr.getSize() ; i++){
    console.log(arr.get(i))
}