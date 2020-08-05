class User{

    constructor(){
        this.name = null
        this.index = null 
    }

    update(){
        var userIndex ="users/user"  + this.index ;
        database.ref(userIndex).set({
            name : this.name
        })
      
    }        
    
    getUserCount(){
        var getuserRef = database.ref("userCount");
        getuserRef.on("value" , (data)=>{
            userCount = data.val();
        });
    }

    updateUserCount(count){
        database.ref("/").update({
        })
    }

    static getuserInfo(){
        var userInforef=database.ref("users");
        userInforef.on("value",data=>{
            allUsers = dataa.val();
        })
    }
}