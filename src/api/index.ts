import axios from 'axios';
import buildUrl from 'build-url';

export const requestCategoryListings = async (category: string, api_key: string): Promise<any> => {
    const url = buildListingUrlFromCategory(category, api_key);
    return await axios.get(url);
}

const buildListingUrlFromCategory = (category: string, api_key: string): string => {
    const baseUrl = 'https://openapi.etsy.com/';
    const path = 'v2/listings/active';
    const fields = 'listing_id,title,description,price,views';
    const includes = 'Images';
    const limit = '100';
    const taxonomy_id = '70';
    const keywords = category;
    return buildUrl(baseUrl, {
        path,
        queryParams: {
            fields: fields,
            includes: includes,
            taxonomy_id: taxonomy_id,
            keywords: keywords,
            limit: limit,
            api_key: api_key,
        },
    });
};