import pipoca from '../../dist/imagens/bobina-de-cinema.png'
import './notFound.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='container-notfound'>
            <div>
                <h1>
                    Pagína não encontrada
                </h1>
                <Link to='/'>Veja os filmes disponiveis</Link>
            </div>
            <img src={pipoca} />
        </div>

    )
}