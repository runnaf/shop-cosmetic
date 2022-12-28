import { Best } from "./Best";
import { Category } from "./Category";
import { Popular } from "./Popular";
import { Preview } from "./Preview";


export function Home () {
  return(
    <div>
      <Preview />
      <Category />
      <Popular />
      <Best />
    </div>
  )
}