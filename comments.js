// Create web server
// Create comments
// Get comments
// Get comment
// Update comment
// Delete comment

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Create comment
router.post('/', function(req, res) {
  var comment = new Comment(req.body);
  comment.save(function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(comment);
    }
  });
});

// Get comments
router.get('/', function(req, res) {
  Comment.find(function(err, comments) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(comments);
    }
  });
});

// Get comment
router.get('/:id', function(req, res) {
  Comment.findById(req.params.id, function(err, comment) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(comment);
    }
  });
});

// Update comment
router.put('/:id', function(req, res) {
  Comment.findByIdAndUpdate(req.params.id, req.body, function(err, comment) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(comment);
    }
  });
});

// Delete comment
router.delete('/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;