import { useContext } from 'react';
import { TestContext } from '../../contexts/TestContext';

export const Componente1 = () => {
    const { counter } = useContext(TestContext)

    console.log('teste Componente 1')

    return(
        <h1>Componente 1 - {counter} </h1>
    )
}