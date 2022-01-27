import {useEffect, useState} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'


function Home() {
  const [filmes, setFilmes] = useState([]);
  
  async function loadFilmes(){
    //Concatena com a url base criada no exportacao da api
    const response = await api.get('r-api/?api=filmes')
    setFilmes(response.data)
    console.log(filmes)
  }

  useEffect(() => {
    loadFilmes()
  },[])

    return (
      <div className="container">
          <div className='lista-filmes'>
              {filmes.map(filme => {
                return (
                  <article key={filme.id}>
                    <strong>{filme.nome}</strong>
                    <img src={filme.foto}/>
                    <Link to={`/filmes/${filme.id}`}>Acessar</Link>
                  </article>
                )
              })}
          </div>
      </div>
    );
  }
  
  export default Home;
  