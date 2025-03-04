'use client';
import * as React from 'react';
import Container from '@mui/material/Container';
import { MenuItem, Select, Typography, FormControl, InputLabel, Grid2, Button } from '@mui/material';
import MainPageTable from '@/components/MainPageTable';
import MainPageTableInfo from '@/dialogs/MainPageTableInfo';
import dictionaries from '@/placeholders/dictionaries';
import rows from '@/placeholders/mainPageTableRows';

export default function Home() {
  return (
    <Container maxWidth={false}>
      <Typography variant='h4' mt={3} mb={4}>Вебка старта и завершения парсеров</Typography>
      <Grid2 mb={5} container spacing={2} columns={12}>
        <Grid2 size={2}>
          <FormControl size='small' fullWidth>
            <InputLabel id='filter-select-label'>Выберите фильтр</InputLabel>
            <Select labelId='filter-select-label' label='Выберите фильтр'>
              {dictionaries.filters.map(filter => {
                return <MenuItem key={filter.value} value={filter.value}>{filter.name}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={2}>
          <FormControl size='small' fullWidth>
            <InputLabel id='filter-priority-label'>Выберите приоритет</InputLabel>
            <Select labelId='filter-priority-label' label='Выберите приоритет'>
              {dictionaries.priorities.map(priority => {
                return <MenuItem key={priority.value} value={priority.value}>{priority.name}</MenuItem>;
              }
              )}
            </Select>
          </FormControl>
        </Grid2>
        <Grid2 size={2}>
          <Grid2 container spacing={1}>
            <Button variant='contained' size='medium' color='success'>Применить</Button>
            <MainPageTableInfo />
          </Grid2>
        </Grid2>
        <Grid2 size={3} offset={3}>
          <FormControl size='small' fullWidth>
            <InputLabel id='filter-priority-label'>Сортировка</InputLabel>
            <Select labelId='filter-priority-label' label='Сортировка'>
              {dictionaries.sorting.map(sort => {
                return <MenuItem key={sort.value} value={sort.value}>{sort.name}</MenuItem>;
              }
              )}
            </Select>
          </FormControl>
        </Grid2>
      </Grid2>
      <MainPageTable rows={rows} />
    </Container>
  );
}
