// const tinderuser = new Object()


const regularUser = {
    email: "abhimanyu@code.com",
    fullname: {
        userfulname: {
            title: "raam",
        },
    },
};

// console.log(regularUser.fullname.userfulname.title);
// console.log(regularUser.fullname.us);

// const object1 = {
    //     1:"a",
    //     2:"b",
    //     3:"c"
    // }
    //  const object2 = {
        //     4:"a",
        //     5:"b",
        //     6:"c"
        // }
        // const obj3 ={...object1,...object2}
        
        // console.log(obj3)
        
        const users = [
            {
                id :1,
                name:"raam"
            }, 
            {
                id :1,
                name:"raam"
            }, 
            {
                id :1,
                name:"raam"
            }
        ]



        const tinderuser = {};
        // console.log(tinderuser)
        tinderuser.id = "123abc";
        tinderuser.name = "Raju";
        tinderuser.isLoggedIn = false;
        users[1].id
        console.log(tinderuser)

        console.log(Object.keys(tinderuser))

        console.log(Object.values(tinderuser))
        console.log(Object.entries(tinderuser))