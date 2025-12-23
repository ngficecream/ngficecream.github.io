import React, { useState } from 'react';
import config from '../../config/siteConfig.json';

const Flavours = () => {
  const { flavours } = config;
  const [activeTab, setActiveTab] = useState(flavours.categories[0].id);

  const getActiveProducts = () => {
    const category = flavours.categories.find(cat => cat.id === activeTab);
    return category ? category.products : [];
  };

  return (
    <main>
      <section style={{ padding: '2.5rem 1rem 2.2rem 1rem', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'left', color: '#df5014', marginBottom: '2.1rem' }}>{flavours.title}</h1>

          {/* Product Tabs */}
          <div className="product-tabs">
            {flavours.categories.map((cat) => (
              <button
                key={cat.id}
                className={`product-tab-btn ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
              >{cat.label}</button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {getActiveProducts().map((product, idx) => (
              <div className="product-card" key={idx}>
                <img className="product-image" src={`/config/img/ice-creams/${product.img}`} alt={product.label} />
                <div className="product-label">{product.label}</div>
                <div className="product-rate">{product.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .product-tabs {
          display: flex;
          gap: 1rem;
          margin-bottom: 22px;
        }
        .product-tab-btn {
          background: #fff8ed;
          border: 1.7px solid #df5014;
          color: #df5014;
          border-radius: 0;
          padding: 0.5em 2em;
          font-size: 1.08rem;
          font-weight: 600;
          cursor: pointer;
          transition: background .2s, color .2s, border .2s;
          outline: none;
        }
        .product-tab-btn.active,
        .product-tab-btn:hover {
          background: #df5014;
          color: #fff;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.3rem;
          align-items: start;
          justify-items: start;
          margin-bottom: 36px;
        }
        .product-card {
          background: #fff;
          border: 1.4px solid #ededed;
          border-radius: 0;
          box-shadow: none;
          padding: 0.7em 0.7em 0.7em 0.7em;
          width: 185px;
          min-height: 232px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .product-image {
          width: 100%;
          max-width: 170px;
          height: 170px;
          object-fit: cover;
          margin-bottom: 12px;
          border-radius: 0;
        }
        .product-label {
          font-size: 1.04rem;
          color: #232323;
          font-weight: 600;
          margin-bottom: 2px;
          text-align: left;
        }
        .product-rate {
          color: #df5014;
          font-size: 1.03rem;
          font-weight: 700;
          margin-top: 0;
          letter-spacing: 1px;
        }
        @media (max-width: 950px) {
          .product-grid { grid-template-columns: repeat(2, 1fr);}
          .product-card { width: 98%;}
        }
        @media (max-width: 600px) {
          .product-grid { grid-template-columns: 100%;}
          .product-card { width: 100%;}
          .product-tabs { flex-direction: column; gap: 8px;}
        }
      `}</style>
    </main>
  );
};

export default Flavours;
