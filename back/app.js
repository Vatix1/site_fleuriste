const express = require('express')
const dotenv = require('dotenv')
const bouquetRoutes = require('./routes/bouquet.router')
const cadeauRoutes = require('./routes/cadeau.router')
const evenementRoutes = require('./routes/evenement.router')
const salondetheRoutes = require('./routes/salondethe.router')

dotenv.config();
const app = express();
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API site fleuriste',
            version: '1.0.0',
            description: 'API site fleuriste',
            contact: {
                name: "Histoire de Coeur"
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use("/bouquet", bouquetRoutes);
app.use("/cadeau", cadeauRoutes);
app.use("/evenement", evenementRoutes)
app.use("/salondethe", salondetheRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})