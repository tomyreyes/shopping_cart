export const determineValidCategoryId = (categoryId: string): string => {
    switch (categoryId) {
        case 'dune':
            return 'dune';
        case 'harrypotter':
            return 'Harry Potter';
        case 'starwars':
            return 'Star Wars';
        default:
            return 'no-match';
    }
};