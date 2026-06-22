import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const fmt = (ds?: string | null) => {
  if (!ds) return "TBD";
  try {
    return new Date(ds).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return ds;
  }
};

export const YT_THUMB = (id: string) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export type Video = {
  id: string;
  title: string;
  yt_id: string | null;
  tour: string | null;
  date_label: string | null;
  sort_order: number;
};
export type Memory = {
  id: string;
  title: string;
  city: string;
  date_label: string | null;
  tags: string[];
  ig_url: string | null;
  img_url: string | null;
  emoji: string | null;
  height: number | null;
  bg: string | null;
  sort_order: number;
};
export type SchEvent = {
  id: string;
  name: string;
  city: string;
  venue: string | null;
  start_date: string;
  end_date: string | null;
  status: "upcoming" | "covering" | "completed";
};
export type Coverage = {
  id: number;
  active: boolean;
  name: string | null;
  city: string | null;
  venue: string | null;
  start_date: string | null;
  end_date: string | null;
  yt_url: string | null;
  ig_url: string | null;
  note: string | null;
};

export function useVideos() {
  return useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("videos")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Video[];
    },
  });
}

export function useMemories() {
  return useQuery({
    queryKey: ["memories"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("memories")
        .select("*")
        .order("sort_order")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Memory[];
    },
  });
}

export function useSchedule() {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("schedule_events")
        .select("*")
        .order("start_date");
      if (error) throw error;
      return (data ?? []) as SchEvent[];
    },
  });
}

export function useCoverage() {
  return useQuery({
    queryKey: ["coverage"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("coverage")
        .select("*")
        .eq("id", 1)
        .maybeSingle();
      if (error) throw error;
      return data as Coverage | null;
    },
  });
}

export function useInvalidateAll() {
  const qc = useQueryClient();
  return () => {
    qc.invalidateQueries({ queryKey: ["videos"] });
    qc.invalidateQueries({ queryKey: ["memories"] });
    qc.invalidateQueries({ queryKey: ["schedule"] });
    qc.invalidateQueries({ queryKey: ["coverage"] });
  };
}
