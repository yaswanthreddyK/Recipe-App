

export async  function getData(url,dish){
  let data = sessionStorage.getItem(`${dish}`)
  let {results:finalResult} = data ? await JSON.parse(data) : {results: null}
   if(!data){
     const res = await fetch(url)
      data = await res.json()
      sessionStorage.setItem(`${dish}`,JSON.stringify(data))
      finalResult =  data.results
   }
   return finalResult
}

export async  function getRandomData(url){
   let data = sessionStorage.getItem("randomData")

    let {recipes:finalResult} = data ? await JSON.parse(data) : {recipes: null}
   if(!data){
     const res = await fetch(url)
      data = await res.json()
      sessionStorage.setItem("randomData",JSON.stringify(data))
      finalResult =  data.recipes ? data.recipes : data.results
    }
   console.log(finalResult)

   return finalResult
}

export  async function getDishData(url){
  const res = await fetch(url)
   const data = await res.json()
   return data
}
