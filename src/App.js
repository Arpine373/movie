import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';

const data = {
  Featured: {
    Id: '1',
    Title: 'The Irishman',
    CoverImage: 'FeaturedCoverImage.png',
    TitleImage: 'FeaturedTitleImage.png',
    Date: '2021-10-24T12:16:50.894556',
    ReleaseYear: '2021',
    MpaRating: '18+',
    Category: 'Movie',
    Duration: 12540, // seconds
    Description:
      'A hitman looks back at the secrets he kept as a loyal member of the Bufalino crime family.',
  },

  TrendingNow: [
    {
      Id: '1',
      Title: 'Kate',
      CoverImage: 'Kate.png',
      Duration: 2000,
      Description:
        'A female assassin has 24 hours to exact revenge on her murderer before she dies.',
    },
    {
      Id: '2',
      Title: 'Sherlock',
      CoverImage: 'Sherlock.png',
      Duration: 2300,
      Description:
        'A modern update finds the famous sleuth solving crime in 21st-century London.',
    },
    {
      Id: '3',
      Title: 'Red Notice',
      CoverImage: 'RedNotice.png',
      Duration: 2200,
      Description: 'An Interpol agent tracks the world’s most wanted art thief.',
    },
    {
      Id: '4',
      Title: 'Squid Game',
      CoverImage: 'https_specials-1.png',
      Duration: 2500,
      Description:
        'Hundreds of cash-strapped players accept a strange invitation to compete in deadly games.',
    },
  ],
};

// Duration formatter
const formatDuration = (seconds) => {
  if (!seconds || seconds <= 0) return '0m';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  }
  return `${minutes}m`;
};

// Get image URL from public folder
const getImageUrl = (filename) => `${process.env.PUBLIC_URL}/images/${filename}`;

export default function App() {
  const featured = data.Featured;
  const trending = data.TrendingNow;

  return (
    <div className="app">
      <Sidebar />

      <main className="content">
        {/* Featured Section */}
        <section
          className="featured"
          style={{
            backgroundImage: `url(${getImageUrl(featured.CoverImage)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '40px',
            minHeight: '400px',
            color: 'white',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div
            className="featured-details"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              padding: '30px',
              borderRadius: '10px',
              maxWidth: '600px',
            }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '15px' }}>{featured.Title}</h1>

            <p style={{ fontSize: '1.25rem', marginBottom: '20px' }}>
              {featured.ReleaseYear} | {featured.MpaRating} | {formatDuration(featured.Duration)}
            </p>

            <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>{featured.Description}</p>

            <div className="buttons">
              <button
                style={{
                  padding: '12px 30px',
                  fontSize: '1rem',
                  marginRight: '15px',
                  cursor: 'pointer',
                }}
              >
                ▶ Play
              </button>
              <button
                className="info"
                style={{
                  padding: '12px 30px',
                  fontSize: '1rem',
                  backgroundColor: '#555',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                More Info
              </button>
            </div>
          </div>
        </section>

        {/* Featured Title Image */}
        <section
          className="featured-title-image-section"
          style={{ marginTop: '30px', textAlign: 'center' }}
        >
          <img
            src={getImageUrl(featured.TitleImage)}
            alt={`${featured.Title} Title`}
            style={{ maxWidth: '350px', borderRadius: '10px' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `${process.env.PUBLIC_URL}/images/https_specials-1.png`;
            }}
          />
        </section>

        {/* Trending Now Section */}
        <section className="trending" style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '25px' }}>Trending Now</h2>

          <div
            className="trending-grid"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '25px',
              justifyContent: 'center',
            }}
          >
            {trending.map((item) => (
              <div
                key={item.Id}
                className="card"
                style={{
                  backgroundColor: '#222',
                  borderRadius: '10px',
                  padding: '15px',
                  width: '200px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <img
                  src={getImageUrl(item.CoverImage)}
                  alt={item.Title}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: '15px',
                    objectFit: 'cover',
                    height: '280px',
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `${process.env.PUBLIC_URL}/images/https_specials-3.png`;
                  }}
                />
                <h3 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{item.Title}</h3>
                <p style={{ fontSize: '1rem' }}>{formatDuration(item.Duration)}</p>
                
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
