import albumImg from "../images/album-1-300x300.jpg";
import beanieImg from "../images/beanie-2-300x300.jpg";
import beanielogoImg from "../images/beanie-with-logo-1-300x300.jpg";
import beltImg from "../images/belt-2-300x300.jpg";
import capImg from "../images/cap-2-300x300.jpg";
import hoodieImg from "../images/hoodie-2-300x300.jpg";

export function getData() {
    return [
        {title: "Album", price: 17.35, Image: albumImg},
        {title: "Beanie", price: 10, Image: beanieImg},
        {title: "Beanie Logo", price: 15, Image: beanielogoImg},
        {title: "Belt", price: 20, Image: beltImg},
        {title: "Cap", price: 35.45, Image: capImg},
        {title: "Hoodie", price: 70, Image: hoodieImg},
    ]
}