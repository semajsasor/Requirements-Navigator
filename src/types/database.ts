import type {
  EligibilityRequirement,
  EstimatedProcessingTime,
  OfficialSourceLink,
  ContentReviewStatus,
  ProcessDifficulty,
  ProcessDocument,
  ProcessFaq,
  ProcessFee,
  ProcessInstruction,
  ProcessStatus,
} from "@/types/process";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type SavedGuideStatus = "Not started" | "In progress" | "Completed";
export type ChecklistItemType = "document" | "step";

export type ProcessGuideRow = {
  id: string;
  slug: string;
  title: string;
  category: string;
  country_code: string;
  country_name: string;
  region: string | null;
  city: string | null;
  summary: string;
  audience: string;
  eligibility: EligibilityRequirement[];
  required_documents: ProcessDocument[];
  instructions: ProcessInstruction[];
  fees: ProcessFee[];
  estimated_processing_time: EstimatedProcessingTime;
  common_mistakes: string[];
  tips: string[];
  faq: ProcessFaq[];
  official_source_links: OfficialSourceLink[];
  last_reviewed_date: string;
  review_status: ContentReviewStatus;
  difficulty: ProcessDifficulty;
  tags: string[];
  status: ProcessStatus;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type ProcessGuideInsert = {
  id?: string;
  slug: string;
  title: string;
  category: string;
  country_code: string;
  country_name: string;
  region?: string | null;
  city?: string | null;
  summary: string;
  audience: string;
  eligibility?: EligibilityRequirement[];
  required_documents?: ProcessDocument[];
  instructions?: ProcessInstruction[];
  fees?: ProcessFee[];
  estimated_processing_time: EstimatedProcessingTime;
  common_mistakes?: string[];
  tips?: string[];
  faq?: ProcessFaq[];
  official_source_links?: OfficialSourceLink[];
  last_reviewed_date: string;
  review_status?: ContentReviewStatus;
  difficulty?: ProcessDifficulty;
  tags?: string[];
  status?: ProcessStatus;
  created_at?: string;
  updated_at?: string;
};

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          role: "user" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          role?: "user" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["users"]["Insert"]>;
        Relationships: [];
      };
      process_guides: {
        Row: ProcessGuideRow;
        Insert: ProcessGuideInsert;
        Update: Partial<ProcessGuideInsert>;
        Relationships: [];
      };
      saved_guides: {
        Row: {
          id: string;
          user_id: string;
          guide_id: string;
          status: SavedGuideStatus;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          guide_id: string;
          status?: SavedGuideStatus;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["saved_guides"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "saved_guides_guide_id_fkey";
            columns: ["guide_id"];
            isOneToOne: false;
            referencedRelation: "process_guides";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "saved_guides_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      checklist_progress: {
        Row: {
          id: string;
          user_id: string;
          saved_guide_id: string;
          item_id: string;
          item_type: ChecklistItemType;
          completed: boolean;
          completed_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          saved_guide_id: string;
          item_id: string;
          item_type: ChecklistItemType;
          completed?: boolean;
          completed_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["checklist_progress"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "checklist_progress_saved_guide_id_fkey";
            columns: ["saved_guide_id"];
            isOneToOne: false;
            referencedRelation: "saved_guides";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "checklist_progress_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      user_settings: {
        Row: {
          user_id: string;
          default_country_code: string | null;
          email_reminders: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          default_country_code?: string | null;
          email_reminders?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["user_settings"]["Insert"]>;
        Relationships: [
          {
            foreignKeyName: "user_settings_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
