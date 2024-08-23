import { useQuery} from '@apollo/client'
import { game, games } from '../GraphQL/queries'
import { useEffect, useState } from 'react'

export const GetGame = () => {
  const [gamees,setGames] = useState()
  const {error,loading,data} = useQuery(games)
  const {error:gameError,data:gameData} = useQuery(game,{
    variables:{
        id: 3,
    }
  })
  !loading && console.log(data.games)
  !gameError && console.log(gameData)
  useEffect(()=>{
   data && setGames(data.games)
  },[data])
  return (
    <div>
        <h1>All games</h1>
        {
        !error && !loading && gamees?.map(d=>(
          <div key={d.id}>
            <h4>{d.id}</h4>
          </div>
        ))
      }
    </div>
  )
}
