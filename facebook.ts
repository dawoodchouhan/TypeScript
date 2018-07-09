//Start of Class Facebook
class Facebook{
    
    educations : object []
    works : object []
        
    //Basic Info
    name : string
    birthday : string
    gender : string
    interestedIn : string
    languages : string []
    relegiousViews :string
    relationship :string
    about : string
    quote : string
    address : string
    contact : number
    facebookId : string

    families : object []    

    //OtherInfo
    places : string[]
    friends : object []
    photos : object []
    Videos :object []
    checkIns : object []
    music : object[]
    movies : object[]
    tvShows : object[]
    books : object[]
    likes : object[]
    events : object[]
    groups : object []

    constructor(name : string,birthday : string,gender : string,interestedIn : string,languages : string [],
        relegiousViews :string,relationship :string,
        about : string,quote : string,address : string,contact : number,facebookId : string)
    {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.languages=languages;
        this.relegiousViews = relegiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address
        this.contact = contact
        this.facebookId = facebookId
    }

    setOtherInfo = (places : string[],friends : object [],photos : object [],Videos :object [],
        checkIns : object [],music : object[],movies : object[],tvShows : object[],books : object[],
        likes : object[],events : object[],groups : object []) => {
            
        this.places = places
        this.friends = friends
        this.photos =photos
        this.Videos = Videos
        this.checkIns = checkIns
        this.music = music
        this.movies = movies
        this.tvShows = tvShows
        this.books = books
        this.likes = likes
        this.events = events
        this.groups = groups
    }

    getFamiliy = () =>{
        return this.families
    }

    setFamilies = (families : object []) =>{
        this.families = families
    }

    getEducations = () =>{
        return this.educations
    }

    setEducations = (educations : object []) =>{
        this.educations = educations
    }

    setWorks = (works : object []) =>{
        this.works = works
    }

    getWorks = () =>{
        return this.works
    }

    getAge = (dateString) => {
            let today = new Date();
            let birthDate = new Date(dateString);
            let age = today.getFullYear() - birthDate.getFullYear();
            let m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age
        }
               
}//end of class


//objects 

//first object
let userOne = new Facebook("Dawood Chouhan","10 June 1993","Male","Female",["English","Hindi","Telugu","Marwari"],"None",
"Single","i am what i am...........", "A Person Who Asks A Question Is A Fool For Five Minutes.A Person Who Doesn't Is A Fool Forever !","Hyderabad",8297052931,"dawood.chouhan");


let edu1 = {
    instituteName : "Jawaharlal Nehru Technological University, Hyderabad",
    degree : "B.Tech",
    yearOfPassing:"Sep 20, 2012 to May 30, 2016"
}

let work1 = {
    companyName :"Sumtotal Systems",
    Position: "Integrator",
    location : "Hyderabad",
    experience :"1 year"
}

userOne.setEducations([edu1])
userOne.setWorks([work1])


let fam1 = {

    Name : "Yaseen Shareef",
    relation : "Brother"    
}
userOne.setFamilies([fam1])

console.log(`                 "Facebook Video Class Output"`)


console.log(`\n\n\n                          USER DETAILS \n
User Name: ${userOne.name}\n
BirthDay: ${userOne.birthday}\n
Gender: ${userOne.gender}\n
Interested In: ${userOne.interestedIn}\n
Languages Known: ${userOne.languages}\n
Religious Views: ${userOne.relegiousViews}\n
Relationship Status: ${userOne.relationship}\n
About: ${userOne.about}\n
Favourite Quote: ${userOne.quote}\n
Address: ${userOne.address}\n
Contact Details: ${userOne.contact}\n
FB ID: ${userOne.facebookId}\n\n\n\n `)
console.log("--------------------------------")


console.log(`                         Education Details\n
Institute Name: ${edu1.instituteName}\n
Degree: ${edu1.degree}\n
Year of Passing: ${edu1.yearOfPassing}\n\n\n\n`)

console.log(`                          Work Details \n
Name of Company: ${work1.companyName}\n
Position: ${work1.Position}\n
Location: ${work1.location}\n
Experience: ${work1.experience}\n\n\n`)

console.log(`                          Family Details \n
Relation: ${fam1.relation}\n
Name: ${fam1.Name}\n\n`)