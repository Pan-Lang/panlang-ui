import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import AvatarCard from '../components/AvatarCard';
import QwertycowMoo from '../images/QwertycowMoo.png';
import kgs5 from '../images/kgs5.png';
import renzol2 from '../images/renzol2.png';
import evanmm3 from '../images/evanmm3.png';

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: 'white',
  },
  p: {
    marginTop: 8,
    marginBottom: 8,
  },
  team: {
    textAlign: 'center',
    width: '100%',
    paddingBottom: 50,
  },
  avatarGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

/**
 * About page for Pan-Lang
 * Provides background for our application and service
 */
function About() {
  const classes = useStyles();
  const team = [
    { name: 'Kevin Zhou', src: QwertycowMoo, role: 'Lead Developer' },
    { name: 'Katie Sanders', src: kgs5 },
    { name: 'Renzo Ledesma', src: renzol2 },
    { name: 'Evan Matthews', src: evanmm3 },
  ];

  return (
    <Container className={classes.page}>
      <Container
        maxWidth="md"
        style={{
          paddingBottom: 120,
          marginBottom: 20,
        }}
      >
        {/* Background */}
        <Typography variant="h2">
          {'About '}
          <font style={{ color: '#26B020', fontWeight: 'bold' }}>
            Pan-Lang:
          </font>
        </Typography>
        <Typography component="p" className={classes.p}>
          Pan-Lang is an organizational web application designed to help local
          food bank organizers keep track of orders, maintain visitor records,
          and communicate with non-English speaking patrons.
        </Typography>
        <Typography component="p" className={classes.p}>
          Food insecurity is an important issue in the Champain County
          community. Nearly 15% of residents must deal with food insecurity.
          Many of these individuals are also ineligible for federal nutrition
          programs and must rely on local food pantries for meals.
        </Typography>
        <Typography component="p" className={classes.p}>
          On top of this, many of these individuals speak limited English,
          making it difficult for them to communicate their needs to food pantry
          staff. With Pan-Lang, our mission is to break this language barrier
          and provide a more efficient method of supporting those in need.
        </Typography>
      </Container>

      {/* Team */}
      <Container className={classes.team}>
        <Typography variant="h3">Our Team</Typography>
        <Container className={classes.avatarGroup}>
          {team.map((member) => (
            <AvatarCard
              name={member.name}
              src={member.src}
              alt={member.name}
              role={member.role}
            />
          ))}
        </Container>
      </Container>
    </Container>
  );
}

export default About;
