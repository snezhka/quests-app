export { Link, Route, BrowserRouter } from 'react-router-dom';
export { default as Button } from './button/button';
export { default as Container } from './container/container';
export { default as Footer } from './footer/footer';
export { default as Header } from './header/header';
export { default as MainLayout } from './main-layout/main-layout';
export { default as PageHeading } from './page-heading/page-heading';
export { default as PageSubtext } from './page-subtext/page-subtext';
export { default as PageTitle } from './page-title/page-title';

export async function fetchQuests() {
    const response = await fetch('http://localhost:3001/quests');
    const data = await response.json();
    console.log(data);
    return data;
}
export async function fetchQuest({ params }) {
    const response = await fetch(`http://localhost:3001/quests/${params.questId}`);
    const data = await response.json();
    console.log(data);
    return data;
}

// export async function sendOrder(data) {
//     console.log('ORDER after', data);
//     const response = await fetch('http://localhost:3001/orders', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: { 'Content-Type': 'application/json' },
//     });
//     const result = await response.json();
//     console.log(result);
//     // return redirect(`/quests/${params.questId}`);
// }


export function convertQuestLevel(questLevel) {
    let level = "";
    switch (questLevel) {
        case "hard":
            level = "сложный";
        case "medium":
            level = "средний";
        case "easy":
            level = "легкий";
    }
    return level;
}

export function convertQuestType(questType) {
    let level = "";
    switch (questType) {
        case "adventures":
            level = "приключения";
        case "medium":
            level = "средний";
        case "easy":
            level = "легкий";
    }
    return level;
}
