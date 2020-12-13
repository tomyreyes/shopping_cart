// tslint:disable:quotemark trailing-comma any
import { IncomingDataSchema } from "./types";

const image = {
    "type": "object",
    "properties": {
        "listing_image_id": {
            "type": "number"
        },
        "hex_code": {
            "type": "string"
        },
        "red": {
            "type": "number"
        },
        "green": {
            "type": "number"
        },
        "blue": {
            "type": "number"
        },
        "hue": {
            "type": "number"
        },
        "saturation": {
            "type": "number"
        },
        "brightness": {
            "type": "number"
        },
        "creation_tsz": {
            "type": "number"
        },
        "listing_id": {
            "type": "number"
        },
        "rank": {
            "type": "number"
        },
        "url_75x75": {
            "type": "string"
        },
        "url_170x135": {
            "type": "string"
        },
        "url_570xN": {
            "type": "string"
        },
        "url_fullxfull": {
            "type": "string"
        },
        "full_height": {
            "type": "number"
        },
        "full_width": {
            "type": "number"
        },
    },
    "required": ["listing_image_id"]
};

const imagesArray = {
    "type": "array",
    "items": image,
};

const item = {
    "type": "object",
    "properties": {
        "listing_id": {
            "type": "number"
        },
        "title": {
            "type": "string"
        },
        "description": {
            "type": "string"
        },
        "price": {
            "type": "string"
        },
        "views": {
            "type": "number"
        },
        "Images": imagesArray,
    },
    "required": ["listing_id", "title", "description", "price", "views", "Images"]
};

export const itemsArray: IncomingDataSchema = {
    "type": "array",
    "items": item
};
