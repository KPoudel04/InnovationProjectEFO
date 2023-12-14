import mongoose from 'mongoose'

class Database {
  private static _instance: Database

  private constructor() {}

  public static get instance(): Database {
    this.assertURLDefined(process.env.MONGO_URL)

    if (!Database._instance) {
      Database._instance = new Database()
    }

    return Database._instance
  }

  public connect(): void {
    Database.assertURLDefined(process.env.MONGO_URL)
    mongoose.connect(process.env.MONGO_URL)
  }

  private static assertURLDefined(
    url: string | undefined
  ): asserts url is string {
    if (!url) {
      throw new Error('No MONGO_URL set')
    }
  }
}

export default Database
