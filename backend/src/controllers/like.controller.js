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
    if (like) {
        res = await Like.findByIdAndDelete({ _id: existingLike._id })
    } else {
        res = await Like.create({ video: videoId, likedBy: userId })
    }
    return res.status(200).json(new ApiResponse(200, null, "Like Toggle Successfull"))
})

const toggleCommentLike = asyncHandler(async (req, res) => {
    const { commentId } = req.params
    //TODO: toggle like on comment

})

const toggleTweetLike = asyncHandler(async (req, res) => {
    const { tweetId } = req.params
    //TODO: toggle like on tweet
}
)

const getLikedVideos = asyncHandler(async (req, res) => {
    //TODO: get all liked videos
    const { user } = req;

    await Like.$where({ likedBy: user._id })
})

export {
    toggleCommentLike,
    toggleTweetLike,
    toggleVideoLike,
    getLikedVideos
}