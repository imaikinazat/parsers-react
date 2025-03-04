'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import styles from './styles.module.scss';


export default function AlertDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <IconButton color='info' size='medium' onClick={handleClickOpen}>
                <InfoIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                maxWidth={'md'}
            >
                <DialogTitle id="alert-dialog-title">
                    Информация по статусам и раскраске
                </DialogTitle>
                <DialogContent>
                    <DialogContentText mt={2} mb={3}>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#fff8e1'}}></div>
                            <div className={styles['main-page-table-info-text']}>Не запускались со вчерашнего дня</div>
                        </div>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#e8f5e9'}}></div>
                            <div className={styles['main-page-table-info-text']}>В работе</div>
                        </div>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#ffebee'}}></div>
                            <div className={styles['main-page-table-info-text']}>Проверка просрочена</div>
                        </div>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#e1f5fe'}}></div>
                            <div className={styles['main-page-table-info-text']}>Нет скачанных тендеров</div>
                        </div>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#fafafa'}}></div>
                            <div className={styles['main-page-table-info-text']}>Отключен</div>
                        </div>
                        <div className={styles['main-page-table-info-color']}>
                            <div className={styles['main-page-table-info-label']} style={{backgroundColor: '#f3e5f5'}}></div>
                            <div className={styles['main-page-table-info-text']}>Парсер работает более 5 часов</div>
                        </div>
                    </DialogContentText>
                    <DialogContentText mb={3}>
                        У каждого парсера есть свой приоритет.<br />
                        Приоритет 1 - это значит парсер очень важен.<br />
                        От 1 до 5 по нисходящей. <br />
                        Приоритет 5 - парсер наименее важен.<br />
                    </DialogContentText>
                    <DialogContentText mb={3}>
                        Так же у каждого приоритета есть свой срок, в который его необходимо проверить. <br/>
                        Придписанное время проверки для приоритетов: <br /><br />
                        Приоритет 1 - проверять от 0 до 1 дня<br />
                        Приоритет 2 - проверять от 0 до 7 дней<br />
                        Приоритет 3 - проверять от 0 до 14 дней<br />
                        Приоритет 4 - проверять от 0 до 70 дней<br />
                        Приоритет 5 - проверять от 0 до 90 дней<br />
                    </DialogContentText>
                    <DialogContentText>
                        Есть не успеть проверить в указанное время, ячейки "Приоритет" и "Последнее время проверки" станут красными, это значит проверка просрочена
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
