export type ApiResponse = {
    count: number
    page: number
    totalPages: number
    nextPage:number
    previousPage:number 
    showingFrom: number 
    showingTo: number
    items: Article[]
}

export type Article = {
    imageHome: string
    imageThumb: string
    timePublication: string
    id: number
    tipo:string
    titulo:string
    indroducao:string
    data_publicacao:string
    produto_id:string
    produtos: string
    editorias:string
    imagens: string
    produtos_relacionados: string
    destaque: boolean
    link: string
}

export type ImagesObject = {
    "image_intro":string
    "float_intro":string
    "image_intro_alt":string
    "image_intro_caption":string
    "image_fulltext":string
    "float_fulltext":string
    "image_fulltext_alt":string
    "image_fulltext_caption":string
}

export type ImageNew = {
    home:string
    thumb:string
  }


export type BigCard = {
    link:string
    img:string
    category:string
    publishedAt:string
    title:string
    description:string
}

export type SmallCard = {
    link:string
    img: string
    title: string
    category:string
}
