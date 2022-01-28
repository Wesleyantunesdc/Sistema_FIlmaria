import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './home.css'


function Home() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  async function loadFilmes() {
    //Concatena com a url base criada no exportacao da api
    const response = await api.get('r-api/?api=filmes')
    setFilmes(response.data)
    setLoading(false)
  }

  useEffect(() => {
    loadFilmes()
  }, [])

  if (loading) {
    return <h1>Carregando os filmes..</h1>
  } else {
    return (
      <div className="container-home">
        <div className='lista-filmes'>
          {filmes.map(filme => {
            return (
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} />
                <Link to={`/filmes/${filme.id}`}>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home;
