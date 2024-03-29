import React, { useEffect, useState } from 'react';
import css from './LiItem.module.css';

type LiItemProps = {
  lang: 'ru' | 'eng',
  href: string,
  ruName: string,
  engName: string,
  img: string,
  color: string,
  defaultHover?: boolean,
}

const LiItem: React.FC<LiItemProps> = ({ lang, href, ruName, engName, img, color, defaultHover }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    if (!defaultHover) {
      setIsHovered(true);
    }
  }

  const handleMouseLeave = () => {
    if (!defaultHover) {
      setIsHovered(false);
    }
  }

  const getColor = () => {
    switch (color) {
      case '#ee7752':
        return 'brightness(0) saturate(100%) invert(71%) sepia(51%) saturate(5300%) hue-rotate(329deg) brightness(103%) contrast(87%)'
      case '#e73c7e':
        return 'brightness(0) saturate(100%) invert(36%) sepia(53%) saturate(1724%) hue-rotate(303deg) brightness(92%) contrast(98%)'
      case '#23a6d5':
        return 'brightness(0) saturate(100%) invert(60%) sepia(99%) saturate(1242%) hue-rotate(161deg) brightness(86%) contrast(94%)'
      case '#23d5ab':
        return 'brightness(0) saturate(100%) invert(58%) sepia(89%) saturate(361%) hue-rotate(116deg) brightness(100%) contrast(94%)'
      default:
        return 'invert()';
    }
  }

  const handleSmoothScroll = () => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  useEffect(() => {
    if (defaultHover) {
      setIsHovered(true);
    }
  }, [defaultHover])

  return (
    <li
      onClick={handleSmoothScroll}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={isHovered ? `${css.item} ${css.item_hover} scroll_to` : `${css.item} scroll_to`}
      style={isHovered ? { border: `1px solid ${color}` } : {}}
    >
      <a aria-label={`Go to ${engName}`} href={href} style={{ color: color }}>
        <img style={{ filter: getColor() }} src={img} alt={engName} />
        {isHovered && (lang === 'ru' ? ruName : engName)}
      </a>
    </li>
  );
};

export default LiItem;