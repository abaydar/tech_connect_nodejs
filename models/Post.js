const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    //connect user to post
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,

    },
    avatar: {
        type: String
    },
    likes: [
        //know which likes came from which user & user can only like once
        {
            user: { 
                type: Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: { 
                type: Schema.Types.ObjectId,
                ref: 'users'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = Post = mongoose.model('post', PostSchema)