const statuses = ['Жёлтый', 'Зелёный', 'Красный', 'Голубой', 'Серый', 'Фиолетовый'];

const generateFakeRow = (id) => {
    const getRandomStatus = () => statuses[Math.floor(Math.random() * statuses.length)];
    const getRandomDateTime = () => {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 30));
        return date.toLocaleString('ru-RU', { hour12: false });
    };

    return {
        id,
        workTimeMinutes: { value: Math.floor(Math.random() * 120) + 1, status: getRandomStatus() },
        lastRunDateTime: { value: getRandomDateTime(), status: getRandomStatus() },
        lastEndDateTime: { value: getRandomDateTime(), status: getRandomStatus() },
        parserPlatform: { value: `Платформа ${Math.floor(Math.random() * 100)}`, status: getRandomStatus() },
        addedToday: { value: Math.floor(Math.random() * 101), status: getRandomStatus() },
        tempCount: { value: Math.floor(Math.random() * 51), status: getRandomStatus() },
        platformPriority: { value: `Приоритет ${Math.floor(Math.random() * 10) + 1}`, status: getRandomStatus() },
        lastCheckDateTime: { value: getRandomDateTime(), status: getRandomStatus() },
        errors: { value: Math.random() < 0.5 ? [`Ошибка ${Math.floor(Math.random() * 100)}`, `Ошибка ${Math.floor(Math.random() * 100)}`] : [], status: getRandomStatus() }
    };
};

const generateFakeRows = (count) => {
    const rows = [];
    for (let i = 1; i <= count; i++) {
        rows.push(generateFakeRow(i));
    }
    return rows;
};

const fakeRows = generateFakeRows(10);
export default fakeRows;