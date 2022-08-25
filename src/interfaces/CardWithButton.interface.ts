import { IButton } from './Button.interface';

export interface ICardWithButton {
    imageBig: string;
    imageSmall: string;
    title: string;
    text: string;
    button: IButton
}