import { gql } from "@apollo/client";

export const game =gql`
    query Game($id:ID!){
      game(id:$id){
        id
        platform
        reviews{
          content
          rating
        }
      }
    }
    `

export const games = gql`
query {
  games{
    id
    platform
  }
}
`