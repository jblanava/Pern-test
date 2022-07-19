exports.up = (pgm) => {
    pgm.addColumns('connection', {
      connectionName: { type: 'text', notNull: true },
    })
  }
