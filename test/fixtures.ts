import {creatorType} from "../src/creator/types/creator.type";
import {comicType} from "../src/comic/types/comic.type";
import {characterType} from "../src/character/types/character.type";

export const createCreatorMock = (): creatorType => {
    return {
        firstName: "Ian",
        middleName: "Berdenam",
        lastName: "Jesus",
        suffix: "Suff.",
        fullName: "Ian Berdenam Jesus"
    }
}

export const createComicMock = (): comicType => {
    return {
        digitalId: 0,
        title: "King in Black (2020) #5 (Variant)",
        issueNumber: 5,
        variantDescription: "Variant",
        description: "WHAT'S A GOD TO A NONBELIEVER?",
        isbn: "",
        diamondCode: "JAN210528",
        format: "Comic",
        pageCount: 48
    }
}

export const createCharacterMock = (): characterType => {
    return {
        name: "Fantastic Four",
        description: "After being exposed to cosmic rays, Reed Richards, Susan Storm, Ben Gr…"
    }
}
