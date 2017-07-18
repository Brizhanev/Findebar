/**
 * Created by Oleg Brizhanev on 18.07.2017.
 */

import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  databaseURL: 'https://findebar-1495402574717.firebaseio.com/'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
const db = firebaseApp.database()

export default db
