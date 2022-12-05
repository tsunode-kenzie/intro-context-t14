import { useContext } from "react"
import { TestContext } from "../../contexts/TestContext"

export const Componente2 = () => {
    const { add } = useContext(TestContext)

    console.log('teste Componente 2')

    return(
        <>
            <h1>Componente 2</h1>
            <button 
                type="button" 
                onClick={add}
            >
                +
            </button>   
        </>
    )
}