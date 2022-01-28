import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './favoritos.css'
import {toast} from 'react-toastify'


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
        toast.success('Filmes removido com sucesso!')
    }

    return (
        <div className='container-favoritos'>
            <h1>Filmes Favoritos</h1>
            {filmes.length === 0 &&
                <span>Você não possui nenhum filmes nos seus favoritos</span>
            }

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