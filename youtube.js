//classes definition for Youtube
var Video = /** @class */ (function () {
    //constructor for initilized the properties
    function Video(_videoId, _videoLink, _videoTitle, _videoUploadDate, _videoLength, _views, _likes, _disLikes, _comments, _uploadedBy, _displayAdv, _recommended) {
        this.videoId = _videoId;
        this.videoLink = _videoLink;
        this.videoTitle = _videoTitle;
        this.videoUploadDate = _videoUploadDate;
        this.videoLength = _videoLength;
        this.views = _views;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.comments = _comments;
        this.uploadedBy = _uploadedBy;
        this.displayAdv = _displayAdv;
        this.recommended = _recommended;
    }
    return Video;
}());
var Channel = /** @class */ (function () {
    //contructor to initilize properties
    function Channel(_channelID, _channelName, _channelDescription, _channelCategory, _channelLicence, _subscribers) {
        var _this = this;
        //Methods to get Details
        this.getChannelId = function () {
            return _this.channelID;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getDescription = function () {
            return _this.channelDescription;
        };
        this.getCategory = function () {
            return _this.channelCategory;
        };
        this.getLicence = function () {
            return _this.channelLicence;
        };
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        this.channelID = _channelID;
        this.channelName = _channelName;
        this.channelDescription = _channelDescription;
        this.channelCategory = _channelCategory;
        this.channelLicence = _channelLicence;
        this.subscribers = _subscribers;
    }
    return Channel;
}());
var VideoComment = /** @class */ (function () {
    //constructor for initilized the properties
    function VideoComment(_commentID, _comment, _commentBy, _commentTime, _likes, _disLikes, _replies) {
        var _this = this;
        //Methods to get Details
        this.getCommentId = function () {
            return _this.commentID;
        };
        this.getComment = function () {
            return _this.comment;
        };
        this.getCommentBy = function () {
            return _this.commentBy;
        };
        this.getCommentTime = function () {
            return _this.commentTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getReply = function () {
            return _this.replies;
        };
        this.commentID = _commentID;
        this.comment = _comment;
        this.commentBy = _commentBy;
        this.commentTime = _commentTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.replies = _replies;
    }
    return VideoComment;
}());
var Reply = /** @class */ (function () {
    //constructor to initilized the properties
    function Reply(_replyID, _reply, _replyBy, _replyTime, _likes, _disLikes, _associatedWith) {
        var _this = this;
        //Methods to get Details
        this.getReplyId = function () {
            return _this.replyID;
        };
        this.getReply = function () {
            return _this.reply;
        };
        this.getReplyBy = function () {
            return _this.replyBy;
        };
        this.getReplyTime = function () {
            return _this.replyTime;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getdisLikes = function () {
            return _this.disLikes;
        };
        this.getAssociated = function () {
            return _this.associatedWith;
        };
        this.replyID = _replyID;
        this.reply = _reply;
        this.replyBy = _replyBy;
        this.replyTime = _replyTime;
        this.likes = _likes;
        this.disLikes = _disLikes;
        this.associatedWith = _associatedWith; // commentID
    }
    return Reply;
}());
var YouTube = /** @class */ (function () {
    function YouTube(_video) {
        var _this = this;
        this.getAllVideos = function () {
            return _this.video;
        };
        this.getVideobyNumber = function (videoNumber) {
            return _this.video[videoNumber];
        };
        this.video = _video;
    }
    return YouTube;
}()); //end of class
var channel1 = new Channel(1, "PowerDrift", "India's most favourite auto show. We are a content start up that creates fun engaging automotive content.If you are a little clueless about Cars or Motorcycles in India or otherwise, worry not. We wouldn't alienate you with technical jargons.", "Automotive Education", "Youtube License", 921950);
var c1ID = channel1.getChannelId();
var c1Name = channel1.getChannelName();
var c1Description = channel1.getDescription();
var c1Category = channel1.getCategory();
var c1Licence = channel1.getLicence();
var c1Subscribers = channel1.getSubscribers();
var channel2 = new Channel(2, "Make", "Make: brings the do-it-yourself mindset to all the technology in your life. Make: is loaded with exciting projects that help you make the most of your technology at home and away from home. This is a magazine that celebrates your right to tweak, hack, and bend any technology to your own will.", "Education", "Youtube License", 258778);
var c2ID = channel2.getChannelId();
var c2Name = channel2.getChannelName();
var c2Description = channel2.getDescription();
var c2Category = channel2.getCategory();
var c2Licence = channel2.getLicence();
var c2Subscribers = channel2.getSubscribers();
var comment1 = new VideoComment(1, "Interesting", channel1, "1 Week ago", 53, 1);
var cmt1ID = comment1.getCommentId();
var cmt1Comment = comment1.getComment();
var cmt1CommentBy = comment1.getCommentBy();
var cmt1CommentTime = comment1.getCommentTime();
var cmt1Likes = comment1.getLikes();
var cmt1Diskikes = comment1.getdisLikes();
var comment2 = new VideoComment(1, "Cool Bike and Nice detailed Review", channel2, "3 Week ago", 21, 0);
var cmt2ID = comment2.getCommentId();
var cmt2Comment = comment2.getComment();
var cmt2CommentBy = comment2.getCommentBy();
var cmt2CommentTime = comment2.getCommentTime();
var cmt2Likes = comment2.getLikes();
var cmt2Diskikes = comment2.getdisLikes();
var comments1 = [comment1];
var reply1 = new Reply(1, "Yeah", channel2, "5 Hours ago", 1, 0, 1);
var reply1ID = reply1.getReplyId();
var reply1Reply = reply1.getReply();
var reply1ReplyBy = reply1.getReplyBy();
var reply1ReplyTime = reply1.getReplyTime();
var reply1Likes = reply1.getLikes();
var reply1Dislikes = reply1.getdisLikes();
var reply1Associated = reply1.getAssociated();
var replies1 = [reply1];
var comment3 = new VideoComment(1, "Superb", channel1, "1 Week ago", 10, 1, replies1);
var cmt3ID = comment3.getCommentId();
var cmt3Comment = comment3.getComment();
var cmt3CommentBy = comment3.getCommentBy();
var cmt3CommentTime = comment3.getCommentTime();
var cmt3Likes = comment3.getLikes();
var cmt3Diskikes = comment3.getdisLikes();
var comments2 = [comment1, comment3];
var video1 = new Video(1, "TVS Apache RR 310 First Ride Review : The New Contender? +Giveaway!", "https://www.youtube.com/watch?v=rQSbKaLweFs&t=400s", new Date(), 10.13, 123, 1000, 10, comments1, channel1);
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
var video2 = new Video(2, "Make a Bottle Opener Fidget Spinner", "https://www.youtube.com/watch?v=wuW0i2oP7Z0", new Date(), 4.04, 123, 1000, 10, comments2, channel1, true, video1);
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
var videos = [video1, video2];
var youtube = new YouTube(videos);
console.log("OUTPUT");
console.log("----------------------");
console.log("Channel 1 Details \n\nName: " + c1Name + " \n\nDescription: " + c1Description + " \n\nCategory: " + c1Category + " \n\nLicence: " + c1Licence + " \n\nSubscribers : " + c1Subscribers);
console.log("----------------------");
console.log("Channel 2 Details \n\nName: " + c2Name + " \n\nDescription: " + c2Description + " \n\nCategory: " + c2Category + " \n\nLicence: " + c2Licence + " \n\nSubscribers : " + c2Subscribers);
console.log("----------------------");
console.log(video1);
console.log("----------------------");
console.log(video2);
console.log("----------------------");
console.log("Comment By " + c1Name + " \n\n" + cmt1Comment + " \n\ncommented:" + cmt1CommentTime + "            Likes - " + cmt1Likes + "  Dislikes - " + cmt1Diskikes + "    Reply");
console.log("----------------------");
console.log("Comment By " + cmt2CommentBy.getChannelName() + " \n\n" + cmt2Comment + " \n\ncommented:" + cmt2CommentTime + "            Likes - " + cmt2Likes + "  Dislikes - " + cmt2Diskikes + "    Reply");
console.log("All Replies \n\n" + reply1ReplyBy.getChannelName() + "   " + reply1ReplyTime + " \n\n" + reply1Reply + "    Likes - " + reply1Likes + "  Dislikes - " + reply1Dislikes + " ");
console.log("----------------------");
console.log("Comment By " + cmt3CommentBy.getChannelName() + " \n\n" + cmt3Comment + " \n\ncommented:" + cmt3CommentTime + "            Likes - " + cmt3Likes + "  Dislikes - " + cmt3Diskikes + "    Reply \n\n", replies1);
console.log("----------------------");
console.log("\n\n\n\n\n\n\n\n\n\n                               OR Check out                                 \n                               \n\n\n\n\n\n\n\n\n");
console.log(youtube);
