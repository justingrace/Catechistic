import {BAPTIST_CATECHISM} from "./BaptistCatechism";
import {WESTMINSTER_SHORTER_CATECHISM} from "./WestminsterShorterCatechism";
import {SPURGEONS_CATECHISM} from "./SpurgeonsCatechism";
import {ORTHODOX_CATECHISM} from "./OrthodoxCatechism";
import {HEIDELBERG_CATECHISM} from "./HeidelbergCatechism";
import {COLORS} from "../constants/colors";

export const CATECHISMS = [
    {
        "id": "1",
        "title": "Baptist Catechism",
        "catechism": BAPTIST_CATECHISM,
        "sectionHeaders": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        "colors": [COLORS.blue, COLORS.blue2]
    },
    {
        "id": "2",
        "title": "An Orthodox Catechism",
        "catechism": ORTHODOX_CATECHISM,
        "sectionHeaders": ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
        "colors": [COLORS.orange, COLORS.orange2],

    },
    {
        "id": "3",
        "title": "Westminster Shorter Catechism",
        "catechism": WESTMINSTER_SHORTER_CATECHISM,
        "sectionHeaders": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        "colors": [COLORS.red, COLORS.red2]

    },
    {
        "id": "4",
        "title": "Heidelberg Catechism",
        "catechism": HEIDELBERG_CATECHISM,
        "colors": [COLORS.cyan, COLORS.cyan2],

    },
    {
        "id": "5",
        "title": "Spurgeon's Catechism",
        "catechism": SPURGEONS_CATECHISM,
        "sectionHeaders": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        "colors": [COLORS.forestGreen, '#16be69']
    },
];
