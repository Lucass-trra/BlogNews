export type Article = {
    author: string
    content: string
    description:string
    publishedAt:string
    source: { 
        id: string
        name: string
    }
    title:string
    url:string
    urlToImage:string
}

export type BigCard = {
    img:string
    category:string
    publishedAt:string
    title:string
    description:string
}

export type SmallCard = {
    img: string
    title: string
}
export type ApiResponse = {
    articles: Article[] 
    status: string
    totalResults: number
}
