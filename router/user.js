const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("user test");
});

router.post("/posttest", (req, res) =>{
    const username = req.body.username
    console.log(username)
})

module.exports = router
