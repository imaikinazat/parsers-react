const dictionaries = {
    priorities: [
        { value: 1, name: 'Приоритет 1' },
        { value: 2, name: 'Приоритет 2' },
        { value: 3, name: 'Приоритет 3' },
    ],
    filters: [
        { value: 1, name: 'Парсер работает сейчас' },
        { value: 2, name: 'Парсер не запускался со вчера' },
        { value: 3, name: 'Пора проверять' },
        { value: 4, name: 'Отменённые' }
    ],
    sorting: [
        { value: 1, name: 'По умолчанию (Приоритетность площадки)' },
        { value: 2, name: 'По дате последнего запуска' },
        { value: 3, name: 'По дате завершения' },
        { value: 4, name: 'Добавлено за сутки' },
        { value: 5, name: 'Кол-во' },
        { value: 6, name: 'Последняя проверка' },
    ],
};

export default dictionaries;