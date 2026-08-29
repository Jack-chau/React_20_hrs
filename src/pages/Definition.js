import { useEffect, useState } from 'react';

export default function Definition() {
    const [word, setWord] = useState('hello');
    const [definition, setDefinition] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDefinition = async () => {
            try {
                setLoading(true);
                setError(null);
                
                // Using Datamuse API - no CORS issues!
                const response = await fetch(
                    `https://api.datamuse.com/words?sp=${word}&md=d&max=1`
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();
                console.log('Data from Datamuse:', data);
                
                if (data && data.length > 0 && data[0].defs) {
                    // Format the definition
                    const defs = data[0].defs.map(def => {
                        const parts = def.split('\t');
                        return {
                            partOfSpeech: parts[0] || 'unknown',
                            definition: parts[1] || def
                        };
                    });
                    
                    setDefinition({
                        word: data[0].word,
                        meanings: [{
                            partOfSpeech: defs[0]?.partOfSpeech || 'unknown',
                            definitions: defs.map(d => ({ definition: d.definition }))
                        }]
                    });
                } else {
                    setError('No definition found for this word');
                }
            } catch (err) {
                console.error('Error:', err);
                setError(`Failed to fetch: ${err.message}`);
            } finally {
                setLoading(false);
            }
        };

        if (word) {
            fetchDefinition();
        }
    }, [word]);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Dictionary</h1>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input 
                    type="text" 
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    placeholder="Enter a word"
                    style={{ 
                        padding: '10px', 
                        fontSize: '16px', 
                        width: '300px',
                        borderRadius: '4px',
                        border: '2px solid #ddd'
                    }}
                />
                <button 
                    onClick={() => setWord(word)}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        backgroundColor: '#0066cc',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }}
                >
                    Search
                </button>
            </div>
            
            {loading && <p style={{ marginTop: '20px' }}>Loading...</p>}
            {error && <p style={{ color: 'red', marginTop: '20px' }}>Error: {error}</p>}
            
            {definition && (
                <div style={{ marginTop: '20px' }}>
                    <h2 style={{ color: '#333' }}>{definition.word}</h2>
                    {definition.meanings?.map((meaning, idx) => (
                        <div key={idx} style={{ 
                            marginBottom: '20px', 
                            borderBottom: '1px solid #eee', 
                            paddingBottom: '15px' 
                        }}>
                            <strong style={{ 
                                color: '#0066cc', 
                                fontSize: '18px',
                                display: 'block',
                                marginBottom: '10px'
                            }}>
                                {meaning.partOfSpeech}
                            </strong>
                            <ul style={{ marginTop: '8px', paddingLeft: '20px' }}>
                                {meaning.definitions?.map((def, i) => (
                                    <li key={i} style={{ marginBottom: '8px' }}>
                                        {def.definition}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}