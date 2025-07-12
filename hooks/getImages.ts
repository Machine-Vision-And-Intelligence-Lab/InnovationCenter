import DisplayImage from "@/interfaces/DisplayImage";

let Images :  DisplayImage[] = [];

Images = [

    {
        id: 2,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop',
        alt: 'Sunset over ocean',
        title: 'Ocean Sunset'
    },
    {
        id: 3,
        src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop',
        alt: 'Forest pathway',
        title: 'Forest Adventure'
    },
    {
        id: 4,
        src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop',
        alt: 'Desert landscape',
        title: 'Desert Exploration'
    }
]
const getImages =() => {
//      call the backend

    return Images;
}

export default getImages;