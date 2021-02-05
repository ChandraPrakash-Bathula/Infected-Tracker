import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Global Report.</Typography>
      <Grid container spacing={4} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Infected-People"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of active cases of COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered-People"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Death-Count"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Number of deaths caused by COVID-19 Virus."
        />
      </Grid>
    </div>
  );
};

export default Info;
