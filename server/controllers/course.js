/* const Course = require('../models/CourseSchema');

exports.addCourse = async (req,res) => 
{
try {
    const {courseName,courseDescription,Content} = req.body;
    const newPost=new Post({Title,Description,Content,owner:req.userId})
    
const post=await newPost.save()
res.status(200).json({post})
} catch (error) {
    res.status(500).json({message:`something wrong:${error}`})
 
}
} */