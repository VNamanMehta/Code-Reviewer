import * as aiService from"../services/ai.service.js"


export const getReview = async (req, res) => {

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await aiService.generateContent(code);


    res.send(response);

}