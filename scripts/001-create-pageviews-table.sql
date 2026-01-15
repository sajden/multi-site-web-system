-- Create pageviews table for tracking
-- Run this script once to set up the database

CREATE TABLE IF NOT EXISTS pageviews (
  id BIGSERIAL PRIMARY KEY,
  site_id TEXT NOT NULL,
  host TEXT NOT NULL,
  path TEXT NOT NULL,
  referrer TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_pageviews_site_id ON pageviews(site_id);
CREATE INDEX IF NOT EXISTS idx_pageviews_created_at ON pageviews(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_pageviews_site_created ON pageviews(site_id, created_at DESC);

-- Add comment for documentation
COMMENT ON TABLE pageviews IS 'Stores pageview tracking data for all microsites';
