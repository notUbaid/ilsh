
-- Roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN LANGUAGE SQL STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

-- Status enum
CREATE TYPE public.event_status AS ENUM ('upcoming', 'covering', 'completed');

-- Videos
CREATE TABLE public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  yt_id TEXT,
  tour TEXT,
  date_label TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.videos TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.videos TO authenticated;
GRANT ALL ON public.videos TO service_role;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read videos" ON public.videos FOR SELECT USING (true);
CREATE POLICY "admin write videos" ON public.videos FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Memories
CREATE TABLE public.memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  city TEXT NOT NULL,
  date_label TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  ig_url TEXT,
  img_url TEXT,
  emoji TEXT DEFAULT '🏀',
  height INT DEFAULT 200,
  bg TEXT,
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.memories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.memories TO authenticated;
GRANT ALL ON public.memories TO service_role;
ALTER TABLE public.memories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read memories" ON public.memories FOR SELECT USING (true);
CREATE POLICY "admin write memories" ON public.memories FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Schedule
CREATE TABLE public.schedule_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  venue TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  status event_status NOT NULL DEFAULT 'upcoming',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.schedule_events TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.schedule_events TO authenticated;
GRANT ALL ON public.schedule_events TO service_role;
ALTER TABLE public.schedule_events ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read schedule" ON public.schedule_events FOR SELECT USING (true);
CREATE POLICY "admin write schedule" ON public.schedule_events FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Coverage (singleton)
CREATE TABLE public.coverage (
  id INT PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  active BOOLEAN NOT NULL DEFAULT false,
  name TEXT,
  city TEXT,
  venue TEXT,
  start_date DATE,
  end_date DATE,
  yt_url TEXT,
  ig_url TEXT,
  note TEXT,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.coverage TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.coverage TO authenticated;
GRANT ALL ON public.coverage TO service_role;
ALTER TABLE public.coverage ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public read coverage" ON public.coverage FOR SELECT USING (true);
CREATE POLICY "admin write coverage" ON public.coverage FOR ALL TO authenticated
  USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Contact messages
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  type TEXT,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT, DELETE ON public.contact_messages TO authenticated;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can send" ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "admin read messages" ON public.contact_messages FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admin delete messages" ON public.contact_messages FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));
