const express =require("express");
const router =express.Router();
const collegeConteroller =require("../Controller/College");
router.get("/home",collegeConteroller.homePage);
router.get("/about",collegeConteroller.aboutPage);
router.get("/contact",collegeConteroller.contactPage);
router.get("/course",collegeConteroller.coursesPage);
router.get("/faculty",collegeConteroller.facultyPage);  
module.exports=router;