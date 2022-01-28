import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'


export default function Favoritos() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || [])
    }, [])


    function remover(id) {
        let listaAtualizada = filmes.filter(f => {
            if (f.id !== id)
                return f
        })
        setFilmes(listaAtualizada)
        localStorage.setItem('filmes', JSON.stringify(listaAtualizada))
    }

    return (
        <div className='container'>
            <h1>Filmes Favoritos</h1>
            <div className='filmes'>
                {filmes.map(f => {
                    return (
                        <div className='filme' key={f.id}>
                            <div className='filme-item-esquerda'>
                                <h2>
                                    {f.nome}
                                </h2>
                            </div>
                            <div className='filme-item-direita'>
                                <button className='btn-detalhes'>
                                    <Link to={`/filmes/${f.id}`}>
                                        Ver Detalhes
                                    </Link>
                                </button>
                                <button className='btn-excluir' onClick={() => remover(f.id)}> Remover Filme</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}