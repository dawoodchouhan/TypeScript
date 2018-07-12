var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Start of Class Facebook
var Facebook = /** @class */ (function () {
    function Facebook(name, birthday, gender, interestedIn, languages, relegiousViews, relationship, about, quote, address, contact, facebookId) {
        var _this = this;
        this.setOtherInfo = function (places, friends, photos, Videos, checkIns, music, movies, tvShows, books, likes, events, groups) {
            _this.places = places;
            _this.friends = friends;
            _this.photos = photos;
            _this.Videos = Videos;
            _this.checkIns = checkIns;
            _this.music = music;
            _this.movies = movies;
            _this.tvShows = tvShows;
            _this.books = books;
            _this.likes = likes;
            _this.events = events;
            _this.groups = groups;
        };
        this.getFamiliy = function () {
            return _this.families;
        };
        this.setFamilies = function (families) {
            _this.families = families;
        };
        this.getEducations = function () {
            return _this.educations;
        };
        this.setEducations = function (educations) {
            _this.educations = educations;
        };
        this.setWorks = function (works) {
            _this.works = works;
        };
        this.getWorks = function () {
            return _this.works;
        };
        this.getAge = function (dateString) {
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.interestedIn = interestedIn;
        this.languages = languages;
        this.relegiousViews = relegiousViews;
        this.relationship = relationship;
        this.quote = quote;
        this.about = about;
        this.address = address;
        this.contact = contact;
        this.facebookId = facebookId;
    }
    return Facebook;
}()); //end of class
//objects 
//first object
var userOne = new Facebook("Dawood Chouhan", "10 June 1993", "Male", "Female", ["English", "Hindi", "Telugu", "Marwari"], "None", "Single", "i am what i am...........", "A Person Who Asks A Question Is A Fool For Five Minutes.A Person Who Doesn't Is A Fool Forever !", "Hyderabad", 8297052931, "dawood.chouhan");
var edu1 = {
    instituteName: "Jawaharlal Nehru Technological University, Hyderabad",
    degree: "B.Tech",
    yearOfPassing: "Sep 20, 2012 to May 30, 2016"
};
var work1 = {
    companyName: "Sumtotal Systems",
    Position: "Integrator",
    location: "Hyderabad",
    experience: "1 year"
};
userOne.setEducations([edu1]);
userOne.setWorks([work1]);
var fam1 = {
    Name: "Yaseen Shareef",
    relation: "Brother"
};
userOne.setFamilies([fam1]);
console.log("                 \"Facebook Video Class Output\"");
console.log("\n\n\n                          USER DETAILS \n\nUser Name: " + userOne.name + "\n\nBirthDay: " + userOne.birthday + "\n\nGender: " + userOne.gender + "\n\nInterested In: " + userOne.interestedIn + "\n\nLanguages Known: " + userOne.languages + "\n\nReligious Views: " + userOne.relegiousViews + "\n\nRelationship Status: " + userOne.relationship + "\n\nAbout: " + userOne.about + "\n\nFavourite Quote: " + userOne.quote + "\n\nAddress: " + userOne.address + "\n\nContact Details: " + userOne.contact + "\n\nFB ID: " + userOne.facebookId + "\n\n\n\n ");
console.log("--------------------------------");
console.log("                         Education Details\n\nInstitute Name: " + edu1.instituteName + "\n\nDegree: " + edu1.degree + "\n\nYear of Passing: " + edu1.yearOfPassing + "\n\n\n\n");
console.log("                          Work Details \n\nName of Company: " + work1.companyName + "\n\nPosition: " + work1.Position + "\n\nLocation: " + work1.location + "\n\nExperience: " + work1.experience + "\n\n\n");
console.log("                          Family Details \n\nRelation: " + fam1.relation + "\n\nName: " + fam1.Name + "\n\n");
//Inheritence
//Friends Class
var friend = /** @class */ (function () {
    function friend(ffn, fln, flist, feml) {
        this.ffname = ffn;
        this.flname = fln;
        this.ffdlist = flist;
        this.femail = feml;
    }
    return friend;
}());
//Mutual Friend Class
var mutualfriends = /** @class */ (function (_super) {
    __extends(mutualfriends, _super);
    function mutualfriends() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.findmutualfriend = function () {
            var allfriends = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                allfriends[_i] = arguments[_i];
            }
            var count = 0;
            var len = _this.ffdlist.length;
            var len2 = allfriends.length;
            for (var i = 0; i < len; i++) {
                for (var i2 = 0; i2 < len2; i2++) {
                    if (_this.ffdlist[i] == allfriends[i2]) {
                        console.log(_this.ffdlist[i] + " is mutual friend with " + _this.ffname);
                        count++;
                    }
                }
            }
            console.log("\nYou have " + count + " mutual friends with " + _this.ffname);
        };
        return _this;
    }
    mutualfriends.prototype["super"] = function (sffn, sfln, sflist, sfeml) {
        this.ffdlist = sflist;
        this.ffname = sffn;
        this.flname = sffn;
    };
    return mutualfriends;
}(friend));
var allUsers = ["Shashank Kumar", "Akshay Jala", "Vinay Kumar", "Chandu Reddy", "Ganesh Yadav", "Harish Goud"];
var frnd = new friend("Meh Lee", "Kavya", ["Shashank Kumar", "Akshay Jala", "Praveen Kumar"], "mehlee@gmail.com");
var mfrnds = new mutualfriends("Ashok Kumar", "Rahul", allUsers, "ashok@gmail.com");
mfrnds.findmutualfriend("Shashank Kumar", "Akshay Jala", "Rakesh Goud", "Ganesh Yadav", "Sri Hari");
