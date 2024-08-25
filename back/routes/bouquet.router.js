const express = require('express');
let router = express.Router();
const bouquetController = require('../controllers/bouquet.controller')
const upload = require("../middleware/multer.middleware").upload;

router.use((req, res, next) => {
    console.log(`Requête reçue sur le routeur : ${req.originalUrl}`);
    next();
});

/**
 * @swagger
 * tags:
 *   name: Bouquet
 *   description: Bouquet API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Bouquet:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         nom:
 *           type: string
 *           example: "Big Red"
 */

/**
 * @swagger
 * /bouquet/getAllBouquet:
 *   get:
 *     tags: [Bouquet]
 *     summary: Get all bouquets
 *     responses:
 *       200:
 *         description: Liste des bouquets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bouquet'
 *       500:
 *         description: Internal error
 */
router.get("/getAllBouquet", bouquetController.getAllBouquet);

/**
 * @swagger
 * /bouquet/createBouquet:
 *   post:
 *     tags: [Bouquet]
 *     summary: creer un nouveau bouquet
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom_bouquet
 *               - prix_bouquet
 *             properties:
 *               nom_bouquet:
 *                 type: string
 *               prix_bouquet:
 *                 type: number
 *     responses:
 *       200:
 *         description: bouquet creer avec succes
 *       500:
 *         description: Internal error
 */
router.post("/createBouquet",upload.single('image_bouquet'), bouquetController.createBouquet);

/**
 * @swagger
 * /bouquet/deleteBouquet:
 *   delete:
 *     tags: [Bouquet]
 *     summary: supprime un bouquet
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           description: id du bouquet a supprimer
 *     responses:
 *       200:
 *         description: bouquet supprimer avec succes
 *       500:
 *         description: Internal error
 */
router.delete("/deleteBouquet", bouquetController.deleteBouquet);

/**
 * @swagger
 * /bouquet/updateBouquet:
 *   post:
 *     tags: [Bouquet]
 *     summary: modifier un bouquet
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_bouquet
 *               - nom_bouquet
 *               - prix_bouquet
 *             properties:
 *               id_bouquet:
 *                 type: integer
 *               nom_bouquet:
 *                 type: string
 *               prix_bouquet:
 *                 type: number
 *     responses:
 *       200:
 *         description: bouquet modifier avec succes
 *       500:
 *         description: Internal error
 */
router.patch("/updateBouquet", bouquetController.updateBouquet);

module.exports = router;
