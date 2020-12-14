import Dune from '../../images/dune.jpeg';
import HarryPotter from '../../images/harrypotter.jpeg';
import StarWars from '../../images/starwars.jpeg';

export interface Category {
    readonly title: string;
    readonly description: string;
    readonly imageUrl: string;
    readonly path: string;
}

export const categories: ReadonlyArray<Category> = [
    {
        title: 'Dune',
        description: 'From handmade still-suits to lasguns, we have it all!',
        imageUrl: Dune,
        path: '/categories/dune',
    },
    {
        title: 'Harry Potter',
        description: 'Careful. You might mistake yourself for being in Diagon Alley!',
        imageUrl: HarryPotter,
        path: '/categories/harrypotter',
    },
    {
        title: 'Star Wars',
        description: 'Mini Yoda Plushies and lightsabers Need we say more?',
        imageUrl: StarWars,
        path: '/categories/starwars',
    },
];
