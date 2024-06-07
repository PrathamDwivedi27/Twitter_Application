1) What we are doing that all tweets will be stored. Then we will extract all hashtags. If the hashtag is not present then we will create one. Yhi kaam kar rhe tweet service mein . 
2) let repo=new HashtagRepository();
    await repo.bulkCreate([
        {
            title:'Fun',
            tweets:[]
        },{
            title:'DSA',
            tweets:[]
        },{
            title:'CP',
            tweets:[]
        },{
            title:'Node_JS',
            tweets:[]
        },{
            title:'Books',
            tweets:[]
        }
    ])   To create hashtags directly with repository

3) Logic creation seekho bahut important hai . Kaise purane tweets liye jaa rhe hai kaise include aur update kar rhe hai.
4) Now we are converting to ES6 modules.
5)  // const userRepo=new UserRepository();
    // const tweetRepo=new TweetRepository();
    // const tweets=await tweetRepo.getAll(0,10);
    // // // const user=await userRepo.create({
    // // //     email:"dphoenix27@gmail.com",
    // // //     password:"qwertyi",
    // // //     name:'Pratham27'
    // // // })

    // const users=await userRepo.getAll();
    // const likeService=new LikeService();
    // await likeService.toggleLike(tweets[0].id,'Tweet',users[1].id);  For direct creation of user and checking

6) 