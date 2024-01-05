import dayjs from "dayjs";
class TimeStampParser {
    static parse(s : string , format : string) : string {
        let timeStamp = dayjs().format(format);
        if(timeStamp) {
            return `[${timeStamp}] ${s}`;
        }
        return `[${dayjs().format()}] ${s}`;
    }
}
export default TimeStampParser;