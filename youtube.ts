//classes definition for Youtube
class Video  {
    //Properties : videoid,videotitle,videolink,videoupload date,videolength,displayAdv,comment,views,likes,dislikes,uploadby,displayAdv,recommend
    private videoId : number
    private videoLink : string
    private videoTitle: string;
    private videoUploadDate: Date
    private videoLength :number
    private views : number;
    private likes : number
    private disLikes : number
    private comments : VideoComment []
    private uploadedBy : Channel
    private displayAdv : Boolean
    private recommended : Object

    //constructor for initilized the properties
    constructor(_videoId : number,_videoLink :string, _videoTitle : string, _videoUploadDate : Date, _videoLength : number,_views : number,_likes : number,_disLikes : number,_comments : VideoComment [],_uploadedBy : Channel,_displayAdv? : boolean,_recommended?:object)
    {
	    this.videoId = _videoId;
        this.videoLink = _videoLink
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength
        this.views = _views
        this.likes = _likes
        this.disLikes = _disLikes
        this.comments = _comments
        this.uploadedBy = _uploadedBy
        this.displayAdv = _displayAdv
        this.recommended = _recommended
    }    

    //Methods to get the details
    // getComments = () => {
	//     return this.comments 
    // }
    // getUploader = () => {
	//     return this.uploadedBy
    // }
    // getRecommended = () => {
	//     return this.recommended 
    // }
    // getVideoID = () => {
	//     return this.videoId 
    // }
    // getVideoLink = () => {
	//     return this.videoLink 
    // }
    // getVideoTitle = () => {
	//     return this.videoTitle 
    // }
    // getvideoUploadDate = () => {
	//     return this.videoUploadDate 
    // }
    // getvideoLength = () => {
	//     return this.videoLength 
    // }
    // getViews = () => {
	//     return this.views 
    // }
    // getLikes = () => {
	//     return this.likes 
    // }
    // getdiLikes = () => {
	//     return this.disLikes 
    // }

}

class Channel{
    //channel having properties like channelId,channelName,description,category,license,subscribers
    private channelID : number
    private channelName : string
    private channelDescription : string
    private channelCategory : string
    private channelLicence : string
	private subscribers : number

    //contructor to initilize properties
    constructor(_channelID : number, _channelName : string, _channelDescription : string, _channelCategory : string,_channelLicence : string,_subscribers : number)
    {
	    this.channelID = _channelID;
	    this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory
        this.channelLicence = _channelLicence
        this.subscribers = _subscribers
    }

    //Methods to get Details
    getChannelId = () => {
	    return this.channelID
    }
    getChannelName = () => {
	    return this.channelName 
    }
    getDescription = () => {
	    return this.channelDescription 
    }
    getCategory = () => {
	    return this.channelCategory
    }
    getLicence = () => {
	    return this.channelLicence
    }
    getSubscribers = () => {
	    return this.subscribers
    }
    

}

class VideoComment{
    //Properties : commentid,comment,commentby,comment time,likes,dislikes,replies to comment
    private commentID : number
    private comment : string
    private commentBy : Channel
    private commentTime : string
    private likes : number
    private disLikes : number
    private replies : Reply[]

    //constructor for initilized the properties
    constructor(_commentID : number,_comment:string,_commentBy:Channel,_commentTime:string,_likes:number,_disLikes:number,_replies? : Reply []){
        this.commentID = _commentID
        this.comment = _comment
        this.commentBy = _commentBy
        this.commentTime = _commentTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.replies = _replies
    }

    //Methods to get Details
    getCommentId = () => {
	    return this.commentID
    }
    getComment = () => {
	    return this.comment 
    }
    getCommentBy = () => {
	    return this.commentBy 
    }
    getCommentTime = () => {
	    return this.commentTime 
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getReply = () => {
	    return this.replies 
    }


}

class Reply{
    //reply proprties
    private replyID : number
    private reply : string
    private replyBy : Channel
    private replyTime : string
    private likes : number
    private disLikes : number
    private associatedWith : number
    
    //constructor to initilized the properties
    constructor(_replyID : number,_reply:string,_replyBy:Channel,_replyTime:string,_likes:number,_disLikes:number,_associatedWith : number){
        this.replyID = _replyID
        this.reply = _reply
        this.replyBy = _replyBy
        this.replyTime = _replyTime
        this.likes = _likes
        this.disLikes = _disLikes
        this.associatedWith = _associatedWith // commentID
    }
    //Methods to get Details
    getReplyId = () => {
	    return this.replyID
    }
    getReply = () => {
	    return this.reply 
    }
    getReplyBy = () => {
	    return this.replyBy 
    }
    getReplyTime = () => {
	    return this.replyTime
    }
    getLikes = () => {
	    return this.likes 
    }
    getdisLikes = () => {
	    return this.disLikes 
    }
    getAssociated = () => {
	    return this.associatedWith 
    }

}


class YouTube{

    private video : Video [] // Array of Videos
    
    constructor(_video : Video [])
    {
	    this.video = _video;
    }

    getAllVideos = () => {
	    return this.video
    }

    getVideobyNumber = (videoNumber) => {
        return this.video[videoNumber]
    }

} //end of class

let channel1 = new Channel(1,"PowerDrift","India's most favourite auto show. We are a content start up that creates fun engaging automotive content.If you are a little clueless about Cars or Motorcycles in India or otherwise, worry not. We wouldn't alienate you with technical jargons.","Automotive Education","Youtube License",921950)
let c1ID = channel1.getChannelId();
let c1Name = channel1.getChannelName();
let c1Description= channel1.getDescription();
let c1Category= channel1.getCategory();
let c1Licence = channel1.getLicence();
let c1Subscribers= channel1.getSubscribers();

let channel2 = new Channel(2,"Make","Make: brings the do-it-yourself mindset to all the technology in your life. Make: is loaded with exciting projects that help you make the most of your technology at home and away from home. This is a magazine that celebrates your right to tweak, hack, and bend any technology to your own will.","Education","Youtube License",258778)
let c2ID = channel2.getChannelId();
let c2Name = channel2.getChannelName();
let c2Description= channel2.getDescription();
let c2Category= channel2.getCategory();
let c2Licence = channel2.getLicence();
let c2Subscribers= channel2.getSubscribers();


let comment1 = new VideoComment(1,"Interesting",channel1,"1 Week ago",53,1)
let cmt1ID = comment1.getCommentId();
let cmt1Comment = comment1.getComment();
let cmt1CommentBy= comment1.getCommentBy();
let cmt1CommentTime = comment1.getCommentTime();
let cmt1Likes = comment1.getLikes();
let cmt1Diskikes = comment1.getdisLikes();



let comment2 = new VideoComment(1,"Cool Bike and Nice detailed Review",channel2,"3 Week ago",21,0)
let cmt2ID = comment2.getCommentId();
let cmt2Comment = comment2.getComment();
let cmt2CommentBy= comment2.getCommentBy();
let cmt2CommentTime = comment2.getCommentTime();
let cmt2Likes = comment2.getLikes();
let cmt2Diskikes = comment2.getdisLikes();


let comments1  = [comment1]



let reply1 = new Reply(1,"Yeah",channel2,"5 Hours ago",1,0,1)
let reply1ID = reply1.getReplyId();
let reply1Reply= reply1.getReply();
let reply1ReplyBy= reply1.getReplyBy();
let reply1ReplyTime= reply1.getReplyTime();
let reply1Likes= reply1.getLikes();
let reply1Dislikes= reply1.getdisLikes();
let reply1Associated= reply1.getAssociated();


let replies1 = [reply1]




let comment3 = new VideoComment(1,"Superb",channel1,"1 Week ago",10,1,replies1)
let cmt3ID = comment3.getCommentId();
let cmt3Comment = comment3.getComment();
let cmt3CommentBy= comment3.getCommentBy();
let cmt3CommentTime = comment3.getCommentTime();
let cmt3Likes = comment3.getLikes();
let cmt3Diskikes = comment3.getdisLikes();

let comments2  = [comment1,comment3]

let video1 = new Video(1,"TVS Apache RR 310 First Ride Review : The New Contender? +Giveaway!","https://www.youtube.com/watch?v=rQSbKaLweFs&t=400s",new Date(),10.13,123,1000,10,comments1,channel1);
// let vid1ID = video1.getVideoID();
// let vid1Title = video1.getVideoTitle();
// let vid1Link = video1.getVideoLink();
// let vid1UPDate = video1.getvideoUploadDate();
// let vid1VidLength = video1.getvideoLength();
// let vid1Views = video1.getViews();
// let vid1Likes = video1.getLikes();
// let vid1Dislikes = video1.getdiLikes();
// let vid1Comments = video1.getComments();
// let vid1Uploader = video1.getUploader();


let video2 = new Video(2,"Make a Bottle Opener Fidget Spinner","https://www.youtube.com/watch?v=wuW0i2oP7Z0",new Date(),4.04,123,1000,10,comments2,channel1,true,video1);
// let vid2ID = video2.getVideoID();
// let vid2Title = video2.getVideoTitle();
// let vid2Link = video2.getVideoLink();
// let vid2UPDate = video2.getvideoUploadDate();
// let vid2VidLength = video2.getvideoLength();
// let vid2Views = video2.getViews();
// let vid2Likes = video2.getLikes();
// let vid2Dislikes = video2.getdiLikes();
// let vid2Comments = video2.getComments();
// let vid2Uploader = video2.getUploader();

let videos = [video1,video2]

let youtube = new YouTube(videos)
console.log("OUTPUT")
console.log("----------------------")

console.log(`Channel 1 Details \n
Name: ${c1Name} \n
Description: ${c1Description} \n
Category: ${c1Category} \n
Licence: ${c1Licence} \n
Subscribers : ${c1Subscribers}`);
console.log("----------------------")

console.log(`Channel 2 Details \n
Name: ${c2Name} \n
Description: ${c2Description} \n
Category: ${c2Category} \n
Licence: ${c2Licence} \n
Subscribers : ${c2Subscribers}`)
console.log("----------------------")


console.log(video1)
console.log("----------------------")

console.log(video2)
console.log("----------------------")

console.log(`Comment By ${c1Name} \n
${cmt1Comment} \n
commented:${cmt1CommentTime}            Likes - ${cmt1Likes}  Dislikes - ${cmt1Diskikes}    Reply`)
console.log("----------------------")

console.log(`Comment By ${cmt2CommentBy.getChannelName()} \n
${cmt2Comment} \n
commented:${cmt2CommentTime}            Likes - ${cmt2Likes}  Dislikes - ${cmt2Diskikes}    Reply`)


console.log(`All Replies \n
${reply1ReplyBy.getChannelName()}   ${reply1ReplyTime} \n
${reply1Reply}    Likes - ${reply1Likes}  Dislikes - ${reply1Dislikes} `)
console.log("----------------------")

console.log(`Comment By ${cmt3CommentBy.getChannelName()} \n
${cmt3Comment} \n
commented:${cmt3CommentTime}            Likes - ${cmt3Likes}  Dislikes - ${cmt3Diskikes}    Reply \n
`, replies1)
console.log("----------------------")


console.log(`\n\n\n\n\n\n\n\n

                               OR Check out                                 
                               \n\n\n\n\n\n\n\n\n`)

console.log(youtube)



