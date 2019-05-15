

export function getNewsSource(){
    return [{'id': 0,'title':'g1'},{'id': 1,'title':'wsj'},{'id': 2,'title':'hacker news'}];
}

export function getNewsById(id){
    let noticias = [{'id':0,'title':'Guerra na síria'},{'id':0,'title':'José falou com a ana'},{'id':1,'title':'José resolveu chamado'}];
    return noticias.filter((item)=>{ return item.id === id })
}
