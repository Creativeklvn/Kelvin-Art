import { useState } from "react";


function App() {
    const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      {/* NAVIGATION */}
      <nav>
        <a href="#home">KELVIN UNEZE</a>

        <div>
          <a href="#works">WORKS</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home">
        <h1>KELVIN UNEZE</h1>
        <p>VISUAL ARTIST</p>

        <img src="/artworks/kk.PNG" alt="Artwork" />
      </section>

      {/* WORKS */}
      <section id="works">
        <h2>WORKS</h2>

        <div className="works-grid">
                    <img
            src="/artworks/11.jpeg"
            alt="Artwork 11"
            onClick={() => setSelectedImage("/artworks/11.jpeg")}
          />

                    <img
            src="/artworks/12.jpeg"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/12.jpeg")}
          />

                    <img
            src="/artworks/f.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/f.JPG")}
          />

                              <img
            src="/artworks/g.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/g.JPG")}
          />

                    <img
            src="/artworks/e.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/e.JPG")}
          />

                    <img
            src="/artworks/h.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/h.JPG")}
          />

                    <img
            src="/artworks/j.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/j.JPG")}
          />

                    <img
            src="/artworks/i.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/i.JPG")}
          />

                    <img
            src="/artworks/n.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/n.JPG")}
          />

                    <img
            src="/artworks/h.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/h.JPG")}
          />

          <img
            src="/artworks/1.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/1.JPG")}
          />

                    <img
            src="/artworks/a.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/a.JPG")}
          />

                    <img
            src="/artworks/m.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/m.JPG")}
          />

          <img
            src="/artworks/2.JPG"
            alt="Artwork 2"
            onClick={() => setSelectedImage("/artworks/2.JPG")}
          />

          <img
            src="/artworks/3.JPG"
            alt="Artwork 3"
            onClick={() => setSelectedImage("/artworks/3.JPG")}
          />

          <img
            src="/artworks/4.JPG"
            alt="Artwork 4"
            onClick={() => setSelectedImage("/artworks/4.JPG")}
          />

          <img
            src="/artworks/5.JPG"
            alt="Artwork 5"
            onClick={() => setSelectedImage("/artworks/5.JPG")}
          />

                    <img
            src="/artworks/k.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/k.JPG")}
          />

          <img
            src="/artworks/6.JPG"
            alt="Artwork 6"
            onClick={() => setSelectedImage("/artworks/6.JPG")}
          />

                              <img
            src="/artworks/b.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/b.JPG")}
          />

                              <img
            src="/artworks/c.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/c.JPG")}
          />

                              <img
            src="/artworks/d.JPG"
            alt="Artwork 1"
            onClick={() => setSelectedImage("/artworks/d.JPG")}
          />

          
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
      
        <h2>ARTIST BIOGRAPHY</h2>
        <img src="/artworks/Capture.JPG" alt="cap" />
        <p>
        Kelvin Uneze is a visual artist born in Lagos, Nigeria. He had
his National Diploma and Higher Diploma (HND) in Painting
and General Art at Auchi Polytechnic, Edo State, Nigeria. He
had his first degree in Fine and Applied Arts with
specialization in painting at Auchi Polytechnic, Edo State,
Nigeria. Kelvin Uneze trained at Data Point Computer
Institute in the year 2017, where he learnt Data processing
specifications in graphic design before his polytechnic
education. In 2024, Kelvin exhibited in the 5th Edition
Miniature Art Fair 2024 by Ogirikan Art Gallery and Iwalewa
Gallery of Art.
 </p>
      </section>

            <section id="about">
        <h2>ARTIST STATEMENT</h2>

        <p>

My practice explores figurative and abstract painting, expressing everyday
experiences, emotions, and ideas through diverse media. Inspired by Afrocentric
sculptures and African visual heritage, I reinterpret traditional forms through a
contemporary lens. Using geometric forms, vibrant colours, and Copic-style
techniques, I create expressive works that invite deeper emotional connection and
reflection.
 </p>
      </section>

      {/* CONTACT */}
<section id="contact">
  <h2>CONTACT</h2>

  <a
    href="https://www.instagram.com/kelvin.uneze"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a href="mailto:kelvinuneze@emagmail.com">
    Email
  </a>

  <p>Lagos, Nigeria</p>
</section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Kelvin Uneze</p>
      </footer>

            {/* IMAGE LIGHTBOX */}
      {selectedImage && (
        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Selected artwork"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;