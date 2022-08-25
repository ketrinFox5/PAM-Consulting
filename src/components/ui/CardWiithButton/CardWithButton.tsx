import React from 'react';
import { ICardWithButton } from '../../../interfaces/CardWithButton.interface';
import Button from '../Button/Button';
import './CardWithButton.scss';

const CardWithButton = ({imageSmall, imageBig, title, text, button}: ICardWithButton) => {
    if (!imageSmall || !imageBig) return null;
    return (
        <div className="card">
            <div className="card__image" >
                <picture>
                    <source media="(min-width:480px) and (max-width:1000px)" srcSet={imageBig} />
                    <img src={imageSmall} alt='' id="card-image"/> 
                </picture>
            </div>
            <div className="card__content">
                <div className="card__title title h3">
                    {title}
                </div>
                <div className="card__text title h5">
                    {text}
                </div>
                <Button
                    text={button.text}
                    size={button.size}
                    textSize={button.textSize}
                />
            </div>
        </div>
    )
}

export default CardWithButton;