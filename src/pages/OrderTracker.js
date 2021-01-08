import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { updatePerson } from '../api/People';
import { useHistory } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '../firebase';
import { LANDING } from '../constants/Routes';

/**
 * Page with list of people with unfulfilled orders
 */
function OrderTracker() {
  const history = useHistory();
  const [user, userLoading, userError] = useAuthState(auth);
  const [query, setQuery] = useState();

  useEffect(() => {
    if (!Boolean(user)) {
      // If user is not logged in, redirect to home screen
      history.push(LANDING);
    } else {
      // If user is logged in, fetch their orders
      setQuery(
        db
          .collection('pantries')
          .doc(user.uid)
          .collection('people')
          .where('fulfilled', '==', false)
      );
      console.log(user.uid);
    }
  }, [history, user]);

  const [snapshot, snapLoading, snapError] = useCollection(query);

  function fulfillOrder(id) {
    console.log(snapshot.size);
    console.log('trying to fulfill', id);
    const requestBody = {
      pantry: user.uid,
      _id: id,
      fulfilled: true,
    };
    updatePerson(requestBody);
  }

  return (
    <Container>
      <p>
        {userError && <strong>User Error: {JSON.stringify(snapError)}</strong>}
        {userLoading && <span>User: Loading...</span>}
        {snapError && <strong>Collection Error: {JSON.stringify(snapError)}</strong>}
        {snapLoading && <span>Collection: Loading...</span>}
        {snapshot && (
          <span>
            Collection:{' '}
            {snapshot.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data())},{' '}
                <Button
                  onClick={() => {
                    fulfillOrder(doc.id);
                  }}
                >
                  Fulfill Person
                </Button>
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </Container>
  );
}

export default OrderTracker;
