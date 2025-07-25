import React from 'react';
import ProgramCard from '../../components/ProgramCard';

interface Program {
    id: number;
    heading: string;
    pdfLink: string;
    formLink: string;
    date: string;
}

const ProgramsPage: React.FC = () => {
    // Hard-coded program data
    // todo: Replace with dynamic data fetching if needed
    const programs: Program[] = [
        {
            id: 1,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1ABC123/view",
            formLink: "https://forms.google.com/forms/d/1XYZ789/viewform",
            date: "14/07/2025"
        },
        {
            id: 2,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1DEF456/view",
            formLink: "https://forms.google.com/forms/d/2ABC456/viewform",
            date: "13/07/2025"
        },
        {
            id: 3,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1GHI789/view",
            formLink: "https://forms.google.com/forms/d/3DEF123/viewform",
            date: "12/07/2025"
        },
        {
            id: 4,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1JKL012/view",
            formLink: "https://forms.google.com/forms/d/4GHI789/viewform",
            date: "12/07/2025"
        },
        {
            id: 5,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1MNO345/view",
            formLink: "https://forms.google.com/forms/d/5JKL012/viewform",
            date: "11/07/2025"
        },
        {
            id: 6,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1MNO345/view",
            formLink: "https://forms.google.com/forms/d/5JKL012/viewform",
            date: "11/07/2025"
        },
        {
            id: 7,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1MNO345/view",
            formLink: "https://forms.google.com/forms/d/5JKL012/viewform",
            date: "10/07/2025"
        },
        {
            id: 8,
            heading: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
            pdfLink: "https://drive.google.com/file/d/1MNO345/view",
            formLink: "https://forms.google.com/forms/d/5JKL012/viewform",
            date: "09/07/2025"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Programs
                    </h1>
                </div>

                <div className="space-y-4">
                    {programs.map((program, index) => (
                        <ProgramCard
                            key={program.id}
                            heading={program.heading}
                            pdfLink={program.pdfLink}
                            formLink={program.formLink}
                            number={index + 1}
                            date={program.date}
                        />
                    ))}
                </div>

                {programs.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No programs available at the moment.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProgramsPage;