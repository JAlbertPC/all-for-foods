import {ingredientsGetAllPort} from "../ports/IngredientsPort";

export const IngredientsGetAllController = () => {
  return ingredientsGetAllPort().then((response) => {
      return response.json()
  })
}