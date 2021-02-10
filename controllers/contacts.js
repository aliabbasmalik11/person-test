const contact = require('../db/models').Comment;
const ResponseFormat = require('../core').ResponseFormat;
module.exports = {
    create(req, res) {
        return contact
        .create({
            title: req.body.title,
            userId: req.params.userId
        })
        .then(contact => res.status(201).json(
           ResponseFormat.build(
               contact,
               "Comment Save Successfully",
               201,
               "success"
           )
        ))
        .catch(error => res.status(400).json(
            ResponseFormat.error(
                error,
                "Somethis went wrong when save the data",
                400,
                "error"
            )
        ));
    }
}
