// let jsonData = '{"fact":"Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.","length":91}';


// let validdata = JSON.parse(jsonData);

// console.log(validdata);


// const object = {

//     name : "hariom singh thakur",
//     age : 20,
//     height : 5.8,
//     city : "hatta"
// }

// let stringJson = JSON.stringify(object);
// console.log(stringJson);

const url = "https://catfact.ninja/facat";


// fetch(url).then((response) => {

//     console.log(response);
//     response.json().then((data)=>{

//         console.log(data);
//     })
// }).catch((error) => {

//     console.log(error);
// })

// fetch(url).then((res)=>{

//     return res.json();
// }).then((data1)=>{

//     console.log("data1 = ",data1.fact);
//     return fetch(url);
// }).then((res)=>{

//     return res.json();
// }).then((data2)=>{

//     console.log("data2 = ",data2);
// })

async function getJokes() {

    try {
        let res = await fetch(url);
        let data = res.json();
        data.then((d) => {

            console.log(d);
        }).catch((e) => {
            console.log(e);
        })

        let res2 = await fetch(url);
        let data2 = res2.json();
        data2.then((d2) => {
            console.log(d2);
        }).catch((e2) => {
            console.log(e2);
        })

        let res3 = await fetch(url);
        let data3 = res3.json();
        data3.then((d3) => {
            console.log(d3);
        }).catch((e3) => {
            console.log(e3);
        })
        // console.log(data2);
    } catch (error) {
        console.log(error);
    }
}

getJokes();
