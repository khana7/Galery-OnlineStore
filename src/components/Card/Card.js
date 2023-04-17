import './Card.scss'
import React, { useState, useEffect } from 'react';
import Loader from '../../assets/loader.svg'

const Card = (props) => {
  const [buttonText, setButtonText] = useState('Купить');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedButtonText = localStorage.getItem(`button-${props.id}`);
    if (storedButtonText === 'В корзине') {
      setButtonText('В корзине');
    }
  }, [props.id]);

  const handleClick = () => {
    if (buttonText === 'Купить') {
      setIsLoading(true);
      setTimeout(() => {
        setButtonText('В корзине');
        localStorage.setItem(`button-${props.id}`, 'В корзине');
        setIsLoading(false);
        fetch('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error(error));
      }, 1000);
    } else {
      setButtonText('Купить');
      localStorage.removeItem(`button-${props.id}`);
    }
  }
  

  const { id, img, title, firstPrice, secondPrice, isActive, isDisabled } = props;

  return (
    <div className={`main${!isActive || isDisabled ? '-active' : ''}`}>
      <div className="card__img">
        <img src={img} alt={title} />
        <div className='card__title'>{title}</div>
        {isActive ? (
          <div className='card__info'>
            <div className='card__prices'>
              <div className='card__firstPrice'>{firstPrice}</div>
              <div className='card__secondPrice'>{secondPrice}</div>
            </div>
            <button className='card__btn' onClick={handleClick} disabled={isDisabled}>
              {isLoading ? <img src={Loader} alt="Loading..." /> : buttonText}
            </button>
          </div>
        ) : (
          <p className='card__sold'>Продано на аукционе</p>
        )}
      </div>
    </div>
  );
}

export default Card;
