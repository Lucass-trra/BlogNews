import { Article } from "./types";

export let cache: { [id:number]:Article } = {
    
}

export function clearCache():void {
    cache = {}
}