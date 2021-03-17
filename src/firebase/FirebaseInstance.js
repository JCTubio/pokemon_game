import firebase from 'firebase'

import config from './config'
import { sortByScore } from '../utils/helpers'
import {
  updateDailyLeaderboard,
  updateMonthlyLeaderboard,
  updateAllTimeLeaderboard,
} from '../store/actions/Actions'

import { store } from '../index'

const LEADERBOARD_COLLECTION = 'leaderboard'

class FirebaseInstance {
  constructor(configuration) {
    firebase.initializeApp(configuration)

    this.firestore = firebase.firestore()
  }

  getLeaderboards() {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1 // why would jan be 0 and not 1 :facepalm:
    const year = date.getFullYear()

    //get all-time best leaderboard
    this.firestore
      .collection(LEADERBOARD_COLLECTION)
      .orderBy('score', 'desc')
      .limit(10)
      .get()
      .then((querySnapshot) => {
        //upload querysnapshot to redux
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push(doc.data())
        })
        const sortedDocs = sortByScore(docs).slice(0, 10)
        store.dispatch(updateAllTimeLeaderboard(sortedDocs))
      })

    // get current month leaderboard
    this.firestore
      .collection(LEADERBOARD_COLLECTION)
      .where('year', '==', year)
      .where('month', '==', month)
      .get()
      .then((querySnapshot) => {
        //upload querysnapshot to redux
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push(doc.data())
        })
        const sortedDocs = sortByScore(docs).slice(0, 10)
        store.dispatch(updateMonthlyLeaderboard(sortedDocs))
      })

    // get current day leaderboard
    this.firestore
      .collection(LEADERBOARD_COLLECTION)
      .where('year', '==', year)
      .where('month', '==', month)
      .where('day', '==', day)
      .get()
      .then((querySnapshot) => {
        //upload querysnapshot to redux
        const docs = []
        querySnapshot.forEach((doc) => {
          docs.push(doc.data())
        })
        const sortedDocs = sortByScore(docs).slice(0, 10)
        store.dispatch(updateDailyLeaderboard(sortedDocs))
      })
  }

  saveScore(entry) {
    const { name, score } = entry

    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1 // why would jan be 0 and not 1 :facepalm:
    const year = date.getFullYear()

    this.firestore.collection(LEADERBOARD_COLLECTION).add({
      name,
      score,
      day,
      month,
      year
    }).then (
      this.getLeaderboards()
    )
  }
}

export default new FirebaseInstance(config)
