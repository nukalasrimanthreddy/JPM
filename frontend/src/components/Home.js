import React from 'react';

function HomeComponent() {
  return (
    <div className="home">
      <h1>Welcome to SustainEats - Your Guide to Sustainable Eating</h1>
      <section className="featured-recipes">
        <h2>Featured Recipes</h2>
        <div className="recipe-list">
          <div className="recipe">
            <h3>Quinoa Salad</h3>
            <img src="/images/quinoa-salad.jpg" alt="Quinoa Salad" />
            <p>A delicious and nutritious quinoa salad packed with fresh vegetables.</p>
          </div>
          <div className="recipe">
            <h3>Vegan Chili</h3>
            <img src="/images/vegan-chili.jpg" alt="Vegan Chili" />
            <p>Hearty and flavorful vegan chili made with beans, vegetables, and spices.</p>
          </div>
          {/* Additional featured recipes */}
        </div>
      </section>
      <section className="latest-articles">
        <h2>Latest Articles</h2>
        <div className="article-list">
          <div className="article">
            <h3>The Impact of Meat Consumption on the Environment</h3>
            <p>Learn about the environmental consequences of meat consumption and how to reduce your carbon footprint.</p>
          </div>
          <div className="article">
            <h3>Seasonal Eating: Eating with the Earth's Rhythm</h3>
            <p>Discover the benefits of eating seasonally and how it contributes to sustainable agriculture.</p>
          </div>
          {/* Additional latest articles */}
        </div>
      </section>
    </div>
  );
}

export default HomeComponent;
