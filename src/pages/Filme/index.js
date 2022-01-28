import './filme.css'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { toast } from 'react-toastify'


export default function Filme() {
    const { id } = useParams()
    const history = useHistory()

    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    async function loadFIlme() {
        const response = await api.get(`/r-api/?api=filmes/${id}`)
        if (response.data.length === 0) {
            //Id não exixstente
            history.replace('/')
            return
        }
        setFilme(response.data)
        setLoading(false)
    }

    useEffect(() => {
        loadFIlme()

        return () => {
        }
    }, [history, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes')
        let filmesSalvos = JSON.parse(minhaLista) || []
        const hasFilmes = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if(hasFilmes){
            toast.error('Você ja possui esse filmes nos seus favoritos!')
            return
        }

        filmesSalvos.push(filme)
        
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos))
        toast.success('Sucesso ao adicionar nos seus favoritos')
    }


    if (loading) {
        return (
            <div className='filme-info'>
                <h1>Carregando o seu filme</h1>
            </div>

        )
    } else {
        return (
            <div className='filme-info'>
                <h1>{filme.nome}</h1>
                <img src={filme.foto} alt='filme.nome' />
                <h3>Sinopse do filme</h3>
                {filme.sinopse}

                <div className='botoes'>
                    <button onClick={salvarFilme}>Adicionar aos favoritos</button>
                    <button >
                        <a target="blank" href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>
                            Assistir ao trailer
                        </a>
                    </button>
                </div>
            </div>
        )
    }

}