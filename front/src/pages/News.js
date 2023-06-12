import React from "react";

const News = (props) => {
    return (
        <section id="news" class="mt-3">
      <div class="container position-relative">
        <div class="news-header d-flex flex-column align-items-center">
          <h2>News</h2>
          <p>All useful information!</p>
        </div>
        <div class="news1">
          <h3>Título</h3>
          <h4>Subtítulo</h4>
          <p>Descripción - Esta es una descripción de prueba.</p>
          <hr/>
        </div>
        <div class="news1">
          <h3>Título</h3>
          <h4>Subtítulo</h4>
          <p>Descripción - Esta es una descripción de prueba.</p>
          <hr/>
        </div>
      </div>
    </section>
    )
}

export default News