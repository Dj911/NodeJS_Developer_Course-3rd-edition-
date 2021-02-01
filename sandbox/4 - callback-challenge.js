const geocode= (address,callback)=>{
    setTimeout(()=>{
        const tempData={
            latitude: 0,
            longitude: 0
        }
        callback(tempData);
    },2000)
};
setTimeout(()=>{
    console.log('3 sec');
},3000)
geocode('Bhuj',(data)=>{
    console.log(data);
})

const add=(x,y,callback)=>{
    setTimeout(()=>{        
        callback(x+y);
    },2000)
};

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})