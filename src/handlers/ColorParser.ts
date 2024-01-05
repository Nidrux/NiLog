import { Color } from "../index";

class ColorParser {
    static info(s: string) : string {
        return Color.RESET + s + Color.RESET;
    }
    static warn(s: string) : string {
        return Color.GOLD + s + Color.RESET;
    }
    static error(s: string) : string {
        return Color.BRIGHTRED + s + Color.RESET;
    }
    static fatal(s: string) : string {
        return Color.RED + s + Color.RESET;
    }

} 
export default ColorParser;