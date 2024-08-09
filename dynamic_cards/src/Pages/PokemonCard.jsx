import { useEffect , useState} from "react";

const PokemonCard = () =>{
    const api = "https://pokeapi.co/api/v2/pokemon?limit=124";
    
    const [getData,setGetData] = useState([])
    const [loading , setLoading] = useState(true)

    const fetchingData  = async () =>{
        try{
            const fetchingData = await fetch(api);
            const datas = await fetchingData.json()
            const imageRes = datas.results.map( async (currPack)=>{
                const currRes = await fetch(currPack.url)
                const urlRes = await currRes.json();    
                setLoading(false);    
                return urlRes
            })
            // console.log(imageRes)
            const imageResponcePromise = await Promise.all(imageRes)
            console.log(imageResponcePromise)
            setGetData(imageResponcePromise);
            setLoading(false);
        }
        catch(error){
            console.log(`This is Error ${error}`);
        }
    }
    
    useEffect(()=>{
        fetchingData()
        
    },[]);
    
    if (loading) {
        return (
            <>
                <h1>Loading.....</h1>
            </>
        );
    }

    
    return(
        <>
        <h1>This is Pokemon card</h1>
            {
                getData.map((pokemonCards, key)=>{
                    return(
                        <div key={pokemonCards.id}>
                        <img src={pokemonCards.sprites.other.dream_world.front_default} alt={pokemonCards.name}/>
                        <span>Name : {pokemonCards.name}</span>                
                        </div>
                    )
                })
            }
        </>
    )
}

export default PokemonCard