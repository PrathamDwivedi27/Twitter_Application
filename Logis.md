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