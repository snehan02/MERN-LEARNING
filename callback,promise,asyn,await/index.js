// //callbacks 
// hello(goodbye);
// // goodbye();

// function hello(callback){
//     console.log("hello");
//     callback();

// }
// function goodbye(){
//     console.log("goodbye");

// } 

// sum (displayConsole, 1,2);

// function sum (callback,x,y){
//     let result = x +y;
//     callback (result);
     
// }

// function displayConsole(result){
//      console.log(result);

// }

// function getUser(callback ){
//     setTimeout(() => {
//         callback ({id :1 , name : "sneha"});
//     }, 1000);   
// }

// function getPosts(userId, callback){
//     setTimeout(() => {
//         callback ([
//             {id : 1 , title : "post 1"},
//             {id : 2 , title : "post 2"},
//             {id : 3 , title : "post 3"},
//         ]);
//     }, 1000);
// }

// function getComments (post,callback){
//     setTimeout(() => {
//         callback (["nice","great post,good"]);

//     },1000);

// }
// getUser((user) => {
//     console.log(user);

//     getPosts(user.id, (posts) => {
//         console.log(posts);

//         getComments(posts[0], (comments) => {
//             console.log(comments);
//         });
//     });
// });

// promises
// function getUser(){
//     return new Promise ((resolve) => {
//         setTimeout(() =>{
//             resolve ({id : 1, name: "Sneha"})
//         },1000);
//     });
// }

// function getPost(userId){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["post1" , "post2"]);
//         },1000);
//     });
// }

// function getComments(post) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Nice!", "Great post"]);
//         }, 1000);
//     });
// }
// getUser()
// .then (user => {
//     console.log (user);
//     return getPost(user.id);
// })

// .then (posts => {
//     console.log (posts);
//     return  getComments(posts[0]);
//     })
// .then(comments => {
//         console.log(comments);
//     });

// async and await 
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ({ id :1, name :"Sneha"});
        },1000);
    });
}

function getPost (userId){
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (["post1","post2"]);

        },1000);
    })
}
function getComments(post){
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (["Nice", "greatpost"]);
        },1000);

    })
}

async function showData(){
    const user = await getUser();
    console.log (user);
    const post = await getPost(user.id);
    console.log(post);
    const comment = await getComments(post[0]);
    console.log (comment);

}

showData();