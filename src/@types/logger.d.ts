import { HeaderInit } from "node-fetch"
import { Level } from "../index"
interface IRequestBody extends Record<string, any> {    
}
type Webhook = {
    url: string,
    headers?: HeaderInit | undefined
    body: IRequestBody
    events: Level[]
}
export type LoggingManagerConfig = {
    enableColors : boolean,
    dateFormatting : string,
    webhooks?: Webhook[]
}