import { formatPrice } from '../data/menuData';

export default function MenuCard({ item }) {
  return (
    <div className="menu-card">
      <div className="menu-card-image">
        <img 
          src={item.image} 
          alt={item.name}
          loading="lazy"
        />
      </div>
      <div className="menu-card-content">
        <h4 className="menu-card-title">{item.name}</h4>
        <p className="menu-card-description">{item.description}</p>
        <div className="menu-card-price">{formatPrice(item.price)}</div>
      </div>
    </div>
  );
}
