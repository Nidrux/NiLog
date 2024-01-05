import {LoggingManager, Level} from "./src/index";

const log = new LoggingManager();

log.info("This is a preview for the info logging without any provided configuration.");
log.warn("This is a preview for the warn logging without any provided configuration.");
log.error("This is a preview for the error logging without any provided configuration.");
log.fatal("This is a preview for the fatal logging without any provided configuration.");

// https://day.js.org/docs/en/parse/string-format#list-of-all-available-parsing-tokens
log.updateConfig = {
    enableColors: true,
    dateFormatting: "D-MM-YYYY - HH:mm:ss"
}

log.info("This is a preview for the info logging with a provided configuration.");
log.warn("This is a preview for the warn logging with a provided configuration.");
log.error("This is a preview for the error logging with a provided configuration.");
log.fatal("This is a preview for the fatal logging with a provided configuration.");



log.info("Providing empty webhook array");
log.updateConfig = {
    enableColors: true,
    dateFormatting: "D-MM-YYYY - HH:mm:ss",
    webhooks: []
}

log.info("Providing webhooks");
log.updateConfig = {
    enableColors: true,
    dateFormatting: "D-MM-YYYY - HH:mm:ss",
    webhooks: [{
        events: [Level.INFO, Level.WARN, Level.ERROR, Level.FATAL],
        url: "https://discordapp.com/api/webhooks/1144056321340092517/TcqSp9EPnqiM9UVEZMBEdFnj_tonP616YZJg9pullLmGi0kpjc7FLmsZ_3yH4Hkaox60",
        body: {
            content: "Custom #message that showcases how to use the message notation",
        },
        headers: {
            "content-type": "application/json"
        }
    }]
}
log.info("This message is send to the webhook!");