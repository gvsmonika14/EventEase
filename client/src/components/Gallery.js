import "./Gallery.css";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800",
    "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800",
    "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
  ];

  return (
    <section className="gallery" data-aos="flip-left">
      <h2>📸 Event Gallery</h2>
      <p>Take a look at some memorable moments from our previous events.</p>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-card" key={index}>
            <img src={image} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;