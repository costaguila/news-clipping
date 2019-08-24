import axios from 'axios'

let NEWS_ENDPOINT = 'http://localhost:5000/api/news'
let noticias = [{'id':0,'title':'Guerra na síria'},{'id':0,'title':'José falou com a ana'},{'id':1,'title':'José resolveu chamado'},{'id':2,'title':'Ana pediu açai de 500ml'}];


export function getNewsSource(){
    return [{"_id" : "5d5f2b4ce9c532c3357e7693","name" : "G1"},{"_id" : "5d5f2b4ce9c532c3357e769a","name" : "HackerNews"}];
}
export function getNews(){
    return  axios.get(NEWS_ENDPOINT).then(response => {
      return response.data
    })
}
export function getNewsById(id){
    return noticias.filter((item)=>{ return item.id === id })
}
