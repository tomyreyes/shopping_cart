import axios, { AxiosResponse } from 'axios';
import buildUrl from 'build-url';

export const requestCategoryListings = async (categoryId: string, api_key: string): Promise<AxiosResponse> => {
    const url = buildListingUrlFromCategory(categoryId, api_key);
    return await axios.get(url);
};

const buildListingUrlFromCategory = (categoryId: string, api_key: string): string => {
    const baseUrl = 'https://openapi.etsy.com/';
    const path = 'v2/listings/active';
    const fields = 'listing_id,title,description,price,views';
    const includes = 'Images';
    const limit = '25';
    const taxonomy_id = '70';
    const keywords = categoryId;
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