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
    category:string
}
export type ApiResponse = {
    articles: Article[] 
    status: string
    totalResults: number
}

export type pageUrlGroup = {
    general: string,
    business: string,
    entertainment: string,
    health: string,
    science: string,
    sports: string,
    technology: string,
}

