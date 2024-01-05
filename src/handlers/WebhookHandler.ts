import { Level, LoggingManager } from "../index";
import { Webhook } from "../@types/logger";
import fetch from "node-fetch";
import TextFormat from "./TextFormat";

class WebhookHandler {
    static async sendToWebhook(log: LoggingManager ,webhook : Webhook, message : string) {
        let body = webhook.body;
        let bodyKeys = Object.keys(body);
        console.log(bodyKeys);
        bodyKeys.forEach(key => {
            console.log(key)
            console.log(body[key])
            if(body.hasOwnProperty(key)) {
                let valueFromKey = body[key];
                console.log(valueFromKey)
                body[key] = valueFromKey.replace("#message", message);
            }
        })
        console.log(body);
        try {
            await fetch(webhook.url, {
                method: "POST",
                headers: webhook.headers,
                body: JSON.stringify(body)
            });
        } catch (error) {
            console.error(TextFormat.format(`[LoggingManager] failed to send message to webhook ${webhook.url}\nwith headers: ${JSON.stringify(webhook.headers)}\nand body: ${JSON.stringify(body)} \nWITH ERROR: ${error}`, Level.FATAL, log.config));
        } finally {
            console.info(TextFormat.format(`[LoggingManager] message has been sent to webhook ${webhook.url}\nwith headers: ${JSON.stringify(webhook.headers)}\nand body: ${JSON.stringify(body)}`, Level.INFO, log.config));
        }
    }
}
export default WebhookHandler;