import { Icon } from '@iconify/react';
import MenuCard from './MenuCard';

export default function MenuSection({ category }) {
  return (
    <section className="menu-section" id={category.key}>
      <div className="container">
        {/* Section Header */}
        <div className="menu-section-header">
          <div className="menu-section-icon">
            <Icon icon={category.icon} width="32" height="32" />
          </div>
          <h2>{category.title}</h2>
          <div className="accent-line"></div>
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {category.items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
