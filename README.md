# API_Practice

# Axios
Library to make HTTP requests.

 # Promises in javascript
The promises object represents the eventual complection(or failure) of an asynchronous operation and it's resulting value.


# work done after fulfilling the promise - try()
# work done after rejecting the promise - catch()


// function savetoDb(data,success,failure){
  
//   let internetSpeed = Math.floor(Math.random()*10)+1;
  
//   if(internetSpeed > 4){
//     success();
//     console.log(data);
//   }else{
    
//     failure();
//     // console.log(data);
//   }
// }

// savetoDb("hariom",()=>{
  
//   console.log("connection successful",);
// },()=>{
  
//   console.log("connection unsuccessful");
// })

function savetoDb(data){
  
  return new Promise((resolve,reject)=>{
    
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
      resolve("data was saved successfully.",data);
    }else{
      
      reject("data wasn't saved successfully");
    }
  })
}

savetoDb({
  name : "hariom singh thakur",
  age : 20,
  height : 5.8
})

# Await keyword 

Pauses the execution of its surrounding async function until the promise is settled (resolved & rejected)

