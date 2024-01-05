import { LoggingManagerConfig } from "../@types/logger";
import { Level } from "../index";
import ColorParser from "./ColorParser";
import LevelFormat from "./LevelFormat";
import TimeStampParser from "./TimeStampParser";
class TextFormat {
    static format(message: string, level: Level, config: LoggingManagerConfig): string {
        let s = message;
        s = LevelFormat.addLevel(message, level)
        s = TimeStampParser.parse(s, config.dateFormatting);
        switch(level) {
            case Level.INFO:
                if(config.enableColors) {
                    s = ColorParser.info(s);
                }
            break;
            case Level.WARN:
                if(config.enableColors) {
                    s = ColorParser.warn(s);
                }
            break;
            case Level.ERROR:
                if(config.enableColors) {
                    s = ColorParser.error(s);
                }
            break;
            case Level.FATAL:
                if(config.enableColors) {
                    s = ColorParser.fatal(s);
                }
            break;
            default:
                console.warn(this.format(`Level ${level} is not a valid Level! defaulted to info!`, Level.WARN, config));   
                if(config.enableColors) {
                    s = ColorParser.info(s);
                }
            break;
        }
        return s;
    }
}
export default TextFormat;

