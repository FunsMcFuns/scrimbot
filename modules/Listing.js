const Entry = require(`./Entry`);

class Listing {

    constructor(){
        // Array pf entry's
        this.data = Array();

        // All the useres
        this.users = Array();
    }

    // Check to see if user is already present
    userPresent(username){
        console.log("userPresent called");

        if (this.users.length > 0){
            for (var i =0; i < this.users.length; i++){
                if (this.users[i] === username){
                    return true;
                }
            }
        }
        return false;
    }

    // Check to see if id is present
    idPresent(id){
        console.log("idPresent Called");

        if (this.data.length > 0){
            for(var i = 0; i < this.data.length; i++){
                if (this.data[i].id === id){
                    return true;
                }
            }
        }
        return false;
    }

    addUser(id,username){
        console.log("addUser called");

        for (var i = 0; i < this.data.length; i++){
            if (this.data[i].id === id){
                this.data[i].users.push(username);
                this.users.push(username);
                return;
            }
        }
    }

    // New id
    addID(id, username){
        console.log("newID called");
        this.data.push(new Entry(id,username));
        this.users.push(username);
    }


    // Find and delete username from users array
    deleteUser(username){
        console.log("deleteUser called");

        for (var i = 0; i < this.users.length; i++){
            if (this.users[i] === username){
                let tmp = this.users[i];
                this.users[i] = this.users(0)
                this.users[0] = tmp;
                this.users.shift();
                return;
            }
        }
    }


    // Deletes user ID
    deleteUserEntry(username){
        console.log("deleteUserEntry called");

        if (this.data.length > 0 && this.users.length > 0){
            //Delete the entry when only one id and username is found
            if (this.data.length === 1 && this.data[0].users.length === 1 && this.data[0].users[0] === username){
                this.data.pop();
                this.users.pop();
            } else {
                for (var i = 0; i < this.data.length; i ++){
                    if (this.data[1].users.length > 0){
                        for (var j = 0; j < this.data[i].users.length; j++){
                            if (this.data[i].users[j] === username && this.data[i].users.length > 1){
                                let tmp = this.data[i].users[j];
                                this.data[i].users[j] = this.data[i].users[0];
                                this.data[i].users[0] = tmp;

                                let deletedUser = this.data[i].users.shift();
                                console.log("User deleted: " + deletedUser);
                                this.deleteUser(username);
                                return;
                            } else (this.data[i].users.length === 1 && this.data[i].users[0] === username);{
                                let tmp2 = this.data[i];
                                this.data[i]=this.data[0];
                                this.data[0] = tmp2;

                                let deletedID = this.data.shift();
                                console.log(`deleted id : ${deletedID}`);
                                this.deletedUser(username);
                                return;
                            }                               
                            }

                      }

                  }
             }
         }
     }
      // Sorts entrys with most users      
     sort() {
         if (this.data.length >= 2){
             for (var i = 0; i < this.data.length - 1; i++){
                 for (var j = i + 1; j < this.data.length; j++){
                     if (this.data[i].users.length < this.data[j].users.length){
                         let tmp = this.data[i];
                         this.data[i] = this.data[j];
                         this.data[j] = tmp;
                     }
                 }
             }
         }
     }



}

    











module.exports = Listing;
