import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const pastQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question: 'for how many years have i gone to hm?',
        answer: '5',
    },
    {
        points: 300,
        question:
            'which countries\' flags are these?',
        imgSrc: "https://media.istockphoto.com/id/924430118/vector/vietnam-and-south-korea-flags-vector-illustration.jpg?s=612x612&w=is&k=20&c=lnZ2pf17Y1bRNLZ22RhNwu7sejbx2_bLYESZltaE7yY=",
        answer: 'south korea, vietnam',
    },
    {
        points: 100,
        question:
            'how many siblings do i have?',
        answer: '2',
    },
    {
        points: 400,
        question: 'what month was i born in?',
        answer: 'june',
    }
]);

const presentQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'what video game is this?',
            imgSrc: 'qf91enynlq3hlgtkmbon.avif',
            answer: 'rocket league',
        },
        {
            points: 100,
            question:
                'what is this game',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chess_pieces_close_up.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
            answer: 'chess',
        },
        {
            points: 300,
            question: 'what neighborhood do i live in new york city?',
            answer: 'upper west side',
        },
        {
            points: 400,
            question:
                'what ski resort is this? hint: its in the catskills',
            imgSrc:
                "https://www.belleayre.com/wp-content/uploads/sites/5/fly-images/29713/Belleayre-Uphill-Trailmap-22-23-400x400-c.jpg",
            answer: 'belleayre mountain',
        }
    ]);
const futureQuestions: Question[] = sortQuestions([
    {
        points: 200,
        question:
            'what is my rapid rating on chess.com? (rounded to the hundreds)',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Chess_pieces_close_up.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
        answer: '2000',
    },
    {
        points: 100,
        question:
            'what winter sport am i doing this year?',
        answer: 'varsity skiing',
    },
    {
        points: 300,
        question:
            'what daw is this?',
        imgSrc: "https://www.image-line.com/static/assets/fl-studio-screen-demo-poster.626d38c.jpg",
        answer: 'fl studio',
    }
        {
        points: 400,
        question:
            'what\'s my local pizza place called?',
        answer: 'pizza pete\'s',
    }
]);


const categories = [
    {
        title: 'Mikey\'s Past',
        questions: pastQuestions
    },
    {
        title: `Mikey's Present`,
        questions: presentQuestions
    },
    {
        title: "Mikey's Future & Present 2",
        questions: futureQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}