var linkedInUser = require('../model/linkedin');

function handle_request(msg, callback) {
    console.log("Connected!");
    var username = msg.username;
    var password = msg.password;
    console.log(msg);
    var res = {};
    console.log("linkedInUser",linkedInUser);
    linkedInUser.findOne({
        "user.email":"linkedinuser@gmail.com"},
        function(err,result){
        if (err) {
            res.code = "400";
            console.log("mismatch1");
            res.value = "The email and password you entered did not match our records. Please double-check and try again.";
            console.log(res.value);
            // || msg.password==user.password
        }
        else {
            console.log("response from db", result);
            if(result==null) {
                res.code = "400";
                console.log("mismatch1");
                res.value = "The email and password you entered did not match our records. Please double-check and try again.";
                console.log(res.value);
            }
            else if (bcrypt.compareSync(msg.password, user.password)==true){
                    console.log("success login");
                    res.code = "200";
                    res.value = user;
                    console.log(user.username);
                }
                else {
                    console.log("bcrypt mismatch");
                    res.code = "400";
                    
                }
        }
    // (username=="Linkedin" && password=="Linkedin"),
    //     function(err,user){
    //     if (err) {
    //         res.code = "400";
    //         console.log("mismatch1");
    //         res.value = "The email and password you entered did not match our records. Please double-check and try again.";
    //         console.log(res.value);
    //     }
    //     else {
            
    // }
        callback(null,res);
    })

}
exports.handle_request = handle_request;