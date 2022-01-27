import './filme.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'


export default function Filme() {
    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    async function loadFIlme() {
        const response = await api.get(`/r-api/?api=filmes/${id}`)
        setFilme(response.data)
        setLoading(false)
        console.log(filme)
    }

    useEffect(() => {
        loadFIlme()
    }, [id]);

    if (loading) {
        return (
            <h1>Carregando o seu filme</h1>
        )
    } else {
        return (
            <div>
                <h1>{filme.id}</h1>
            </div>
        )
    }

}