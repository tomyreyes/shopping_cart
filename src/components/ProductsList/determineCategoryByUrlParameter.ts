export interface UrlParameters {
    readonly categoryId: string;
}

export const determineCategoryByUrlParameter = (urlParameters: UrlParameters): string => {
    switch (urlParameters.categoryId) {
        case 'Dune':
            return 'Dune';
        case 'Harry Potter':
            return 'Harry Potter';
        case 'Star Wars':
            return 'Star Wars';
        default:
            return 'no-match';
    }
};