import './homepage.css';
import IconArrow from '../../assets/icons/icon_arrow.svg';
import IconMenu from '../../assets/icons/icon_menu.svg';
import IconSearch from '../../assets/icons/icon_search.svg';
import IconFilter from '../../assets/icons/icon_filter.svg';
import Input from '../../components/Input/Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chip from '../../components/Chips/Chip';
import CafeCard from '../../components/Cafe/CafeCard';

export default function Homepage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>('');

  function updateSearch(newValue: string) {
    setSearch(newValue);
  }
  return (
    <>
      <div className="navbar">
        <header className="homepage">
          <img
            src={IconArrowObject.src}
            title={IconArrowObject.title}
            alt={IconArrowObject.alt}
            onClick={() => {
              navigate(-1);
            }}
          />
          <h1 className="size-p">Start a new day with a cup of coffee.</h1>
          <img
            src={IconMenuObject.src}
            title={IconMenuObject.title}
            alt={IconMenuObject.alt}
            onClick={() => {
              //! TODO - Add menu
            }}
          />
        </header>
        <Input
          className={`${search != '' ? 'not-empty' : 'empty'}`}
          label="Search your next coffee"
          id="search-coffee"
          type="text"
          placeholder="What shall it be?"
          value={search}
          onChange={updateSearch}
          trailingIcon={IconSearchObject}
          isPrimary={false}
        />
      </div>

      <main className="homepage">
        <div className="filters-container">
          <Chip isSelected onClick={() => {}}>
            Cappucino
          </Chip>
          <Chip onClick={() => {}}>Espresso</Chip>
          <Chip onClick={() => {}}>Latte</Chip>
          <img
            className="filter-icon icon "
            src={iconFilterObject.src}
            title={iconFilterObject.title}
            alt={iconFilterObject.alt}
            onClick={iconFilterObject.onClick}
          />
        </div>
        <div className="results-container">
          {cafeTestData.map((cafe) => {
            return (
              <CafeCard
                cafeImage={cafe.cafeImage}
                cafeName={cafe.cafeName}
                distance={cafe.distance}
                rating={cafe.rating}
                isFavorite={cafe.isFavorite}
                onClick={() => {
                  //! TODO - Add navigation
                }}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

const IconArrowObject = {
  src: IconArrow,
  title: 'Go back',
  alt: 'Go back',
};

const IconMenuObject = {
  src: IconMenu,
  title: 'Menu',
  alt: 'Menu icon',
};

const IconSearchObject = {
  src: IconSearch,
  title: 'Search',
  alt: 'Search icon',
  onClick: () => {
    //! TODO - Add search
  },
};

const iconFilterObject = {
  src: IconFilter,
  title: 'Filter',
  alt: 'Filter icon',
  onClick: () => {
    //! TODO - Add filter
  },
};

const cafeTestData = [
  {
    cafeImage: {
      src: 'https://picsum.photos/200/300',
      title: 'Cafe Image 1',
      alt: 'Cafe 1',
    },
    cafeName: 'Coffee Delight',
    distance: 2.5,
    rating: 4.2,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/301',
      title: 'Cafe Image 2',
      alt: 'Cafe 2',
    },
    cafeName: 'Espresso Haven',
    distance: 1.8,
    rating: 4.5,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/302',
      title: 'Cafe Image 3',
      alt: 'Cafe 3',
    },
    cafeName: 'Mocha Bliss',
    distance: 3.2,
    rating: 4.0,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/300',
      title: 'Cafe Image 1',
      alt: 'Cafe 1',
    },
    cafeName: 'Coffee Delight',
    distance: 2.5,
    rating: 4.2,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/301',
      title: 'Cafe Image 2',
      alt: 'Cafe 2',
    },
    cafeName: 'Espresso Haven',
    distance: 1.8,
    rating: 4.5,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/302',
      title: 'Cafe Image 3',
      alt: 'Cafe 3',
    },
    cafeName: 'Mocha Bliss',
    distance: 3.2,
    rating: 4.0,
    isFavorite: false,
  },
  // Additional items
  {
    cafeImage: {
      src: 'https://picsum.photos/200/303',
      title: 'Cafe Image 4',
      alt: 'Cafe 4',
    },
    cafeName: 'Latte Love',
    distance: 4.5,
    rating: 4.8,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/304',
      title: 'Cafe Image 5',
      alt: 'Cafe 5',
    },
    cafeName: 'Cappuccino Corner',
    distance: 2.0,
    rating: 4.3,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/305',
      title: 'Cafe Image 6',
      alt: 'Cafe 6',
    },
    cafeName: 'Bean Buzz',
    distance: 3.8,
    rating: 4.1,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/306',
      title: 'Cafe Image 7',
      alt: 'Cafe 7',
    },
    cafeName: 'Sugar & Spice Cafe',
    distance: 1.5,
    rating: 4.6,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/307',
      title: 'Cafe Image 8',
      alt: 'Cafe 8',
    },
    cafeName: 'Java Junction',
    distance: 2.2,
    rating: 4.4,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/308',
      title: 'Cafe Image 9',
      alt: 'Cafe 9',
    },
    cafeName: 'Frothy Frolic',
    distance: 4.0,
    rating: 4.2,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/309',
      title: 'Cafe Image 10',
      alt: 'Cafe 10',
    },
    cafeName: 'Whipped Wonders',
    distance: 3.5,
    rating: 4.7,
    isFavorite: true,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/310',
      title: 'Cafe Image 11',
      alt: 'Cafe 11',
    },
    cafeName: 'Creamy Creations',
    distance: 2.8,
    rating: 4.0,
    isFavorite: false,
  },
  {
    cafeImage: {
      src: 'https://picsum.photos/200/311',
      title: 'Cafe Image 12',
      alt: 'Cafe 12',
    },
    cafeName: 'Velvet Vibes',
    distance: 1.2,
    rating: 4.9,
    isFavorite: true,
  },
];
