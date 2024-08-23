import { gql } from "@apollo/client";

export const AddGame = gql `
    mutation addGame(
        $game: GameInputValues!
    ) {
        addGame(
            game: $game
        ) {
            id
            title
            platform
        }
    }
`;
