import getGameMode from './gameModeSelector'

it('returns the gameMode from state', () => {
  const stateMock = {
    app: {
      gameMode: 'foo',
    },
  }

  const returnValue = getGameMode(stateMock)

  expect(returnValue).toBe(stateMock.app.gameMode)
})
