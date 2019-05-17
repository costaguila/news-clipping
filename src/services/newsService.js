

export function getNewsSource(){
    return [{'id': 0,'title':'g1'},{'id': 1,'title':'wsj'},{'id': 2,'title':'hacker news'},{'id': 3,'title':'The Nation'}];
}

export function getNewsById(id){
    let noticias = [{'id':0,'title':'Guerra na síria'},{'id':0,'title':'José falou com a ana'},{'id':1,'title':'José resolveu chamado'},{'id':2,'title':'Ana pediu açai de 500ml'}];
    return noticias.filter((item)=>{ return item.id === id })
}
