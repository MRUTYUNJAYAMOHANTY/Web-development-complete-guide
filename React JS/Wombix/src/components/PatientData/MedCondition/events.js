const now = new Date()

export default [
  {
    id: 14,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 0)),
    end: new Date(new Date().setHours(new Date().getHours() + 0)),
  },
]
