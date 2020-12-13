// tslint:disable:quotemark trailing-comma any
import { IncomingDataSchema } from "./types";

const image = {
    "type": "object",
    "properties": {
        "listing_image_id": {
            "type": "integer"
        },
        "hex_code": {
            "type": "string"
        },
        "red": {
            "type": "integer"
        },
        "green": {
            "type": "integer"
        },
        "blue": {
            "type": "integer"
        },
        "hue": {
            "type": "integer"
        },
        "saturation": {
            "type": "integer"
        },
        "brightness": {
            "type": "integer"
        },
        "is_black_and_white": {
            "type": "boolean"
        },
        "creation_tsz": {
            "type": "integer"
        },
        "listing_id": {
            "type": "integer"
        },
        "rank": {
            "type": "integer"
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
            "type": "integer"
        },
        "full_width": {
            "type": "integer"
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
            "type": "integer"
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
            "type": "integer"
        },
        "Images": imagesArray,
    },
    "required": ["listing_id", "title", "description", "price", "views", "Images"]
};

export const itemsArray: IncomingDataSchema = {
    "type": "array",
    "items": item
};
