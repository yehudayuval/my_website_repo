import { Pool } from 'pg';

declare global {
  var _postgresPool: Pool | undefined;
}

function getPool() {
  if (global._postgresPool) {
    return global._postgresPool;
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10, // Limit pool size per lambda
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  });

  if (process.env.NODE_ENV !== 'production') {
    global._postgresPool = pool;
  }

  return pool;
}

export const pool = getPool();