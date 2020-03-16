const express = require('express');
const router = express.Router();

router.get('/mugs', (req, res) => {
    
    res.render('mugs.ejs');
});

module.exports = router;