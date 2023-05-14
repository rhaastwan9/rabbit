import httpInstance from "@/utils/http"


export function get () {
    return httpInstance({
        url: 'home/category/head'
    })
}
