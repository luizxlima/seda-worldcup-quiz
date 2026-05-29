-- =============================================
-- SEDA World Cup Quiz — Supabase Setup
-- Execute isso no SQL Editor do Supabase
-- =============================================

-- 1. Cria a tabela do leaderboard
CREATE TABLE IF NOT EXISTS leaderboard (
  email        TEXT PRIMARY KEY,
  name         TEXT NOT NULL DEFAULT '',
  city         TEXT NOT NULL DEFAULT '',
  total_score  INTEGER NOT NULL DEFAULT 0,
  total_time   NUMERIC(10, 1) NOT NULL DEFAULT 0,
  stages_played INTEGER NOT NULL DEFAULT 0,
  last_played  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Índice para ordenação rápida do ranking
CREATE INDEX IF NOT EXISTS idx_leaderboard_ranking
  ON leaderboard (total_score DESC, total_time ASC);

-- 3. Habilita Row Level Security
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- 4. Política: qualquer pessoa pode LER o leaderboard (ranking público)
CREATE POLICY "leaderboard_read_public"
  ON leaderboard FOR SELECT
  USING (true);

-- 5. Política: qualquer pessoa pode INSERIR/ATUALIZAR seu próprio score
--    (upsert via anon key — sem autenticação necessária)
CREATE POLICY "leaderboard_upsert_public"
  ON leaderboard FOR INSERT
  WITH CHECK (true);

CREATE POLICY "leaderboard_update_public"
  ON leaderboard FOR UPDATE
  USING (true);
