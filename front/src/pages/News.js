import React, {useState,useEffect} from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';

const News = (props) => {

  const [loading,setLoading] = useState(false);
  const [novedades,setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async() => {
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);

    };

    cargarNovedades();
  }, []);


    return (
        <section id="news" class="mt-3">
      <div class="container position-relative">
        <div class="news-header d-flex flex-column align-items-center">
          <h2>News</h2>
          <p>All useful information!</p>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          novedades.map(item => <NovedadItem key={item.id}
            title={item.titulo} subtitle={item.subtitulo}
            body={item.cuerpo}/>)
        )}
      </div>
    </section>
    )
}

export default News