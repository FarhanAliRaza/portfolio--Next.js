import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move";

function Results({results}) {
    console.log(results);
    console.log(typeof results)
    console.log(results[0])
  
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results.map(result =>{
                return <Thumbnail key = {result.id} result = {result} />
            })}
        </FlipMove>
    )
}

export default Results
