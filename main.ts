//***************************Assignment No: 01*********************************
//                       BULDING YOUR FRIEND LIST

let friend1 = {
    firstName: "Ali",
    lastName: "Hassan",
    id: "aliwaqas123",
}

let friend2 = {
    firstName: "Zunaira",
    lastName: "Choudhry",
    id: "Zunich1",
}

let friend3 = {
    firstName: "Vaniza",
    lastName: "Choudhry",
    id: "vinichoudhry-",
}

let people={
    friends:[] as
    {
        firstName:string;
        lastName:string;
        id?: string;
  
    }[]
  }
  
people.friends.push(friend1,friend2,friend3)
                              
console.log(people);



