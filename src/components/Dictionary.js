import { useState, useEffect } from 'react' ;


export default function Dictionary() {
    
    const [ word, setWord ] = useState( '' );
    const [ word2, setWord2 ] = useState( '' );

    useEffect( ( ) => {
        console.log( 'State Update', word + ' ' + word2 );
    }, [ word ] );

    return (
        <>
            <input type ="Text" onChange={ 
                ( e ) => {
                    setWord( e.target.value ) ;
                    
                }
            } />
            <h2>Let's get the definition for "{ word2 }".</h2>
            <input type ="Text" onChange={ 
                ( e ) => {
                    setWord2( e.target.value ) ;
                }
            } />
            <h2>Let's get the definition for "{ word2 }".</h2>
        </>
    )
}
