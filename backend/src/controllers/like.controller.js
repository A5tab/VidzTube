import mongoose, { isValidObjectId } from "mongoose"
import { Like } from "../models/like.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js"

const toggleVideoLike = asyncHandler(async (req, res) => {
    const { videoId } = req.params
    const { userId } = req.user._id
    //TODO: toggle like on video
    const existingLike = await Like.findById({ video: videoId, likedBy: userId })
    let res;
    if (existingLike) {
        res = await Like.findByIdAndDelete({ _id: existingLike._id })
    } else {
        res = await Like.create({ video: videoId, likedBy: userId })
    }
    return res.status(200).json(new ApiResponse(200, null, "Like Toggle Successfull"))
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const { commentId } = req.params
    //TODO: toggle like on comment
    const { userId } = req.user._id
    //TODO: toggle like on video
    const existingLike = await Like.findById({ comment: commentId, likedBy: userId })
    let res;
    if (existingLike) {
        res = await Like.findByIdAndDelete({ _id: existingLike._id })
    } else {
        res = await Like.create({ comment: commentId, likedBy: userId })
    }
    return res.status(200).json(new ApiResponse(200, null, "Like Toggle Successfull"))

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const { tweetId } = req.params
    //TODO: toggle like on tweet
    const { userId } = req.user._id
    //TODO: toggle like on video
    const existingLike = await Like.findById({ tweet: tweetId, likedBy: userId })
    let res;
    if (existingLike) {
        res = await Like.findByIdAndDelete({ _id: existingLike._id })
    } else {
        res = await Like.create({ tweet: tweetId, likedBy: userId })
    }
    return res.status(200).json(new ApiResponse(200, null, "Like Toggle Successfull"))
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const { user } = req;

    const likedVideos = await Like.find({ likedBy: user._id })

    if (!likedVideos || likedVideos.length === 0) {
        return res.status(200).json(new ApiResponse(200, { length: 0 }, "No videos liked."))
    }
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}