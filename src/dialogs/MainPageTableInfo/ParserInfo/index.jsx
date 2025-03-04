import { Dialog, AppBar, Toolbar, Typography, IconButton, Slide, Grid2, Container, Switch, Chip, TextField, Box, Fab, Zoom, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Link, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ruRU } from '@mui/x-date-pickers/locales';
import { forwardRef, useState } from 'react';
import styles from './styles.module.scss';
import { MobileDateTimePicker } from '@mui/x-date-pickers';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ParserInfo = ({ openDialog, closeDialog }) => {
    let [textFieldParserActive, setTextFieldParserActive] = useState(false);
    let [textFieldPlacementActive, setTextFieldPlacementActive] = useState(false);
    return (
        <Dialog
            fullScreen
            open={openDialog}
            onClose={closeDialog}
            TransitionComponent={Transition}
        >
            <AppBar color='default' position='fixed'>
                <Toolbar variant="dense">
                    <Typography sx={{ flex: 1 }} variant="h6" component="div">
                        Название парсера или площадки
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={closeDialog}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={styles['parser-info-wrapper']}>
                <Grid2 mt={9} container>
                    <Grid2 size={7} className={styles['parser-info-leftside']}>
                        <div className={styles['parser-info-title-wrapper']}>
                            <div className={styles['parser-info-title']}>
                                <Typography variant='h5' component='h5'>TestParserName-1234321</Typography>
                                <Chip className={styles['parser-info-chip']} color='success' label='Парсер включен' />
                            </div>
                        </div>
                        <div className={styles['parser-info-controls']}>
                            <div className={styles['parser-info-control-wrapper']}>
                                <div className={styles['text']}>Время проверки</div>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                    adapterLocale="ru-RU"
                                    localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
                                >
                                    <MobileDateTimePicker label="Время проверки" size='small' ampm={false}/>
                                </LocalizationProvider>
                            </div>
                            <div className={styles['parser-info-control-wrapper']}>
                                <div className={styles['text']}>Приоритет</div>
                                <TextField id="outlined-basic" label="Приоритет" size='small' variant="outlined" />
                            </div>
                            <div className={styles['parser-info-control-wrapper']}>
                                <div className={styles['text']}>Статус парсера</div>
                                <div className={styles['switch']}>
                                    <Switch defaultChecked color='success' />
                                    <span>Работает</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles['parser-info-textfield']}>
                            <Box>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="О парсере"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={14}
                                    onFocus={() => setTextFieldParserActive(true)}
                                    onBlur={() => setTextFieldParserActive(false)}
                                    placeholder='Напишите что-нибудь важное о тендере'
                                    variant="outlined"
                                />
                                {textFieldParserActive && <Zoom in={textFieldParserActive} unmountOnExit><Fab className={styles['textfield-float-button']} variant='extended' color='success' size='medium'>Сохранить</Fab></Zoom>}
                            </Box>
                        </div>
                        <div className={styles['parser-info-textfield']}>
                            <Box>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="О площадке"
                                    fullWidth
                                    multiline
                                    minRows={4}
                                    maxRows={14}
                                    onFocus={() => setTextFieldPlacementActive(true)}
                                    onBlur={() => setTextFieldPlacementActive(false)}
                                    placeholder='Напишите что-нибудь важное о площадке'
                                    variant="outlined"
                                />
                                {textFieldPlacementActive && <Zoom in={textFieldPlacementActive} unmountOnExit><Fab className={styles['textfield-float-button']} variant='extended' color='success' size='medium'>Сохранить</Fab></Zoom>}
                            </Box>
                        </div>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={styles['table-head-cell']}>Дата изменения</TableCell>
                                        <TableCell className={styles['table-head-cell']}>Задача</TableCell>
                                        <TableCell className={styles['table-head-cell']}>Статус</TableCell>
                                        <TableCell className={styles['table-head-cell']}>Кто изменил</TableCell>
                                        <TableCell className={styles['table-head-cell-icon']}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={styles['table-row-cell']}>
                                            15.01.2025 10:45:02
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <Link href='#'>Перейти</Link>
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            В работе
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            @username
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <IconButton color="primary" aria-label="Изменить">
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles['table-row-cell']}>
                                            15.01.2025 10:45:02
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <Link href='#'>Перейти</Link>
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            В работе
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            @username
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <IconButton color="primary" aria-label="Изменить">
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles['table-row-cell']}>
                                            15.01.2025 10:45:02
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <Link href='#'>Перейти</Link>
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            В работе
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            @username
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <IconButton color="primary" aria-label="Изменить">
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={styles['table-row-cell']}>
                                            15.01.2025 10:45:02
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <Link href='#'>Перейти</Link>
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            В работе
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            @username
                                        </TableCell>
                                        <TableCell className={styles['table-row-cell']}>
                                            <IconButton color="primary" aria-label="Изменить">
                                                <EditIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid2>
                    <Grid2 className={styles['rightside-wrapper']} size={5}>
                        <div className={styles['rightside-title']}>
                            <Typography sx={{ flex: 1 }} variant="h6" component="div">
                                Время запуска парсеров
                            </Typography>
                            <Button variant='contained' color='success' startIcon={<TroubleshootIcon />}>Узнать</Button>
                        </div>
                        <div className={styles['rightside-tenders-info']}>
                            <div className={styles['rightside-tender-info']}>
                                <div className={styles['rightside-tender-info-label']}>Новые тендеры:</div>
                                <div className={styles['rightside-tender-info-value']}>8:45, 17:03, 21:22</div>
                            </div>
                            <div className={styles['rightside-tender-info']}>
                                <div className={styles['rightside-tender-info-label']}>Обновления:</div>
                                <div className={styles['rightside-tender-info-value']}>10:14, 15:41</div>
                            </div>
                            <div className={styles['rightside-tender-info']}>
                                <div className={styles['rightside-tender-info-label']}>Протоколы:</div>
                                <div className={styles['rightside-tender-info-value']}>13:30, 20:00</div>
                            </div>
                            <div className={styles['rightside-tender-info']}>
                                <div className={styles['rightside-tender-info-label']}>Логи:</div>
                                <div className={styles['rightside-tender-info-value']}>launch_sbor19.log</div>
                            </div>
                        </div>
                        <div className={styles['rightside-note']}>
                            <Typography variant='h6'>Важно:</Typography>
                            <ul>
                                <li>Новые тендеры: парсер собирает данные, которые появились с его последнего запуска. В системе будет через 2-3 часа</li>
                                <li>Обновления: парсер проверяет уже добавленные данные. В системе будет через 1-2 часа</li>
                                <li>Протоколы: парсер добавляет протоколы/победителей. В системе будет через 1-2 часа</li>
                            </ul>
                        </div>
                    </Grid2>
                </Grid2>
            </div>
        </Dialog>
    )
}

export default ParserInfo;