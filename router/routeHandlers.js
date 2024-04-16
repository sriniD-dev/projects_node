const express = require("express")
const router = express.Router()

router.route("/ ").get((req, res) => {
    res.status(200).json({ statusCode: 200, data: "get all contacts", message: "success" })
})

router.route("/:id").get((req, res) => {
    res.status(200).json({ statusCode: 200, data: `get contact  by ${req.params.id}`, message: "success" })
})

router.route("/:id").post((req, res) => {
    res.status(200).json({ message: "success", statusCode: 200, data: `contact -${req.params.id} created successfully ` })
})

router.route("/:id").put((req, res) => {
    res.status(200).json({ message: "success", statusCode: 200, data: `contact-${req.params.id} updated successfully` })
})

router.route("/:id").delete((req, res) => {
    res.status(200).json({ message: "success", statusCode: 200, data: `contact-${req.params.id} deleted  successfully` })
})

module.exports = router;