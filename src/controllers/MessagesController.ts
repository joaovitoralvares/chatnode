import { Request, Response } from "express";
import { MessagesService } from "../services/MessagesService"

class MessagesController {
    async create(request: Request, response: Response) {
        try {
            const messagesService = new MessagesService();
            const { admin_id, text, user_id } = request.body;
            const message = await messagesService.create({
                admin_id,
                text,
                user_id
            });

            return response.json(message);
        } catch (err) {
            return response.status(400).json({
                message: err.message
            })
        }
    }

    async showByUser(request: Request, response: Response){
        try {
            const { id } = request.params;
            const messagesService = new MessagesService();
            const messages = await messagesService.listByUser(id);
            
            return response.json(messages);
            
        } catch(err){
            return response.status(400).json({
                message: err.message
            })
        }
    }
}

export { MessagesController };