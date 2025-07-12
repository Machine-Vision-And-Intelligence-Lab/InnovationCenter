
import News from "@/interfaces/News";

const news:News[] = [

    {
        id: 1,
        title: 'Innovation Center Launches New AI Research Program',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
        id: 2,
        title: 'Annual Tech Summit 2025',
        description: 'Join us for the biggest technology conference of the year featuring keynote speakers, workshops, and networking opportunities with industry leaders.',
    },
    {
        id: 3,
        title: 'Partnership with Leading Universities Announced',
        description: 'We are excited to announce strategic partnerships with top universities to advance research in sustainable technology and foster innovation in education.',
    },
    {
        id: 4,
        title: 'Developer Workshop: Next.js Best Practices',
        description: 'Learn advanced Next.js techniques and best practices from experienced developers. Perfect for both beginners and experienced developers.',
    }
]

const getNews = () =>{
    return news;
}

export default getNews;