const express = require('express');
const router = express.Router();

router.get('/:nameCourse/:lesson', (req, res) => {
    let {nameCourse, lesson} = req.params;

    res.json({
        nameCourse,
        lesson
    })
})

module.exports = router;