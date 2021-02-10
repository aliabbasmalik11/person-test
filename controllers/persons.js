const user = require('../db/models').Person;
const contact = require('../db/models').Comment;
const ResponseFormat = require('../core').ResponseFormat;
module.exports = {
    create(req, res) {
        return user
        .create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
        })
        .then(user => res.status(201).json(ResponseFormat.build(
            user,
            "Person Create Successfully",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormat.error(
            error,
            "Something went wrong when create Persons",
            "error"
        )))
    },
    list(req, res) {
        return user
        .all()
        .then(persons => res.status(200).json(ResponseFormat.build(
            persons,
            "Person Information Reterive successfully",
            200,
            "success"
        )))
        .catch(error => res.status(400).send(ResponseFormat.build(
            error,
            "Somthing went wrong when Reterieve Information",
            400,
            "error"
        )));
    },
    listWithComment(req, res) {
        return user
        .findAll({
            include: [{
                model: contact,
                as: 'contacts'
            }],
            order:[
             ['createdAt', 'DESC'],
             [{model: contact, as:'contacts'}, 'createdAt', 'ASC'],
            ],
        })
        .then((persons) => res.status(200).json(
            ResponseFormat.build(
                persons,
                "all user information are reterive successfully",
                200,
                "success"
            )
        ))
        .catch((error) => res.status(500).json(
            ResponseFormat.error(
                error,
                "somthing went wrong when reterieve the data",
                500,
                "error"
            )
        ))
    },
    getUserDetails (req, res) {
        return user
        .findById(req.params.userId, {
            include: [{
                model: contact,
                as: 'contacts'
            }],
        })
        .then(persons => {

            if(!persons) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "No user found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    persons,
                    "Person information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the user details",
                500,
                "error"
            )
        ));
    },
    update(req, res) {
        return user
        .findById(req.params.userId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "Person not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .update({
                firstName: req.body.firstName || usr.firstName,
                lastName: req.body.lastName || usr.lastName,
                email:  req.body.email || usr.email
            })
            .then(() => res.status(200).json(
                ResponseFormat.build(
                    usr,
                    "user Update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the user",
                    500,
                    "error"
                )
            ));
        });
    },
    destroy (req, res) {
        return user
        .findById(req.params.userId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "user not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .destroy()
            .then(() => res.status(200).json(
               ResponseFormat.build(
                 {},
                 "user deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the user",
                    500,
                    "error"
                )
            ));
        });
    }
}
