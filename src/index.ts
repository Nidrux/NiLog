import defaultConfig from "./defaultConfig";
import { LoggingManagerConfig} from "./@types/logger";
import WebhookHandler from "./handlers/WebhookHandler";
import TextFormat from "./handlers/TextFormat";
export enum Level {
    INFO = "INFO",
    WARN = "WARN",
    ERROR = "ERROR",
    FATAL = "FATAL"
}
export enum Color {
    RED = "\u001b[31m",
    GOLD = "\u001b[33m",
    BRIGHTRED = "\u001b[31;1m",
    RESET = "\u001b[0m"
}
export const NAME = "LoggingManager";
export class LoggingManager {
        config : LoggingManagerConfig;
        constructor(config : LoggingManagerConfig | null = null) {
            config ? this.config = config : this.config = defaultConfig;
        }
        set updateConfig(config : LoggingManagerConfig) {
            this.config = config
        }   
        get getConfig() {
            return this.config;
        }
        info(message : string) {
            let s = TextFormat.format(message, Level.INFO, this.config);
            this.hook(s);
            console.info(s);
        }
        warn(message : string) {
            let s = TextFormat.format(message, Level.WARN, this.config);
            this.hook(s);
            console.warn(s);
        }
        error(message : string) {
            let s = TextFormat.format(message, Level.ERROR, this.config);
            this.hook(s);
            console.error(s);
        }
        fatal(message : string) {
            let s = TextFormat.format(message, Level.FATAL, this.config);
            this.hook(s);
            console.error(s);
        }
        private hook(message : string) {
            if(this.config.webhooks) {
                if(this.config.webhooks.length <= 0 ) {
                    console.warn(TextFormat.format(`[${NAME}] You have provided an empty webhook array! You can ignore this message if this was intentional.`, Level.WARN, this.config));
                } else {
                    this.config.webhooks.forEach(webhook => {
                        WebhookHandler.sendToWebhook(this, webhook, message);
                    });
                }
            }
        }
}