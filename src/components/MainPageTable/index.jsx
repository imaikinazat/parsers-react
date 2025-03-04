'use client';
import { TableContainer, Table, TableRow, TableCell, TableHead, TableBody, AppBar, Toolbar, IconButton, Typography, Dialog, Slide } from '@mui/material';
import styles from './styles.module.scss';
import { useState, forwardRef } from 'react';
import ParserInfo from '@/dialogs/MainPageTableInfo/ParserInfo';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const MainPageTable = (props) => {
    console.log(props);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenModal = () => {
        setOpenDialog(true);
    }

    const handleCloseModal = () => {
        setOpenDialog(false);
    }

    let createData = (id, time, lastLaunch, lastСompletion, parser, addedPerDay, patchCount, placementPriority, lastCheck, errors) => {
        return { id, time, lastLaunch, lastСompletion, parser, addedPerDay, patchCount, placementPriority, lastCheck, errors };
    }

    let colors = {
        success: '#e8f5e9',
        warning: '#fff8e1',
        disabled: '#fafafa',
        primary: '#e1f5fe',
        alert: '#ffebee',
        acent: '#f3e5f5'
    }

    let rows = [
        createData(
            1,
            { data: '72', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: '2024-03-15 11:57:02', color: colors.success },
            { data: 'Портал поставщиков', color: colors.success },
            { data: '127', color: colors.success },
            { data: '2', color: colors.success },
            { data: 'Приоритет 3', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: true, color: colors.success }
        ),
        createData(
            2,
            { data: '72', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: '2024-03-15 11:57:02', color: colors.warning },
            { data: 'Портал поставщиков', color: colors.warning },
            { data: '127', color: colors.warning },
            { data: '2', color: colors.warning },
            { data: 'Приоритет 3', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: true, color: colors.warning }
        ),
        createData(
            3,
            { data: '72', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: '2024-03-15 11:57:02', color: colors.disabled },
            { data: 'Портал поставщиков', color: colors.disabled },
            { data: '127', color: colors.disabled },
            { data: '2', color: colors.disabled },
            { data: 'Приоритет 3', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: true, color: colors.disabled }
        ),
        createData(
            4,
            { data: '72', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: '2024-03-15 11:57:02', color: colors.success },
            { data: 'Портал поставщиков', color: colors.success },
            { data: '127', color: colors.success },
            { data: '2', color: colors.success },
            { data: 'Приоритет 3', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: true, color: colors.success }
        ),
        createData(
            5,
            { data: '72', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: '2024-03-15 11:57:02', color: colors.warning },
            { data: 'Портал поставщиков', color: colors.warning },
            { data: '127', color: colors.warning },
            { data: '2', color: colors.warning },
            { data: 'Приоритет 3', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: true, color: colors.warning }
        ),
        createData(
            6,
            { data: '72', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: '2024-03-15 11:57:02', color: colors.disabled },
            { data: 'Портал поставщиков', color: colors.disabled },
            { data: '127', color: colors.disabled },
            { data: '2', color: colors.disabled },
            { data: 'Приоритет 3', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: true, color: colors.disabled }
        ),
        createData(
            7,
            { data: '72', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: '2024-03-15 11:57:02', color: colors.success },
            { data: 'Портал поставщиков', color: colors.success },
            { data: '127', color: colors.success },
            { data: '2', color: colors.success },
            { data: 'Приоритет 3', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.success },
            { data: true, color: colors.success }
        ),
        createData(
            8,
            { data: '72', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: '2024-03-15 11:57:02', color: colors.warning },
            { data: 'Портал поставщиков', color: colors.warning },
            { data: '127', color: colors.warning },
            { data: '2', color: colors.warning },
            { data: 'Приоритет 3', color: colors.warning },
            { data: '2024-03-15 10:45:02', color: colors.warning },
            { data: true, color: colors.warning }
        ),
        createData(
            9,
            { data: '72', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: '2024-03-15 11:57:02', color: colors.disabled },
            { data: 'Портал поставщиков', color: colors.disabled },
            { data: '127', color: colors.disabled },
            { data: '2', color: colors.disabled },
            { data: 'Приоритет 3', color: colors.disabled },
            { data: '2024-03-15 10:45:02', color: colors.disabled },
            { data: true, color: colors.disabled }
        ),
        createData(
            10,
            { data: '72', color: colors.success },
            { data: '2024-03-15 10:45:02', color: colors.alert },
            { data: '2024-03-15 11:57:02', color: colors.alert },
            { data: 'Портал поставщиков', color: colors.disabled },
            { data: '127', color: colors.disabled },
            { data: '2', color: colors.primary },
            { data: 'Приоритет 3', color: colors.primary },
            { data: '2024-03-15 10:45:02', color: colors.acent },
            { data: true, color: colors.acent }
        )
    ]

    return <TableContainer>
        <Table>
            <caption className={styles['table-footer-counter']}>Всего парсеров: 127</caption>
            <TableHead>
                <TableRow>
                    <TableCell className={styles['table-head-cell']}>Время работы, мин</TableCell>
                    <TableCell className={styles['table-head-cell']}>Последний запуск</TableCell>
                    <TableCell className={styles['table-head-cell']}>Последнее завершение</TableCell>
                    <TableCell className={styles['table-head-cell']}>Парсер/Площадка</TableCell>
                    <TableCell className={styles['table-head-cell']}>Добавлено за сутки</TableCell>
                    <TableCell className={styles['table-head-cell']}>Кол-во времянка</TableCell>
                    <TableCell className={styles['table-head-cell']}>Приоритет площадки</TableCell>
                    <TableCell className={styles['table-head-cell']}>Последняя проверка</TableCell>
                    <TableCell className={styles['table-head-cell']}>Ошибки</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(item => (
                    <TableRow onClick={handleOpenModal} className={styles['table-body-row']} key={item.id}>
                        <TableCell style={{ backgroundColor: item.time.color }}>{item.time.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.lastLaunch.color }}>{item.lastLaunch.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.lastСompletion.color }}>{item.lastСompletion.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.parser.color }}>{item.parser.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.addedPerDay.color }}>{item.addedPerDay.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.patchCount.color }}>{item.patchCount.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.placementPriority.color }}>{item.placementPriority.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.lastCheck.color }}>{item.lastCheck.data}</TableCell>
                        <TableCell style={{ backgroundColor: item.errors.color }}>{item.errors.data ? '1' : '2'}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <ParserInfo openDialog={openDialog} closeDialog={handleCloseModal} />
    </TableContainer>

}

export default MainPageTable;