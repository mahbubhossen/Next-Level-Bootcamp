// spread and Rest operator


// spread operator
// spread operator means "choranu" .

//spread operator for Array : 
const friends = ["Rahim", "Karim"];
const schoolFriend = ["Pintu", "Chintu", "Bulbul"];
const collegeFriend = ["Mr.Smart", "Mr.very very smart"];
friends.push(...schoolFriend)
friends.push(...collegeFriend)
// console.log(friends);


//  spread operator for object
const user = {name: "Mahbub", phoneNo: "0180000000"};
const otherInfo = {hobby : "outing", fvrtColor : "Pink"};
const userInfo = { ...user , ...otherInfo};
// console.log(userInfo)



//rest operator
// rest operator means "jora laganu"  . 
const sendInvite = (...friends:string[]) => {
    friends.forEach((friend: string)=> {
        console.log(`sent invitation to ${friend}`)
    });
}
sendInvite("Mahbub", "bappy", "abul", "kabul", "mokbul")