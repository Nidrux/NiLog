import { LoggingManagerConfig } from "logger";
import {LoggingManager} from "../src/index";

test("Setting config returns not null.", () => {
    const log = new LoggingManager();
    let config : LoggingManagerConfig = {
        enableColors: false,
        dateFormatting: "hh:mm:ss",
        webhooks: []
    } 
    log.updateConfig = config;
    expect(log.getConfig).not.toBeNull();
})