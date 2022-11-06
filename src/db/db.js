import albumImg from "../images/album-1-300x300.jpg";
import beanieImg from "../images/beanie-2-300x300.jpg";
import beanielogoImg from "../images/beanie-with-logo-1-300x300.jpg";
import beltImg from "../images/belt-2-300x300.jpg";
import capImg from "../images/cap-2-300x300.jpg";
import hoodieImg from "../images/hoodie-2-300x300.jpg";

export function getData() {
    return [
        {id: 1, title: "Album", price: 17.35, Image: albumImg},
        {id: 2, title: "Beanie", price: 10, Image: beanieImg},
        {id: 3, title: "Beanie Logo", price: 15, Image: beanielogoImg},
        {id: 4, title: "Belt", price: 20, Image: beltImg},
        {id: 5, title: "Cap", price: 35.45, Image: capImg},
        {id: 6, title: "Hoodie", price: 70, Image: hoodieImg},
    ]
}