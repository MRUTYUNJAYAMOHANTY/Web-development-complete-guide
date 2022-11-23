// ES5 -> Callback
// ES6 -> Promise
// ES7 -> async & await

const showPosts = async () => {
    const response = await fetch('https://API END POINT/');
    const posts = await response.json();
    console.log(posts,'async');
   }
   
   showPosts();